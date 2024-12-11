import { useGame } from './gameContext/GameContext';
import { useState } from 'react';
import NavBar from './components/NavBar';
import LiveControl from './components/LiveControl';
import Metrics from './components/Metrics';
import Video from './components/Video';
import './App.css'


// import LoadingScreen from './components/LoadingScreen';


function App() {
  const { data, updateGameData } = useGame();
  // const [loading, setLoading] = useState(true)
  const [liveController, setLiveController] = useState('liveControl')



  // if (loading) {
  //   return (
  //     <>
  //       <LoadingScreen />
  //     </>
  //   )
  // }

  return (
    <div>
      <NavBar />
      <div className='controller-btns'>
        <button className='controller-button selected' onClick={() => setLiveController('liveControl')}>Live Control</button>
        <button onClick={() => setLiveController('video')}>Video</button>
        <button onClick={() => setLiveController('metrics')}>Metrics</button>
      </div>
      <h2 className='title-medium team'>Valhala Padel</h2>
      <div className='court-info-div'>
        <h3 className='court5'>Court {data.game.court}</h3>
        <h4 className='title-medium'>Camera ID 348</h4>
      </div>
      <div className="gradient-line"></div>
      <div className='court-info-div  game-length'>
        <h4 className='title-medium'>Game length</h4>
        <h4 className="title-medium">{data.game.date}</h4>
      </div>
      <div className='court-info-div'>
        <h3 className='court5 pink'>{data.game.length}</h3>
        <h3 className='court5 pink'>{data.game.time}</h3>
      </div>
      <div className="gradient-line"></div>

      {/* Control State of the Controller */}
      {liveController === 'liveControl' && <LiveControl />}
      {liveController === 'video' && <Video />}
      {liveController === 'metrics' && <Metrics />}
    </div>
  );
}

export default App


