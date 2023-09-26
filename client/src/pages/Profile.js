import React, { useState, useEffect } from "react";
// import '../styles/Profile.js'; // Import your CSS file for styling
import ExerciseCard from "../components/views/ExerciseCard"; // Import the ExerciseCard component

function Profile() {
  const [profileExercises, setProfileExercises] = useState([]); // Store the user's saved Exercises
  const [selectedExercise, setSelectedExercise] = useState(null); // Store the selected Exercise for notes
  const [notes, setNotes] = useState(""); // Store notes for the selected Exercise

  useEffect(() => {
    // Fetch and update the user's saved Exercises from the server
    fetch("/api/user/exercises")
      .then((response) => response.json())
      .then((data) => {
        setProfileExercises(data); // Assuming the API response is an array of exercises
      })
      .catch((error) => {
        console.error(
          "Error fetching user exercises: file: Profile.js ~ line 18",
          error
        );
      });
  }, []);

  const addToProfile = (exercise) => {
    // API endpoint for adding exercises to a user's profile
    const endpoint = "/api/user/exercises";

    // Make a POST request to add the exercise to the user's profile
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exerciseId: exercise._id }), // Send the exercise ID or relevant data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to add exercise to profile: file: Profile.js ~ line 36"
          );
        }
        return response.json();
      })
      .then((data) => {
        // updated user's profile
        setProfileExercises(data.profileExercises);
      })
      .catch((error) => {
        console.error(
          "Error adding exercise to profile: file: Profile.js ~ line 45",
          error
        );
      });
  };

  const removeFromProfile = (exerciseId) => {
    // API endpoint for removing exercises from a user's profile
    const endpoint = `/api/user/exercises/${exerciseId}`;

    // Make a DELETE request to remove the exercise from the user's profile
    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to remove exercise from profile: file: Profile.js ~ line 59"
          );
        }
        return response.json();
      })
      .then((data) => {
        // Update profileExercises with the updated user's profile (excluding the removed exercise)
        setProfileExercises(data.profileExercises);
      })
      .catch((error) => {
        console.error(
          "Error removing exercise from profile: file: Profile.js ~ line 68",
          error
        );
      });
  };

  const addNote = () => {
    // API endpoint for updating exercise notes
    const endpoint = `/api/exercises/${selectedExercise._id}/notes`;

    // Create a timestamp for the note
    const timestamp = new Date().toISOString();

    // Make a POST request to add the note to the selected exercise
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: notes, timestamp }), // Send the note content and timestamp
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to add note to exercise ~ file: Profile.js ~ line 89"
          );
        }
        return response.json();
      })
      .then((data) => {
        // Update the notes state with the newly added note and timestamp
        const updatedNotes = [
          ...selectedExercise.notes,
          { content: notes, timestamp },
        ];
        setSelectedExercise({ ...selectedExercise, notes: updatedNotes });
        // Optionally, clear the notes input field if needed
        setNotes("");
      })
      .catch((error) => {
        console.error(
          "Error adding note to exercise: ~ file: Profile.js ~ line 101",
          error
        );
      });
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <section className="exercises-section">
        <h3>My Exercises</h3>
        <ul className="exercise-list">
          {profileExercises.map((exercise) => (
            <li key={exercise._id} className="exercise-item">
              <ExerciseCard exercise={exercise} />{" "}
              {/* ExerciseCard component here */}
              <button onClick={() => removeFromProfile(exercise._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="selected-exercise-section">
        <h3>Selected Exercise</h3>
        <div className="selected-exercise-details">
          <p>Name: {selectedExercise?.name}</p>
          <p>Description: {selectedExercise?.description}</p>
          <button onClick={() => addToProfile(selectedExercise)}>
            Add to My Exercises
          </button>
        </div>
        <div className="notes-section">
          <h4>Notes</h4>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes here..."
            className="notes-input"
          ></textarea>
          <button onClick={addNote} className="add-note-button">
            Add Note
          </button>
        </div>
      </section>
      {/* Add other styled sections and elements for tracking progress, marking as favorite, adjusting intensity, and viewing history */}
    </div>
  );
}

export default Profile;
