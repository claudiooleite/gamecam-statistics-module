import { useState } from 'react';

import '../styles/addplayer.css'

const AddPlayer = ({ isModalOpen, closeModal }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the phone number to the server)
        console.log('Player added with phone number:', phoneNumber);
        closeModal(); // Close modal after form submission
    };

    if (!isModalOpen) return null; // Don't render anything if the modal is not open

    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <h2>Add Players</h2>
                <p>Add players to your game by inviting them with mobile number</p>
                <form onSubmit={handleFormSubmit}>
                    <label>Player 2</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <label>Player 3</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <label>Player 4</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <button type="submit">Cancel</button>
                    <button type="submit">Invite</button>
                </form>
            </div>
        </div>
    );
};

export default AddPlayer;
