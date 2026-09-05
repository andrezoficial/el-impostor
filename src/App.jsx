import React from 'react';
import { useGame } from './hooks/useGame';
import { Setup } from './components/Setup';
import { RoleScreen } from './components/RoleScreen';
import { VotingScreen } from './components/VotingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { AnimatePresence, motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import './styles/global.css';

function App() {
  const game = useGame();

  const renderScreen = () => {
    switch (game.phase) {
      case 'setup':
        return <Setup onStart={game.startGame} />;

      case 'role':
        return (
          <RoleScreen
            key={`player-${game.currentPlayerIndex}`}
            player={game.getCurrentPlayer()}
            isImpostor={game.isImpostor()}
            word={game.currentWord?.word}
            clue={game.currentWord?.clue}
            onNext={game.nextPlayer}
            totalPlayers={game.players.length}
            currentIndex={game.currentPlayerIndex}
          />
        );

      case 'voting':
        return (
          <VotingScreen
            key={`voter-${game.currentVoterIndex}-round-${game.votingRound}`}
            players={game.players}
            onVote={game.castVote}
            currentVoterIndex={game.currentVoterIndex}
            voterName={game.players[game.currentVoterIndex]}
            votingRound={game.votingRound}
            maxVotingRounds={game.maxVotingRounds}
            votingTied={game.votingTied}
            tiedPlayers={game.tiedPlayers}
          />
        );

      case 'results':
        return (
          <ResultsScreen
            players={game.players}
            votes={game.votes}
            eliminatedIndex={game.eliminatedIndex}
            impostorIndex={game.impostorIndex}
            word={game.currentWord?.word}
            clue={game.currentWord?.clue}
            onReset={game.resetGame}
            onPlayAgain={game.playAgainSamePlayers}
            allRoundsVotes={game.allRoundsVotes}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={game.phase}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="app-footer">
        Creado por <strong>Andrés Suárez Moreno</strong>
        {' · '}
        <a
          href="https://instagram.com/andres.suarez.moreno"
          target="_blank"
          rel="noopener noreferrer"
          className="app-footer-link"
        >
          <FaInstagram style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          @andres.suarez.moreno
        </a>
      </footer>
    </div>
  );
}

export default App;
