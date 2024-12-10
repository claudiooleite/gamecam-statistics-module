import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import Highlights from './components/Highlights';
import Points from './components/Points';

import './App.css'

import { dummyData } from './data/dummyData';

import LoadingScreen from './components/LoadingScreen';


function App() {
  const [data, setData] = useState({ players: {}, teams: [] })
  const [error, setError] = useState(false)  // Case Error
  const [loading, setLoading] = useState(true)

  useEffect(() => {


    const id = setTimeout(() => {
      setData(
        {
          game: dummyData.game,
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
    }, 1) // Change time for showing 

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
        <LoadingScreen />
      </>
    )
  }

  return (
    <div>
      <NavBar />
      <h1 className='headline-medium'>Your Videometrics</h1>
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

      <Highlights />
      <Points/>
    </div>
  )
}

export default App
