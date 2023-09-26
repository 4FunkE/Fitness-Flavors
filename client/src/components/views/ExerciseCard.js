import React from "react";
// import './ExerciseCard.css'; // CSS file for styling

function ExerciseCard({ exercise }) {
  return (
    <div className="exerciseC-card">
      <h3 className="exerciseC-name">{exercise.name}</h3>
      <p className="exerciseC-description">{exercise.description}</p>
      {/* Add additional information or actions related to the exercise */}
    </div>
  );
}

export default ExerciseCard;
