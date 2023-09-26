import React, { useState, useEffect } from 'react';
// import '../styles/Exercise.css';
import ExerciseCard from '../components/views/ExerciseCard'; // ExerciseCard component in veiws


function Exercise() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Fetch Exercises from the API
    fetch("/api/exercises") // API endpoint
      .then((response) => response.json())
      .then((data) => {
        setExercises(data); // API response is an array of Exercises
      })
      .catch((error) => {
        console.error(
          "Error fetching Exercises: ~ file: Exervies.js ~ line 16",
          error
        );
      });
  }, []); // Empty dependency array means this effect runs once on component mount

    return (
      <div className="exercise-container">
        <h2>Exercises</h2>
        <section className="exercise-list-section">
          <ul className="exercise-list">
            {exercises.map((exercise) => (
              <li key={exercise._id} className="exercise-item">
                <ExerciseCard exercise={exercise} /> {/* Use ExerciseCard component here */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }

  export default Exercise;