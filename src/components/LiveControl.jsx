import { useState } from 'react';

import Highlights from './Highlights'
import Points from './Points'
import AddPlayer from './AddPlayer';

import '../styles/livecontrol.css'


const LiveControl = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='options-div'>
                <button onClick={openModal}>Add player</button>
                <button>Settings icon</button>
                <button>Finish icon</button>
            </div>

            {/* Add the AddPlayer component here */}
            <AddPlayer isModalOpen={isModalOpen} closeModal={closeModal} />

            <Highlights />
            <Points />
        </>
    );
};

export default LiveControl



