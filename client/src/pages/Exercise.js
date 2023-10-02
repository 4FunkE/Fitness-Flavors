import React, { useState, useEffect } from "react";
import "../styles/Exercise.css";
// import './styles.css';
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

      // console.log(data);

      const filteredBodyPartSearch = data.filter((excercise) =>
        excercise.bodyPart.toUpperCase().includes(muscleGroup.toUpperCase())
      );
      const filteredEquipmentSearch = data.filter((excercise) =>
        excercise.equipment.toUpperCase().includes(muscleGroup.toUpperCase())
      );
      const filteredInstructionSearch = data.filter(
        (excercise) =>
          typeof excercise.instructions === "string" &&
          exercise.instructions
            .toLowerCase()
            .includes(muscleGroup.toLowerCase())
      );
      const filteredSecondaryMusclesSearch = data.filter(
        (exercise) =>
          exercise.secondaryMuscles &&
          typeof exercise.secondaryMuscles === "string" &&
          exercise.secondaryMuscles
            .toUpperCase()
            .includes(muscleGroup.toUpperCase())
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
        filteredWorkoutNameSearch,
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
    <div>
      <div>
        <form
          className="exerciseSearch flex justify-center items-center pt-12 bg-custom-dark-blue"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              id="default-search"
              className="block mt-12 w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your target body part..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center pt-4 pb-4  bg-custom-dark-blue">
        {/* <h1 className="border border-white text-center text-white p-4 w-64 rounded-xl">
          Here are some exercises based on your search for {searchInput}{" "}
          exercises!
        </h1> */}
      </div>
      <div className=" py-14 pb-96 flex items-center justify-center bg-custom-dark-blue">
        <div className="exercise-container ">
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
    </div>
  );
}

export default Exercise;
