import React from 'react';
// import '../../styles/ExerciseCard.css'; // CSS file for styling


function ExerciseCard({ exercise }) {
  return (
    <div className="exercise-card">
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      {/* Add additional information or actions related to the exercise */}
    </div>
  );
}

export default ExerciseCard;