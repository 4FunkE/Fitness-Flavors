import React from "react";
import '../../styles/ExerciseCard.css'; // CSS file for styling
// import Exercise from '../../pages/Exercise.js'


function ExerciseCard({ exercise }) {
  console.log(exercise);
  return (
    <div className="exerciseC-card">
      <h3 className="exerciseC-name">Your Workout is called {exercise.name}</h3>
      <p className="exerciseC-target">Targeted Body Part: {exercise.bodyPart}</p>
      <p className="exerciseC-secondaryMuscles">Secondary Targeted Muscles: {exercise.secondaryMuscles}</p>
      <p className="exerciseC-equipment">Equipment Needed: {exercise.equipment}</p>
      <p className="exerciseC-instructions">How To Perform Workout: {exercise.instructions}</p>
      <img src={exercise.gifURL} alt={`${exercise.name} GIF`} className="exerciseC-gif" />


      {/* Add additional information or actions related to the exercise as needed*/}
      </div>
  );
}

export default ExerciseCard;
