const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    exercise: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        min: 0,
    },
    reps: {
        type: Number,
        min: 0,
    },
    sets: {
        type: Number,
        min: 0,
        }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;