import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            <p><strong>Name:</strong> Sharmila Nikkil Ram</p>
            <p><strong>Goal:</strong> Lose Weight</p>
            <p><strong>Height:</strong> 5.7 ft</p>
            <p><strong>Current Weight:</strong> 68 kg</p>
            <p><strong>Target Weight:</strong> 55 kg</p>
            <button onClick={() => alert('Stay motivated and track progress daily!')} className="motivation-button">Get Motivated</button>
        </div>
    );
};

export default Profile;