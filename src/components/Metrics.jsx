import { useGame } from '../gameContext/GameContext';
import { useState, useEffect } from 'react';
import ChartCard from './charts/ChartCard';
import RunningDistanceChart from './charts/RunningDistanceChart';
import BallPossessionChart from './charts/BallPossessionChart';
import FlexibleCard from './FlexibleCard';
import Footer from './Footer';

import { TbArrowsMove } from "react-icons/tb";
import { BiError } from "react-icons/bi";
import { PiPersonSimpleRunLight } from "react-icons/pi";
import { CiBasketball } from "react-icons/ci";

import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);

const Metrics = () => {
    const { data, updateGameData } = useGame(); // Access data from context

    return (
        <>
            <div>
                <h1 className='title-small'>Player Analysis</h1>
                <FlexibleCard title="Most offensive player" className={"wide"}>
                    <h1 style={{ color: data.teams[0].players[1].color }} className='title-medium'>{data.teams[0].players[1].name}</h1>
                    <img src={data.teams[0].players[1].image} className='avatar' style={{ border: `2px solid${data.teams[0].players[1].color}`, objectFit: 'cover' }} />
                    <h1 className='title-medium'>{data.teams[0].name}</h1>
                </FlexibleCard>

                <FlexibleCard title="Most defensive player" className={"wide"}>
                    <h1 style={{ color: data.teams[1].players[0].color }} className='title-medium'>{data.teams[1].players[0].name}</h1>
                    <img src={data.teams[1].players[0].image} className='avatar' style={{ border: `2px solid${data.teams[1].players[0].color}` }} />
                    <h1 className='title-medium'>{data.teams[1].name}</h1>
                </FlexibleCard>

                <div className="card-grid">
                    <FlexibleCard title="Top Runner" className={'card-small'}>
                        <div className='sm-card-content'>
                            <PiPersonSimpleRunLight className="card-icon" />
                            <h1 style={{ color: data.teams[0].players[0].color }} className="title-medium">{data.teams[0].players[0].name}</h1>
                            <p className="card-data">{data.teams[0].players[0].stats.runningDistance}m</p>
                        </div>
                    </FlexibleCard>

                    <FlexibleCard title="Most Shots" className={'card-small'}>
                        <div className='sm-card-content'>
                            <CiBasketball className="card-icon" />
                            <h1 style={{ color: data.teams[1].players[1].color }} className="title-medium">{data.teams[1].players[1].name}</h1>
                            <p className="card-data">{data.teams[1].players[1].stats.shots}</p>
                        </div>
                    </FlexibleCard>

                    <FlexibleCard title="Least Errors" className={'card-small'}>
                        <div className='sm-card-content'>
                            <BiError className="card-icon" />
                            <h1 style={{ color: data.teams[0].players[1].color }} className="title-medium">{data.teams[0].players[1].name}</h1>
                            <p className="card-data">{data.teams[0].players[1].stats.totalErrors}</p>
                        </div>
                    </FlexibleCard>

                    <FlexibleCard title="Best Position" className={'card-small'}>
                        <div className='sm-card-content'>
                            <TbArrowsMove className="card-icon" />
                            <h1 style={{ color: data.teams[1].players[1].color }} className="title-medium">{data.teams[1].players[1].name}</h1>
                            <p className="card-data">{data.teams[1].players[1].stats.timeInDeadZone}</p>
                        </div>
                    </FlexibleCard>
                </div>
            </div>

            <div>
                <h1 className='title-small' style={{ margin: '30px 0 24px 0' }}>Team Performance</h1>
                <div className="card-grid-performance">
                    <FlexibleCard title={`${data.teams[0].name}`} className={'card-small'}>
                        <div className='teams'>
                            <div className='performance'>
                                <img src={data.teams[0].players[0].image} className='avatar' style={{ border: `2px solid${data.teams[0].players[0].color}`, width: '73px', height: "73px" }} />
                                <h1 style={{ color: data.teams[0].players[0].color }} className='title-medium'>{data.teams[0].players[0].name}</h1>
                            </div>
                            <div className='performance'>
                                <img src={data.teams[0].players[1].image} className='avatar' style={{ border: `2px solid${data.teams[0].players[1].color}`, width: '73px', height: "73px" }} />
                                <h1 style={{ color: data.teams[0].players[1].color }} className='title-medium'>{data.teams[0].players[1].name}</h1>
                            </div>
                        </div>
                    </FlexibleCard>

                    <FlexibleCard title={`${data.teams[1].name}`} className={'card-small'}>
                        <div className='teams'>
                            <div className='performance'>
                                <img src={data.teams[1].players[0].image} className='avatar' style={{ border: `2px solid${data.teams[1].players[0].color}`, width: '73px', height: "73px" }} />
                                <h1 style={{ color: data.teams[1].players[0].color }} className='title-medium'>{data.teams[1].players[0].name}</h1>
                            </div>
                            <div className='performance'>
                                <img src={data.teams[1].players[1].image} className='avatar' style={{ border: `2px solid${data.teams[1].players[1].color}`, width: '73px', height: "73px" }} />
                                <h1 style={{ color: data.teams[1].players[1].color }} className='title-medium'>{data.teams[1].players[1].name}</h1>
                            </div>
                        </div>
                    </FlexibleCard>
                </div>
                <div className='charts'>
                    <ChartCard title="Running Distance">
                        <div className="running-distance-container">
                            <div className="player-names">
                                {data.teams[0].players.map((player, index) => (
                                    <div key={index} className="player-name" style={{ color: player.color }}>
                                        <p>{player.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="chart">
                                <RunningDistanceChart players={data.teams[0].players} />
                            </div>
                            <div className="distance-runs">
                                {data.teams[0].players.map((player, index) => (
                                    <div key={index} className="distance-run">
                                        <p>{player.stats.runningDistance}m</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ChartCard>

                    <ChartCard title="Time in Dead Zone">
                        <div className='dead-zone'>
                            <div className="player-names">
                                {data.teams[0].players.map((player, index) => (
                                    <div key={index} className="player-name" style={{ color: player.color }}>
                                        <p>{player.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="distance-runs">
                                {data.teams[0].players.map((player, index) => (
                                    <div key={index} className="dead-zone-time">
                                        <p className='dead-p'>{player.stats.timeInDeadZone}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ChartCard>

                    <ChartCard title="Ball Possession">
                        <BallPossessionChart players={data.teams[0].players} />
                    </ChartCard>
                </div>
                <FlexibleCard>
                    <Footer />
                </FlexibleCard>
            </div>
        </>
    );
};

export default Metrics;
