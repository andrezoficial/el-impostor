import React, { useEffect } from 'react';
import { unlockAudio } from './hooks/useSounds';
import { useGame } from './hooks/useGame';
import { useLanguage } from './i18n/LanguageContext';
import { Setup } from './components/Setup';
import { RoleScreen } from './components/RoleScreen';
import { FirstPlayerScreen } from './components/FirstPlayerScreen';
import { VotingScreen } from './components/VotingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ReplayScreen } from './components/ReplayScreen';
import { ImpostorReveal } from './components/ImpostorReveal';
import { AnimatePresence, motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import './styles/global.css';

// Selector de idioma: un pequeño toggle ES/EN. Se muestra sobre todo en
// la pantalla de inicio (setup), pero queda disponible en todo momento
// por si el usuario quiere cambiarlo a mitad de partida.
const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '16px',
      }}
    >
      {[
        { code: 'es', label: '🇪🇸 Español' },
        { code: 'en', label: '🇬🇧 English' },
      ].map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            border: lang === code ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.15)',
            background: lang === code ? 'rgba(233, 69, 96, 0.15)' : 'transparent',
            color: lang === code ? 'white' : 'var(--text-secondary)',
            transition: 'all 0.2s ease',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

function App() {
  const game = useGame();
  const { t, lang } = useLanguage();

  // Desbloquea el audio en el primer toque/clic en cualquier parte de la
  // app. Esto es clave en móviles (especialmente iOS): el AudioContext debe
  // "despertarse" dentro de un gesto real del usuario, y hacerlo lo antes
  // posible evita que los sonidos programados con setTimeout (countdown,
  // revelación, victoria) queden silenciados más adelante.
  useEffect(() => {
    const handler = () => {
      unlockAudio();
      window.removeEventListener('pointerdown', handler);
      window.removeEventListener('touchend', handler);
      window.removeEventListener('click', handler);
    };
    window.addEventListener('pointerdown', handler, { once: true });
    window.addEventListener('touchend', handler, { once: true });
    window.addEventListener('click', handler, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handler);
      window.removeEventListener('touchend', handler);
      window.removeEventListener('click', handler);
    };
  }, []);

  // Texto de la palabra/pista actual, localizado al idioma activo.
  const localizedWord = game.currentWord ? game.currentWord[lang] : null;

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
            word={localizedWord?.word}
            clue={localizedWord?.clue}
            onNext={game.nextPlayer}
            totalPlayers={game.players.length}
            currentIndex={game.currentPlayerIndex}
          />
        );

      case 'firstPlayer':
        return (
          <FirstPlayerScreen
            firstPlayerName={game.players[game.firstPlayerIndex]}
            onNext={game.startVoting}
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

      case 'reveal':
        return (
          <ImpostorReveal
            impostorIndices={game.impostorIndices}
            players={game.players}
            eliminatedIndex={game.eliminatedIndex}
            impostorIndex={game.impostorIndex}
            onDone={() => game.setPhase('results')}
          />
        );

      case 'results':
        return (
          <ResultsScreen
            players={game.players}
            votes={game.votes}
            eliminatedIndex={game.eliminatedIndex}
            impostorIndex={game.impostorIndex}
            impostorIndices={game.impostorIndices}
            word={localizedWord?.word}
            clue={localizedWord?.clue}
            onReset={game.resetGame}
            onPlayAgain={() => game.setPhase('replay')}
            allRoundsVotes={game.allRoundsVotes}
          />
        );

      case 'replay':
        return (
          <ReplayScreen
            players={game.players}
            currentCategory={game.category}
            usedWords={game.usedWords}
            onPlay={game.playAgainWithCategory}
            onReset={game.resetGame}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        {game.phase === 'setup' && <LanguageSwitcher />}
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
        {t('app.createdBy')} <strong>Andrés Suárez Moreno</strong>
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
