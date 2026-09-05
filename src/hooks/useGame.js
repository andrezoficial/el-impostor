import { useState, useCallback, useMemo } from 'react';
import { getRandomWord } from '../data/wordBank';

export const useGame = () => {
  const [players, setPlayers] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [impostorIndex, setImpostorIndex] = useState(-1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState('setup'); // setup | role | voting | results
  const [descriptions, setDescriptions] = useState([]);
  const [votes, setVotes] = useState([]);

  const startGame = useCallback((playerNames) => {
    if (playerNames.length < 3) {
      throw new Error('Necesitas al menos 3 jugadores');
    }

    const word = getRandomWord();
    const impostor = Math.floor(Math.random() * playerNames.length);

    setPlayers(playerNames);
    setCurrentWord(word);
    setImpostorIndex(impostor);
    setCurrentPlayerIndex(0);
    setDescriptions(new Array(playerNames.length).fill(''));
    setVotes(new Array(playerNames.length).fill(0));
    setPhase('role');
  }, []);

  const nextPlayer = useCallback(() => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
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

  const addVote = useCallback((playerIndex) => {
    setVotes(prev => {
      const newVotes = [...prev];
      newVotes[playerIndex] = (newVotes[playerIndex] || 0) + 1;
      return newVotes;
    });
  }, []);

  const finishVoting = useCallback(() => {
    setPhase('results');
  }, []);

  const resetGame = useCallback(() => {
    setPlayers([]);
    setCurrentWord(null);
    setImpostorIndex(-1);
    setCurrentPlayerIndex(0);
    setPhase('setup');
    setDescriptions([]);
    setVotes([]);
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
    phase,
    descriptions,
    votes,
    startGame,
    nextPlayer,
    addDescription,
    addVote,
    finishVoting,
    resetGame,
    getCurrentPlayer,
    isImpostor,
    getVoteResults,
    getWinner,
    setPhase
  };
};