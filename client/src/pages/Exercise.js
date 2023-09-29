import React, { useState, useEffect } from 'react';
import '../styles/Exercise.css';
import ExerciseCard from '../components/views/ExerciseCard'; // ExerciseCard component in veiws
import {BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
// import ExerciseCard from "../components/views/ExerciseCard";


function Exercise( { exercise } ) {
  // const [exercises, setExercises] = useState([]);


  
  const API = "2d3f6a0fecmsh850234d0340ad92p1cdaf5jsnde0fee7b9768";
  const [searchInput, setSearchInput] = useState("");
  // const navigate = useNavigate();
  const [workoutData, setWorkoutData] = useState([]);

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetchWorkouts("BACK");
  // }, []);

  const fetchWorkouts = async (muscleGroup) => {
    try {
      console.log("show me this PLEASE");
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises?${muscleGroup}?limit=10`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("error with gathering data");
      }

      const data = await response.json();
      console.log(data);
      setWorkoutData(data); // exc 26 global state file
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWorkouts(searchInput);
  };

  // function routeToExerciseCard() {
  //   console.log('data');
  //   const exerciseSearch = workoutData.results;
  //   const exerciseCard = document.getElementsByClassName('exercise-item');
  //   exerciseCard.innerHTML = '';
    
  //   if ( exerciseSearch.length === 0) {
  //     return (
  //     <div>
  //         <h2>List of Exercises</h2>
  //         {workoutData.map((exercise) => (
  //           <ExerciseCard key={exercise.id} exercise={exercise} />
  //         ))}
  //     </div>
  //   ) 
  // } else {
  //   return  (
  //     <div>
  //       <p> I'm sorry! Your search did not yield any results.</p>
  //     </div>
  //   )}
  // }



  // useEffect(() => {
  //   // Fetch Exercises from the API
  //   fetch("/api/exercises") // API endpoint
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setExercises(data); // API response is an array of Exercises
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Error fetching Exercises: ~ file: Exercies.js ~ line 16",
  //         error
  //       );
  //     });
  // }, []); // Empty dependency array means this effect runs once on component mount

    return (
      <div className="exercise-container">
        <h2>Exercises</h2>
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Select your muscle group ..."
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button type="submit">Search!</button>
        </form>
      </div>
        <div>
        <h1>List of Exercises</h1>
        {workoutData.length > 0 ? (
          <ul>
            {workoutData.map((exercise, index) => (
              <li key={index}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No exercises found.</p>
        )}
      </div>
        <section className="exercise-list-section">
          <ul className="exercise-list">
              <li className="exercise-item">
                <ExerciseCard exercise={exercise} /> 
                {/* Use ExerciseCard component here */}
              </li>
          </ul>
        </section>
      </div>
    );
  }

  export default Exercise;

  // key={exercise._id} 