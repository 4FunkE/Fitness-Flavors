import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import your CSS file for styling

function Profile() {
    const [profileExercises, setProfileExercises] = useState([]); // Store the user's saved Exercises
    const [selectedExercise, setSelectedExercise] = useState(null); // Store the selected Exercise for notes
    const [notes, setNotes] = useState(''); // Store notes for the selected Exercise
  
    useEffect(() => {
      // Fetch and update the user's saved Exercises from the server
      fetch('/api/user/exercises') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
          setProfileExercises(data); // Assuming the API response is an array of exercises
        })
        .catch((error) => {
          console.error('Error fetching user exercises:', error);
        });
    }, []);
  
    const addToProfile = (exercise) => {
      // Add a exercise to the user's profile
      // Send a request to your server to update the user's profile with the selected exercise
      // Update profileexercises with the new exercise
    };
  
    const removeFromProfile = (exerciseId) => {
      // Remove a exercise from the user's profile
      // Send a request to your server to remove the exercise from the user's profile
      // Update profileexercises without the removed exercise
    };
  
    const addNote = () => {
      // Add a note to the selected exercise
      // Send a request to your server to update the exercise's notes
      // Update the notes state and include a timestamp
    };

    return (
        <div className="profile-container">
          <h2>My Profile</h2>
          <section className="exercises-section">
            <h3>My Exercises</h3>
            <ul className="exercise-list">
              {profileExercises.map((exercise) => (
                <li key={exercise._id} className="exercise-item">
                  {exercise.name}
                  <button onClick={() => removeFromProfile(exercise._id)}>Remove</button>
                </li>
              ))}
            </ul>
          </section>
          <section className="selected-exercise-section">
            <h3>Selected Exercise</h3>
            <div className="selected-exercise-details">
              <p>Name: {selectedExercise?.name}</p>
              <p>Description: {selectedExercise?.description}</p>
              <button onClick={() => addToProfile(selectedExercise)}>Add to My Exercises</button>
            </div>
            <div className="notes-section">
              <h4>Notes</h4>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your notes here..."
                className="notes-input"
              ></textarea>
              <button onClick={addNote} className="add-note-button">Add Note</button>
            </div>
          </section>
          {/* Add other styled sections and elements for tracking progress, marking as favorite, adjusting intensity, and viewing history */}
        </div>
      );
    }
    
    export default Profile;