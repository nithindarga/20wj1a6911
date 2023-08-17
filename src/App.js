

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './styles.css';

const TrainSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    fetchSchedules();
  }, []);


  const handleTrainClick = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div className="schedule-container">
      <h1>Train Schedule</h1>
      <div className="schedule-list">
        {schedules.map((train) => (
          <div key={train.trainNumber} onClick={() => handleTrainClick(train)}>
            <p>Train Number: {train.trainNumber}</p>
            <p>Departure: {train.departure}</p>
            <p>Arrival: {train.arrival}</p>
            {/* Display more train information */}
          </div>
        ))}
      </div>
      {selectedTrain && (
        <div className="train-details">
          <h2>Train Details</h2>
          <p>Train Number: {selectedTrain.trainNumber}</p>
          <p>Departure: {selectedTrain.departure}</p>
          <p>Arrival: {selectedTrain.arrival}</p>
          {/* Display more train details */}
        </div>
      )}
    </div>
  );
};

const fetchSchedules = async () => {
  try {
    const response = await axios.get('http://20.244.56.144:80/train/trains', {
      headers: {
        'Authorization': 'YOUR_AUTH_TOKEN', // Replace with your actual authorization token
      },
    });
    setSchedules(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchTrainDetails = async (trainNumber) => {
  try {
    const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
      headers: {
        'Authorization': 'YOUR_AUTH_TOKEN', // Replace with your actual authorization token
      },
    });
    setSelectedTrain(response.data);
  } catch (error) {
    console.error('Error fetching train details:', error);
  }
};

const TrainSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    // ... (same as before)
  };

  const fetchTrainDetails = async (trainNumber) => {
    // ... (same as before)
  };

  const handleTrainClick = (trainNumber) => {
    fetchTrainDetails(trainNumber);
  };

  return (
    <div className="schedule-container">
      <h1>Train Schedule</h1>
      <div className="schedule-list">
        {schedules.map((train) => (
          <div
            key={train.trainNumber}
            className="schedule-card"
            onClick={() => handleTrainClick(train.trainNumber)}
          >
            <p>Train Number: {train.trainNumber}</p>
            <p>Departure: {train.departure}</p>
            <p>Arrival: {train.arrival}</p>
          </div>
        ))}
      </div>
      {selectedTrain && (
        <div className="train-details">
          <h2>Train Details</h2>
          <p>Train Number: {selectedTrain.trainNumber}</p>
          <p>Departure: {selectedTrain.departure}</p>
          <p>Arrival: {selectedTrain.arrival}</p>
          {/* Display other train details */}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TrainSchedule />
    </div>
  );
}

export default App;
