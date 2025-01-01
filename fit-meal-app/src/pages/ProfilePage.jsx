import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';
import Illustration from './icon.png'; // Adjust path as necessary
import Logo from './logobowl.png'; // Adjust path as necessary

function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    scope: '',
    height: '',
    weight: '',
    eatingHabit: '',
    target: '',
  });

  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found, please log in');
          return;
        }

        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: { 'x-auth-token': token },
        });
        setFormData(res.data); // Populate form with existing profile data
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to fetch profile data.');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateBMI = (weight, height) => {
    if (weight && height) {
      const heightInMeters = height / 100;
      return (weight / heightInMeters ** 2).toFixed(2);
    }
    return null;
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { weight, height } = formData;
    const calculatedBmi = calculateBMI(parseFloat(weight), parseFloat(height));
    setBmi(calculatedBmi);
    setBmiCategory(getBMICategory(calculatedBmi));

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        setLoading(false);
        return;
      }

      await axios.post('http://localhost:5000/api/profile', formData, {
        headers: { 'x-auth-token': token },
      });

      setLoading(false);
      alert('Profile updated successfully!');
    } catch (err) {
      setLoading(false);
      setError('Error submitting profile. Please try again.');
      console.error(err);
    }
  };

  const handleGoBack = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="profile-container">
      <div className="illustration">
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="profile-form">
        <div className="header-with-logo">
          <img src={Logo} alt="Logo" className="logo" />
          <h1>FitMeal Partner</h1>
        </div>
        <h2 className="profile-heading">Profile Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="personal-details">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <select
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                required
              >
                <option value="">Select Goal</option>
                <option value="Lose Weight">Lose Weight</option>
                <option value="Maintain">Maintain</option>
                <option value="Gain">Gain</option>
              </select>
            </div>
            <div className="physical-details">
              <input
                type="number"
                name="height"
                placeholder="Height (cm)"
                value={formData.height}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={formData.weight}
                onChange={handleChange}
                required
              />
              <select
                name="eatingHabit"
                value={formData.eatingHabit}
                onChange={handleChange}
              >
                <option value="">Eating Habit</option>
                <option value="Veg">Vegetarian</option>
                <option value="Non-Veg">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="target"
                placeholder="Target"
                value={formData.target}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {bmi && (
          <div>
            <h3>BMI Result</h3>
            <p>Your BMI is: {bmi}</p>
            <p>Category: {bmiCategory}</p>
            <p>
              {bmiCategory === 'Underweight' && 'You may want to increase your calorie intake.'}
              {bmiCategory === 'Normal weight' && 'Great! Keep maintaining a balanced diet.'}
              {bmiCategory === 'Overweight' && 'Consider adjusting your diet and exercise routine.'}
              {bmiCategory === 'Obese' && 'Consult a healthcare professional for guidance.'}
            </p>
          </div>
        )}
        <div className="go-back">
          <button onClick={handleGoBack}>Go Back to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
