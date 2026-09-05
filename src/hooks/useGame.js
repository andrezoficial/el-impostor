import { useState, useCallback } from 'react';
import { getRandomWord } from '../data/wordBank';

export const useGame = () => {
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState(null); // null / 'Todas' = sin filtro
  const [currentWord, setCurrentWord] = useState(null);
  const [impostorIndex, setImpostorIndex] = useState(-1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState('setup'); // setup | role | voting | results
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

  const beginRound = useCallback((playerNames, cat) => {
    const word = getRandomWord(lastWord, cat);
    const impostor = pickImpostor(playerNames, lastImpostorName);

    setPlayers(playerNames);
    setCurrentWord(word);
    setLastWord(word.word);
    setImpostorIndex(impostor);
    setLastImpostorName(playerNames[impostor]);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setVotes(new Array(playerNames.length).fill(0));
    setPhase('role');
  }, [lastWord, lastImpostorName, pickImpostor]);

  const startGame = useCallback((playerNames, selectedCategory = null) => {
    if (playerNames.length < 3) {
      throw new Error('Necesitas al menos 3 jugadores');
    }
    setCategory(selectedCategory);
    beginRound(playerNames, selectedCategory);
  }, [beginRound]);

  // Empieza una nueva ronda con los mismos jugadores y la misma
  // categoría (sin volver a escribir los nombres), con palabra e
  // impostor nuevos.
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

  // Registra el voto del jugador actual (currentVoterIndex) para
  // eliminar al jugador acusado (accusedIndex) y avanza el turno de
  // votación. Cuando el último jugador vota, la partida pasa
  // automáticamente a la pantalla de resultados, donde se revela a
  // quién eliminó el grupo.
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
    setCategory(null);
    setCurrentWord(null);
    setImpostorIndex(-1);
    setCurrentPlayerIndex(0);
    setCurrentVoterIndex(0);
    setPhase('setup');
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

  // Jugador(es) eliminado(s): el/los que recibieron más votos.
  const getEliminated = useCallback(() => {
    if (votes.length === 0) return [];
    const maxVotes = Math.max(...votes);
    return votes.reduce((acc, count, index) => {
      if (count === maxVotes && count > 0) {
        acc.push(index);
      }
      return acc;
    }, []);
  }, [votes]);

  const getWinner = useCallback(() => {
    const eliminated = getEliminated();
    if (eliminated.length === 0) return null;
    // Si el impostor fue eliminado, ganan los tripulantes
    return eliminated.includes(impostorIndex) ? 'crew' : 'impostor';
  }, [getEliminated, impostorIndex]);

  return {
    players,
    category,
    currentWord,
    impostorIndex,
    currentPlayerIndex,
    currentVoterIndex,
    phase,
    votes,
    startGame,
    playAgainSamePlayers,
    nextPlayer,
    castVote,
    resetGame,
    getCurrentPlayer,
    isImpostor,
    getEliminated,
    getWinner,
    setPhase
  };
};
