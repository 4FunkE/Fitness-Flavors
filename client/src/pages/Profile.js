import React, { useState, useEffect } from "react";
import ExerciseCard from "../components/views/ExerciseCard";
// import Auth from '../utils/auth'
// import Swal from 'sweetalert2';
import Logout from './Logout.js';
import '../styles/Profile.css';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth.js'


function Profile() {
  // const {loggedIn} = useAuth();
  
  
  const [profileExercises, setProfileExercises] = useState([]);
  // const [selectedExercise, setSelectedExercise] = useState(null);
  const [notes, setNotes] = useState("");
  const { selectedExercise } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();
 

  
  
  
// COULD NOT GET USE HISTORY TO IMPORT PROPERLY EVEN WITH NMP I EVERYWHERE
// if someone wants to try getting it to route I don't know how else to get it

  // useEffect(() => {
    //is user logged in
    // if (!loggedIn) {
    //   // history.push('/SignUp');
    //   // return
      // window.location.href = '/profile';
    // } else {
      // Fetch and update the user's saved Exercises from the server
  //     fetch("/api/user/exercises")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProfileExercises(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user exercises:", error);
  //     });
  // }, []);
  //  [loggedIn]);

  // useEffect(() => {
  //   // Fetch and update the user's saved Exercises from the server
  //   fetch("http://localhost:3000/api/user/exercise")
  //   // console.log(exercise)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProfileExercises(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user exercises:", error);
  //     });
  // }, []);


  const removeFromProfile = (exerciseId) => {
    // API endpoint for removing exercises from a user's profile
    const endpoint = `/api/user/exercises/${exerciseId}`;


    // Make a DELETE request to remove the exercise from the user's profile
    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove exercise from profile");
        }
        return response.json();
      })
      .then((data) => {
        setProfileExercises(data.profileExercises);
      })
      .catch((error) => {
        console.error("Error removing exercise from profile:", error);
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
      body: JSON.stringify({ note: notes, timestamp }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add note to exercise");
        }
        return response.json();
      })
      .then((data) => {
        const updatedNotes = [
          ...selectedExercise.notes,
          { content: notes, timestamp },
        ];
        selectedExercise({ ...selectedExercise, notes: updatedNotes });
        setNotes("");
      })
      .catch((error) => {
        console.error("Error adding note to exercise:", error);
      });
  }



  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-secondary">
      <div className="w-full max-w-screen-md p-4 border border-solid border-gray-300 rounded-xl bg-custom-primary">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      {/* <Logout></Logout>
       */}
{/* 
<button onClick={() => Auth.logout() } disabled={isLoading}>
       {isLoading ? 'Logging Out...' : 'Logout'}
      </button> */}
          <button onClick={Auth.logout}
          className='bg-blue-600 rounded-xl  px-4 py-2 mb-6 rounded-md transition-transform transform hover:translate-x-2 hover:bg-green-500' 
    >Logout
    </button>
      {/* <Logout></Logout> */}
        <section className="mb-4">
          <h3 className="text-xl font-semibold mb-2">My Exercises</h3>
          <ul className="space-y-4">
            {profileExercises.map((exercise) => (
              <li
                key={exercise._id}
                className="border p-4 rounded-lg flex items-center justify-between"
              >
                <ExerciseCard exercise={exercise} />
                <button
                  onClick={() => removeFromProfile(exercise._id)}
                  className="px-2 py-1 bg-red-500 text-black rounded"
                >Remove From Saved</button>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Selected Exercise</h3>
          {selectedExercise ? (
            <div className="bg-white p-4 rounded-xl">
              <p className="mb-2">Name: {selectedExercise.name}</p>
              <p className="mb-2">Description: {selectedExercise.description}</p>
            </div>
          ) : (
            <p>No exercise have been saved!</p>
          )}
          {/* <button
            onClick={() => addToProfile(selectedExercise)}
            className="px-4 py-2 bg-custom-dark-blue text-white rounded-xl mt-6 transform transition-transform hover:scale-105 hover:bg-green-500 "
          >
            Add to My Exercises
          </button> */}
        </section>
        <section>
          <h4 className="text-lg font-semibold mb-2">Notes</h4>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes here..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
          <button
            onClick={addNote}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-xl bg-custom-dark-blue"
          >
            Add Note
          </button>
        </section>
      </div>
    </div>
  );
}


export default Profile;