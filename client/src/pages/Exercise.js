import React, { useState, useEffect } from "react";
import "../styles/Exercise.css";
import ExerciseCard from "../components/views/ExerciseCard"; // ExerciseCard component in views
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";

function Exercise({ exercise }) {
  const API = "2d3f6a0fecmsh850234d0340ad92p1cdaf5jsnde0fee7b9768";
  const [searchInput, setSearchInput] = useState("");
  const [workoutData, setWorkoutData] = useState({
    filteredBodyPartSearch: [],
    filteredEquipmentSearch: [],
    filteredGIFSearch: [],
  });

  const fetchWorkouts = async (muscleGroup) => {
    try {
      console.log("show me this PLEASE");
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises?bodyPart=${muscleGroup}?limit=10`,
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
      const filteredBodyPartSearch = data.filter((excercise) =>
        excercise.bodyPart.toUpperCase().includes(muscleGroup.toUpperCase())
      );
      const filteredEquipmentSearch = data.filter((excercise) =>
        excercise.equipment.toUpperCase().includes(muscleGroup.toUpperCase())
      );
      const filteredInstructionSearch = data.filter((excercise) =>
      typeof excercise.instructions === 'string' && exercise.instructions.toLowerCase().includes(muscleGroup.toLowerCase())
      );
      const filteredSecondaryMusclesSearch = data.filter((exercise) =>
      exercise.secondaryMuscles && typeof exercise.secondaryMuscles === 'string' && exercise.secondaryMuscles.toUpperCase().includes(muscleGroup.toUpperCase())
    );
      const filteredWorkoutNameSearch = data.filter((excercise) =>
      excercise.name.toUpperCase().includes(muscleGroup.toUpperCase())
      );
      // const filteredGIFSearch = data.filter((excercise) =>
      //   excercise.gifUrl.toUpperCase().includes(muscleGroup.toUpperCase())
      // );

      setWorkoutData({
        filteredBodyPartSearch,
        filteredEquipmentSearch,
        // filteredGIFSearch,
        filteredInstructionSearch,
        filteredSecondaryMusclesSearch,
        filteredWorkoutNameSearch
      });
    } catch (err) {
      console.error(err);
    }
  };

  const renderFilteredExercises = (filterType, exercises) => {
    if (exercises.length > 0) {
      return (
        <div>
          <h2>Exercises based on your search for {filterType} targeting!</h2>
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>
                <ExerciseCard key={exercise.id} exercise={exercise} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchWorkouts(searchInput);
  };

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
        <ul>
          {workoutData.filteredBodyPartSearch.length > 0 ? (
            <div>
              {workoutData.filteredBodyPartSearch.map((exercise, index) => (
                <li key={index}>
                  <ExerciseCard exercise={exercise} />
                </li>
              ))}
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Exercise;

{
  /* 
// {renderFilteredExercises('BodyPart', workoutData.filteredBodyPartSearch)}
// {renderFilteredExercises('Equipment', workoutData.filteredEquipmentSearch)}
// {renderFilteredExercises('GIF URL', workoutData.filteredGIFSearch)} */
}
