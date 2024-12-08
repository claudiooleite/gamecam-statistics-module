import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import ChartCard from './components/charts/ChartCard';
import TotalErrorsChart from './components/charts/TotalErrorsChart';
import RunningDistanceChart from './components/charts/RunningDistanceChart';
import BallPossessionChart from './components/charts/BallPossessionchart';
import FlexibleCard from './components/FlexibleCard';
import Footer from './components/Footer';

import './App.css'

import { dummyData } from './data/dummyData';

import { TbArrowsMove } from "react-icons/tb";

import { BiError } from "react-icons/bi";

import { GiPositionMarker } from "react-icons/gi";

import { PiPersonSimpleRunLight } from "react-icons/pi";

import { CiBasketball } from "react-icons/ci";

import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);




function App() {
  const [data, setData] = useState({ players: {}, teams: [] })
  const [error, setError] = useState(false)  // Case Error
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    id = setTimeout(() => {
      setData(
        {
          players: [
            ...dummyData.teams[0].players,
            ...dummyData.teams[1].players,
          ],
          teams: {
            team1: dummyData.teams[0].name,
            team2: dummyData.teams[1].name,
          },
        }
      )
      setLoading(false)
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  if (error) {
    return (
      <>
        <h1>Failed to load page</h1>
      </>
    )
  }

  if (loading) {
    return (
      <>
        <h1>loading...</h1>
      </>
    )
  }

  return (
    <div>
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
        <FlexibleCard title="Most offensive player" className={"wide"}>
          <h1 style={{ color: data.players[2].color }} className='title-medium'>{data.players[2].name}</h1>
          <img src={data.players[2].image} className='avatar' style={{ border: `2px solid${data.players[2].color}` }} />
          <h1 className='title-medium'>{data.teams.team2}</h1>
        </FlexibleCard>
        <FlexibleCard title="Most defensive player">
          <h1 style={{ color: data.players[0].color }} className='title-medium'>{data.players[0].name}</h1>
          <img src={data.players[0].image} className='avatar' style={{ border: `2px solid${data.players[0].color}` }} />
          <h1 className='title-medium'>{data.teams.team1}</h1>
        </FlexibleCard>

        <div className="card-grid">
          <FlexibleCard title="Top Runner" className={'card-small'}>
            <div className='sm-card-content'>
              <PiPersonSimpleRunLight className="card-icon" />
              <h1 style={{ color: data.players[0].color }} className="title-medium">{data.players[0].name}</h1>
              <p className="card-data">{data.players[0].stats.runningDistance}m</p>
            </div>
          </FlexibleCard>

          <FlexibleCard title="Most Shots" className={'card-small'}>
            <div className='sm-card-content'>
              <CiBasketball className="card-icon" />
              <h1 style={{ color: data.players[1].color }} className="title-medium">{data.players[1].name}</h1>
              <p className="card-data">{data.players[1].stats.shots}</p>
            </div>
          </FlexibleCard>

          <FlexibleCard title="Least Errors" className={'card-small'}>
            <div className='sm-card-content'>
              <BiError className="card-icon" />
              <h1 style={{ color: data.players[2].color }} className="title-medium">{data.players[2].name}</h1>
              <p className="card-data">{data.players[2].stats.totalErrors}</p>
            </div>
          </FlexibleCard>

          <FlexibleCard title="Best Position" className={'card-small'}>
            <div className='sm-card-content'>
              <TbArrowsMove className="card-icon" />
              <h1 style={{ color: data.players[3].color }} className="title-medium">{data.players[3].name}</h1>
              <p className="card-data">{data.players[3].stats.timeInDeadZone}</p>
            </div>
          </FlexibleCard>
        </div>
      </div>

      <div>
        <h1 className='title-small'>Team Performance</h1>
        <ChartCard title="Total Errors">
          <TotalErrorsChart players={data.players} />
        </ChartCard>

        <ChartCard title="Ball Possession">
          <BallPossessionChart players={data.players} />
        </ChartCard>

        <ChartCard title="Running Distance">
          <RunningDistanceChart players={data.players} />
        </ChartCard>
      </div>
      <FlexibleCard>
        <Footer />
      </FlexibleCard>

    </div>
  )
}

export default App
