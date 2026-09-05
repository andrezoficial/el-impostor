import { useState, useCallback } from 'react';
import { getRandomWord } from '../data/wordBank';

export const useGame = () => {
  const [players, setPlayers] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [impostorIndex, setImpostorIndex] = useState(-1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState('setup'); // setup | role | voting | results
  const [descriptions, setDescriptions] = useState([]);
  const [votes, setVotes] = useState([]);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  // Recordamos la última palabra y el último impostor para no repetirlos
  // dos veces seguidas cuando se juega otra ronda.
  const [lastWord, setLastWord] = useState(null);
  const [lastImpostorName, setLastImpostorName] = useState(null);

  const pickImpostor = useCallback((playerNames, previousImpostorName) => {
    if (playerNames.length <= 1) return 0;

    let index;
    do {
      index = Math.floor(Math.random() * playerNames.length);
    } while (playerNames.length > 1 && playerNames[index] === previousImpostorName);

    return index;
  }, []);

  const beginRound = useCallback((playerNames) => {
    const word = getRandomWord(lastWord);
    const impostor = pickImpostor(playerNames, lastImpostorName);

    setPlayers(playerNames);
    setCurrentWord(word);
    setLastWord(word.word);
    setImpostorIndex(impostor);
    setLastImpostorName(playerNames[impostor]);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setDescriptions(new Array(playerNames.length).fill(''));
    setVotes(new Array(playerNames.length).fill(0));
    setPhase('role');
  }, [lastWord, lastImpostorName, pickImpostor]);

  const startGame = useCallback((playerNames) => {
    if (playerNames.length < 3) {
      throw new Error('Necesitas al menos 3 jugadores');
    }
    beginRound(playerNames);
  }, [beginRound]);

  // Empieza una nueva ronda con los mismos jugadores (sin volver a
  // escribir los nombres), eligiendo una palabra y un impostor nuevos.
  const playAgainSamePlayers = useCallback(() => {
    if (players.length < 3) return;
    beginRound(players);
  }, [players, beginRound]);

  const nextPlayer = useCallback(() => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
      setCurrentVoterIndex(0);
      setPhase('voting');
    }
  }, [currentPlayerIndex, players.length]);

  const addDescription = useCallback((description) => {
    setDescriptions(prev => {
      const newDescriptions = [...prev];
      newDescriptions[currentPlayerIndex] = description;
      return newDescriptions;
    });
  }, [currentPlayerIndex]);

  // Registra el voto del jugador actual (currentVoterIndex) contra el
  // jugador acusado (accusedIndex) y avanza el turno de votación.
  // Cuando el último jugador vota, la partida pasa automáticamente
  // a la pantalla de resultados.
  const castVote = useCallback((accusedIndex) => {
    setVotes(prev => {
      const newVotes = [...prev];
      newVotes[accusedIndex] = (newVotes[accusedIndex] || 0) + 1;
      return newVotes;
    });

    setCurrentVoterIndex(prev => {
      const next = prev + 1;
      if (next >= players.length) {
        setPhase('results');
        return prev;
      }
      return next;
    });
  }, [players.length]);

  const resetGame = useCallback(() => {
    setPlayers([]);
    setCurrentWord(null);
    setImpostorIndex(-1);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setPhase('setup');
    setDescriptions([]);
    setVotes([]);
    setLastWord(null);
    setLastImpostorName(null);
  }, []);

  const getCurrentPlayer = useCallback(() => {
    return players[currentPlayerIndex] || null;
  }, [players, currentPlayerIndex]);

  const isImpostor = useCallback(() => {
    return currentPlayerIndex === impostorIndex;
  }, [currentPlayerIndex, impostorIndex]);

  const getVoteResults = useCallback(() => {
    const maxVotes = Math.max(...votes);
    const winners = votes.reduce((acc, count, index) => {
      if (count === maxVotes && count > 0) {
        acc.push(index);
      }
      return acc;
    }, []);
    return winners;
  }, [votes]);

  const getWinner = useCallback(() => {
    const results = getVoteResults();
    if (results.length === 0) return null;
    // Si el más votado es el impostor, ganan los tripulantes
    return results.includes(impostorIndex) ? 'crew' : 'impostor';
  }, [getVoteResults, impostorIndex]);

  return {
    players,
    currentWord,
    impostorIndex,
    currentPlayerIndex,
    currentVoterIndex,
    phase,
    descriptions,
    votes,
    startGame,
    playAgainSamePlayers,
    nextPlayer,
    addDescription,
    castVote,
    resetGame,
    getCurrentPlayer,
    isImpostor,
    getVoteResults,
    getWinner,
    setPhase
  };
};