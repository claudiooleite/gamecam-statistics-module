import NavBar from './components/NavBar';
import ChartCard from './components/charts/ChartCard';
import TotalErrorsChart from './components/charts/TotalErrorsChart';
import RunningDistanceChart from './components/charts/RunningDistanceChart';
import BallPossessionChart from './components/charts/BallPossessionchart';
import FlexibleCard from './components/FlexibleCard';
import Footer from './components/Footer';

import './App.css'

import { dummyData } from './data/dummyData';

import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);




function App() {
  const players = [
    ...dummyData.match.teams[0].players,
    ...dummyData.match.teams[1].players,
  ];


  return (
    <div>
      <NavBar />

      <h1 className='headline-medium'>Your Videometrics</h1>
      <h2 className='title-medium team'>Valhala Padel</h2>
      <div className='court-info-div'>
        <h3 className='court5'>Court 5</h3>
        <h4 className='title-medium'>Camera ID 348</h4>
      </div>

      <div className="gradient-line"></div>

      <div className='court-info-div  game-length'>
        <h4 className='title-medium'>Game length</h4>
        <h4 className='title-medium'>Tuesday 24 Sep 2024</h4>
      </div>

      <div className='court-info-div'>
        <h3 className='court5 pink'>60 min</h3>
        <h3 className='court5 pink'>20:30</h3>
      </div>

      <div className="gradient-line"></div>

      <div className="button-div">
        <h3 className="title-medium button button-left">GameCam Stream</h3>
        <h3 className="title-medium button button-right">Player Analysis</h3>
      </div>

      <div>
        <h1 className='title-small'>Player Analysis</h1>
        <FlexibleCard title="Most offensive player">
          <h1>{players[2].name}</h1>
          <img src={players[2].image} className='avatar' style={{ border: `2px solid${players[2].color}` }} />
          <h1>Team A</h1>
        </FlexibleCard>
        <FlexibleCard title="Most defensive player">

        </FlexibleCard>
      </div>

      <div>
        <h1 className='title-small'>Team Performance</h1>
        <ChartCard title="Total Errors">
          <TotalErrorsChart players={players} />
        </ChartCard>

        <ChartCard title="Ball Possession">
          <BallPossessionChart players={players} />
        </ChartCard>

        <ChartCard title="Running Distance">
          <RunningDistanceChart players={players} />
        </ChartCard>
      </div>
      <FlexibleCard>
        <Footer />
      </FlexibleCard>

    </div>
  )
}

export default App
