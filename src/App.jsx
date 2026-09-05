import React from 'react';
import { useGame } from './hooks/useGame';
import { Setup } from './components/Setup';
import { RoleScreen } from './components/RoleScreen';
import { VotingScreen } from './components/VotingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { AnimatePresence } from 'framer-motion';
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
            players={game.players}
            descriptions={game.descriptions}
            onVote={game.addVote}
            onFinish={game.finishVoting}
            currentVotes={game.votes}
          />
        );
      
      case 'results':
        return (
          <ResultsScreen
            players={game.players}
            descriptions={game.descriptions}
            votes={game.votes}
            impostorIndex={game.impostorIndex}
            word={game.currentWord?.word}
            clue={game.currentWord?.clue}
            onReset={game.resetGame}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <AnimatePresence mode="wait">
        <div key={game.phase}>
          {renderScreen()}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;