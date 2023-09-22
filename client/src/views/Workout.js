import React, { useState, useEffect } from 'react';
import './Workout.css';

function Workout() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        // Fetch workouts from the API
        fetch('/api/workouts') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
            setWorkouts(data); // Assuming the API response is an array of workouts
        })
        .catch((error) => {
            console.error('Error fetching workouts:', error);
        });
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div className="workout-container">
          <h2>Workout Details</h2>
          <ul className="workout-list">
            {workouts.map((workout) => (
              <li key={workout._id}>
                <h3>{workout.name}</h3>
                <p>Description: {workout.description}</p>
                {workout.notes && (
                  <div>
                    <p>Notes Preview:</p>
                    <ul className='workout-notes'>
                      {workout.notes.slice(0, 3).map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }

  export default Workout;