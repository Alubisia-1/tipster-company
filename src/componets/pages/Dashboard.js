import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Simulate fetching predictions from an API
    const fetchPredictions = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('https://api.example.com/predictions');
        const data = await response.json();
        setPredictions(data.predictions); // Adjust the structure based on your API response
      } catch (error) {
        console.error('Error fetching predictions:', error);
      }
    };

    fetchPredictions();
  }, []);

  return (
    <div className='dash-board'>
      <div>
        <h2>Welcome to your dashboard</h2>
      </div>
      <div>
        {predictions.length > 0 ? (
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{prediction}</li>
            ))}
          </ul>
        ) : (
          <p>No predictions available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
