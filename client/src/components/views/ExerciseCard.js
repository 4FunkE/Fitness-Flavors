import React from "react";
// import '../../styles/ExerciseCard.css'; // CSS file for styling

function ExerciseCard({ exercise }) {
  console.log(exercise);
  return (
    <div className="makeRow">
      <div class="flex justify-center items-center mx-auto exerciseC-card rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-xl md:flex-row mb-6">
        <img
          src={exercise.gifUrl}
          alt={`${exercise.name} GIF`}
          className=" exerciseC-gif flex justify-center items-center  h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />
        <div className="flex flex-col justify-start p-6">
          <h3 className="exerciseC-name mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Your Workout is called: {exercise.name}
          </h3>
          <p className="exerciseC-target mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Targeted Body Part: {exercise.target}
          </p>
          <p className="exerciseC-secondaryMuscles mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Secondary Targeted Muscles: {exercise.secondaryMuscles}
          </p>
          <p className="exerciseC-equipment mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Equipment Needed: {exercise.equipment}
          </p>
          <p className="exerciseC-instructions mb-4 text-base text-neutral-600 dark:text-neutral-200">
            How To Perform Workout: {exercise.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
