import React, { useState, useEffect } from 'react';
import '../styles/Exercise.css';

function Exercise() {
    const [Exercises, setExercises] = useState([]);

    useEffect(() => {
        // Fetch Exercises from the API
        fetch('/api/Exercises') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
            setExercises(data); // Assuming the API response is an array of Exercises
        })
        .catch((error) => {
            console.error('Error fetching Exercises:', error);
        });
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div className="Exercise-container">
          <h2>Exercise Details</h2>
          <ul className="Exercise-list">
            {Exercises.map((Exercise) => (
              <li key={Exercise._id}>
                <h3>{Exercise.name}</h3>
                <p>Description: {Exercise.description}</p>
                {Exercise.notes && (
                  <div>
                    <p>Notes Preview:</p>
                    <ul className='Exercise-notes'>
                      {Exercise.notes.slice(0, 3).map((note, index) => (
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

  export default Exercise;