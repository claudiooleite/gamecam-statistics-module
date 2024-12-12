import { useGame } from './gameContext/GameContext';
import { useState } from 'react';
import NavBar from './components/NavBar';
import LiveControl from './components/LiveControl';
import Metrics from './components/Metrics';
import Video from './components/Video';
import './App.css'

function App() {
  const { data, updateGameData } = useGame();
  const [liveController, setLiveController] = useState('liveControl')

  return (
    <div>
      <NavBar />
      <div className='controller-btns'>
        <button
          className={`controller-button ${liveController === 'liveControl' ? 'selected' : null}`}
          onClick={() => setLiveController('liveControl')}
        >
          Live Control
        </button>
        <button
          className={`controller-button ${liveController === 'video' ? 'selected' : null}`}
          onClick={() => setLiveController('video')}
        >
          Video
        </button>
        <button
          className={`controller-button ${liveController === 'metrics' ? 'selected' : null}`}
          onClick={() => setLiveController('metrics')}
        >
          Metrics
        </button>
      </div>
      <div className='game-info'>
        <h2 className='title-medium team'>Valhala Padel</h2>
        <h4 className='title-medium camera'>Camera ID 348</h4>
        <h3 className='title-medium court5'>Court {data.game.court}</h3>
        <div className="gradient-line"></div>
        <h4 className='title-medium game-length'>Game length</h4>
        <h4 className="title-medium date">{data.game.date}</h4>
        <h3 className='title-medium pink length'>{data.game.length}</h3>
        <h3 className='title-medium pink time'>{data.game.time}</h3>
        <div className="gradient-line"></div>
      </div>
      {/* Control State of the Controller */}
      {liveController === 'liveControl' && <LiveControl />}
      {liveController === 'video' && <Video />}
      {liveController === 'metrics' && <Metrics />}

    </div>
  );
}

export default App


