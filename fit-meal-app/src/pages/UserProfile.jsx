import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/styles/UserProfile.css'

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const email = token?.user?.email;

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${email}`);
        setProfile(response.data);
      } catch (err) {
        setError('Error fetching profile data.');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
    <nav className='Welcome'>
      <p>WELCOME {profile.name}</p>
    </nav>
    <div className='UserProfileContainer'>
      <h1 className='yourprofile'>Your Profile</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Height:</strong> {profile.height} cm</p>
      <p><strong>Weight:</strong> {profile.weight} kg</p>
      <p><strong>Target:</strong> {profile.target}</p>
    </div>
    </>
  );
};

export default UserProfile;
