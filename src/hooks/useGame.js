import { useState, useCallback } from 'react';
import { getRandomWord } from '../data/wordBank';

export const useGame = () => {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);
  const [impostorIndices, setImpostorIndices] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState('setup');
  const [votes, setVotes] = useState([]);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  const [eliminatedIndex, setEliminatedIndex] = useState(-1);
  const [lastWord, setLastWord] = useState(null);
  const [lastImpostorNames, setLastImpostorNames] = useState([]);
  const [firstPlayerIndex, setFirstPlayerIndex] = useState(0);
  const [usedWords, setUsedWords] = useState([]);
  const [numImpostors, setNumImpostors] = useState(1);

  // Multi-round voting state
  const [votingRound, setVotingRound] = useState(1);
  const [maxVotingRounds, setMaxVotingRounds] = useState(1);
  const [votingTied, setVotingTied] = useState(false);
  const [tiedPlayers, setTiedPlayers] = useState([]);
  const [allRoundsVotes, setAllRoundsVotes] = useState([]);

  const pickImpostors = useCallback((playerNames, count, previousImpostorNames) => {
    const safeCount = Math.min(count, Math.floor(playerNames.length / 2));
    const indices = [];
    const available = playerNames.map((_, i) => i);

    // Try to avoid repeating all previous impostors if possible
    const preferred = available.filter(i => !previousImpostorNames.includes(playerNames[i]));
    const pool = preferred.length >= safeCount ? preferred : available;

    while (indices.length < safeCount) {
      const remaining = pool.filter(i => !indices.includes(i));
      if (remaining.length === 0) break;
      const pick = remaining[Math.floor(Math.random() * remaining.length)];
      indices.push(pick);
    }

    return indices.sort((a, b) => a - b);
  }, []);

  const calcMaxRounds = (count) => {
    if (count >= 9) return 3;
    if (count >= 6) return 2;
    return 1;
  };

  const beginRound = useCallback((playerNames, cat, impostorCount) => {
    const word = getRandomWord(usedWords, cat);
    const impostors = pickImpostors(playerNames, impostorCount, lastImpostorNames);
    const rounds = calcMaxRounds(playerNames.length);
    const firstPlayer = Math.floor(Math.random() * playerNames.length);

    setPlayers(playerNames);
    setCurrentWord(word);
    setLastWord(word.id);
    setUsedWords(prev => [...prev, word.id]);
    setImpostorIndices(impostors);
    setLastImpostorNames(impostors.map(i => playerNames[i]));
    setFirstPlayerIndex(firstPlayer);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setVotes(new Array(playerNames.length).fill(0));
    setEliminatedIndex(-1);
    setVotingRound(1);
    setMaxVotingRounds(rounds);
    setVotingTied(false);
    setTiedPlayers([]);
    setAllRoundsVotes([]);
    setPhase('role');
  }, [usedWords, lastImpostorNames, pickImpostors]);

  const startGame = useCallback((playerNames, selectedCategory = null, impostorCount = 1) => {
    if (playerNames.length < 3) {
      throw new Error('Necesitas al menos 3 jugadores');
    }
    setUsedWords([]);
    setCategory(selectedCategory);
    setNumImpostors(impostorCount);
    beginRound(playerNames, selectedCategory, impostorCount);
  }, [beginRound]);

  const playAgainSamePlayers = useCallback(() => {
    if (players.length < 3) return;
    beginRound(players, category, numImpostors);
  }, [players, category, numImpostors, beginRound]);

  const playAgainWithCategory = useCallback((newCategory) => {
    if (players.length < 3) return;
    setCategory(newCategory);
    beginRound(players, newCategory, numImpostors);
  }, [players, numImpostors, beginRound]);

  const nextPlayer = useCallback(() => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
      setPhase('firstPlayer');
    }
  }, [currentPlayerIndex, players.length]);

  const startVoting = useCallback(() => {
    setCurrentVoterIndex(0);
    setPhase('voting');
  }, []);

  const resolveVotes = useCallback((newVotes, eligibleIndices = null) => {
    const indices = eligibleIndices !== null ? eligibleIndices : newVotes.map((_, i) => i);
    const maxV = Math.max(...indices.map(i => newVotes[i]));
    const tied = indices.filter(i => newVotes[i] === maxV && newVotes[i] > 0);
    return { maxV, tied };
  }, []);

  const castVote = useCallback((accusedIndex) => {
    const isLastVote = currentVoterIndex + 1 >= players.length;

    setVotes(prev => {
      const newVotes = [...prev];
      newVotes[accusedIndex] = (newVotes[accusedIndex] || 0) + 1;

      if (isLastVote) {
        const { tied } = resolveVotes(newVotes);

        if (tied.length === 1) {
          setEliminatedIndex(tied[0]);
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setPhase('reveal');
        } else if (votingRound < maxVotingRounds && tied.length > 1) {
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setVotingTied(true);
          setTiedPlayers(tied);
          setVotingRound(r => r + 1);
          setVotes(new Array(players.length).fill(0));
          setCurrentVoterIndex(0);
        } else {
          const winner = tied.length > 0
            ? tied[Math.floor(Math.random() * tied.length)]
            : -1;
          setEliminatedIndex(winner);
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setPhase('reveal');
        }
      }

      return newVotes;
    });

    setCurrentVoterIndex(prev => {
      const next = prev + 1;
      if (next >= players.length) return prev;
      return next;
    });
  }, [players.length, currentVoterIndex, votingRound, maxVotingRounds, resolveVotes]);

  // Cambia la palabra durante la votación sin cambiar los impostores.
  // Se cancela cualquier votación parcial y se vuelve a mostrar el reparto
  // de roles para que todos reciban la nueva palabra de forma privada.
  const changeWord = useCallback(() => {
    if (players.length < 3 || !currentWord) return;

    const word = getRandomWord(usedWords, category);

    setCurrentWord(word);
    setLastWord(word.id);
    setUsedWords(prev => [...prev, word.id]);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setVotes(new Array(players.length).fill(0));
    setEliminatedIndex(-1);
    setVotingRound(1);
    setVotingTied(false);
    setTiedPlayers([]);
    setAllRoundsVotes([]);
    setPhase('role');
  }, [players.length, currentWord, usedWords, category]);

  const resetGame = useCallback(() => {
    setPlayers([]);
    setCategory(null);
    setCurrentWord(null);
    setImpostorIndices([]);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setPhase('setup');
    setVotes([]);
    setEliminatedIndex(-1);
    setLastWord(null);
    setLastImpostorNames([]);
    setFirstPlayerIndex(0);
    setUsedWords([]);
    setNumImpostors(1);
    setVotingRound(1);
    setMaxVotingRounds(1);
    setVotingTied(false);
    setTiedPlayers([]);
    setAllRoundsVotes([]);
  }, []);

  const getCurrentPlayer = useCallback(() => {
    return players[currentPlayerIndex] || null;
  }, [players, currentPlayerIndex]);

  const isImpostor = useCallback(() => {
    return impostorIndices.includes(currentPlayerIndex);
  }, [currentPlayerIndex, impostorIndices]);

  const getWinner = useCallback(() => {
    if (eliminatedIndex === -1) return null;
    return impostorIndices.includes(eliminatedIndex) ? 'crew' : 'impostor';
  }, [eliminatedIndex, impostorIndices]);

  // Legacy: first impostor index for backward compat with components that use it
  const impostorIndex = impostorIndices[0] ?? -1;

  return {
    players,
    category,
    currentWord,
    impostorIndex,       // legacy – primer impostor
    impostorIndices,     // nuevo – todos los impostores
    numImpostors,
    firstPlayerIndex,
    currentPlayerIndex,
    currentVoterIndex,
    phase,
    votes,
    eliminatedIndex,
    votingRound,
    maxVotingRounds,
    votingTied,
    tiedPlayers,
    allRoundsVotes,
    usedWords,
    startGame,
    playAgainSamePlayers,
    playAgainWithCategory,
    nextPlayer,
    startVoting,
    castVote,
    changeWord,
    resetGame,
    getCurrentPlayer,
    isImpostor,
    getWinner,
    setPhase
  };
};
