import React from "react";
// import '../../styles/ExerciseCard.css'; // CSS file for styling




function ExerciseCard({ exercise }) {
  console.log(exercise);
  return (
    <div className="exerciseC-card flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img src={exercise.gifUrl} alt={`${exercise.name} GIF`} className="exerciseC-gif h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
    <div className="flex flex-col justify-start p-6">
      <h3 className="exerciseC-name mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Your Workout is called {exercise.name}</h3>
      <p className="exerciseC-target mb-4 text-base text-neutral-600 dark:text-neutral-200">Targeted Body Part: {exercise.target}</p>
      <p className="exerciseC-secondaryMuscles mb-4 text-base text-neutral-600 dark:text-neutral-200">Secondary Targeted Muscles: {exercise.secondaryMuscles}</p>
      <p className="exerciseC-equipment mb-4 text-base text-neutral-600 dark:text-neutral-200">Equipment Needed: {exercise.equipment}</p>
      <p className="exerciseC-instructions mb-4 text-base text-neutral-600 dark:text-neutral-200">How To Perform Workout: {exercise.instructions}</p>
    </div>
      {/* Add additional information or actions related to the exercise as needed*/}
      </div>
  );
}

export default ExerciseCard;