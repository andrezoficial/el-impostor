import { useState, useCallback } from 'react';
import { getRandomWord } from '../data/wordBank';

export const useGame = () => {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);
  const [impostorIndex, setImpostorIndex] = useState(-1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState('setup'); // setup | role | voting | results
  const [votes, setVotes] = useState([]);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  const [eliminatedIndex, setEliminatedIndex] = useState(-1);
  const [lastWord, setLastWord] = useState(null);
  const [lastImpostorName, setLastImpostorName] = useState(null);

  // Multi-round voting state
  const [votingRound, setVotingRound] = useState(1);      // ronda actual (1, 2, 3)
  const [maxVotingRounds, setMaxVotingRounds] = useState(1); // cuántas rondas máx
  const [votingTied, setVotingTied] = useState(false);    // hubo empate en ronda previa
  const [tiedPlayers, setTiedPlayers] = useState([]);     // índices empatados
  const [allRoundsVotes, setAllRoundsVotes] = useState([]); // historial de rondas

  const pickImpostor = useCallback((playerNames, previousImpostorName) => {
    if (playerNames.length <= 1) return 0;
    let index;
    do {
      index = Math.floor(Math.random() * playerNames.length);
    } while (playerNames.length > 1 && playerNames[index] === previousImpostorName);
    return index;
  }, []);

  // Calcula cuántas rondas de votación según número de jugadores
  const calcMaxRounds = (count) => {
    if (count >= 9) return 3;
    if (count >= 6) return 2;
    return 1;
  };

  const beginRound = useCallback((playerNames, cat) => {
    const word = getRandomWord(lastWord, cat);
    const impostor = pickImpostor(playerNames, lastImpostorName);
    const rounds = calcMaxRounds(playerNames.length);

    setPlayers(playerNames);
    setCurrentWord(word);
    setLastWord(word.word);
    setImpostorIndex(impostor);
    setLastImpostorName(playerNames[impostor]);
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
  }, [lastWord, lastImpostorName, pickImpostor]);

  const startGame = useCallback((playerNames, selectedCategory = null) => {
    if (playerNames.length < 3) {
      throw new Error('Necesitas al menos 3 jugadores');
    }
    setCategory(selectedCategory);
    beginRound(playerNames, selectedCategory);
  }, [beginRound]);

  const playAgainSamePlayers = useCallback(() => {
    if (players.length < 3) return;
    beginRound(players, category);
  }, [players, category, beginRound]);

  const nextPlayer = useCallback(() => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
      setCurrentVoterIndex(0);
      setPhase('voting');
    }
  }, [currentPlayerIndex, players.length]);

  // Determina el resultado de una ronda de votación
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
          // Ganador claro
          setEliminatedIndex(tied[0]);
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setPhase('results');
        } else if (votingRound < maxVotingRounds && tied.length > 1) {
          // Empate → ronda adicional entre empatados
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setVotingTied(true);
          setTiedPlayers(tied);
          setVotingRound(r => r + 1);
          setVotes(new Array(players.length).fill(0));
          setCurrentVoterIndex(0);
          // No cambia phase (sigue en voting) → el VotingScreen detecta el nuevo round
        } else {
          // Empate y ya no hay más rondas → sorteo entre empatados
          const winner = tied.length > 0
            ? tied[Math.floor(Math.random() * tied.length)]
            : -1;
          setEliminatedIndex(winner);
          setAllRoundsVotes(r => [...r, { votes: newVotes, round: votingRound }]);
          setPhase('results');
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

  const resetGame = useCallback(() => {
    setPlayers([]);
    setCategory(null);
    setCurrentWord(null);
    setImpostorIndex(-1);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setPhase('setup');
    setVotes([]);
    setEliminatedIndex(-1);
    setLastWord(null);
    setLastImpostorName(null);
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
    return currentPlayerIndex === impostorIndex;
  }, [currentPlayerIndex, impostorIndex]);

  const getWinner = useCallback(() => {
    if (eliminatedIndex === -1) return null;
    return eliminatedIndex === impostorIndex ? 'crew' : 'impostor';
  }, [eliminatedIndex, impostorIndex]);

  return {
    players,
    category,
    currentWord,
    impostorIndex,
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
    startGame,
    playAgainSamePlayers,
    nextPlayer,
    castVote,
    resetGame,
    getCurrentPlayer,
    isImpostor,
    getWinner,
    setPhase
  };
};
