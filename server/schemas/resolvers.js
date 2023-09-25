// import the User and Workout models
const User = require('../models/User');
const Workout = require('../models/Workout');

const resolvers = {
    Query: {
        user: async (_, args, context) => {
            // check if authenticated
            if (!context.user) {
                throw new Error('Not logged in');
            }

            // return user
            return context.user;
        },
        // resolver for workouts query
        workouts: async (_, args, context) => {
            // check if authenticated
            if(!context.user) {
                throw new Error('Not logged in');
            }
            // fetch and return workouts
            const workouts = await Workout.find({ user: context.user.id });
            return workouts;
        },
    },
    Mutation: {
        // resolver for addWorkout mutation
        addWorkout: async (_, args, context) => {
            // check if authenticated
            if(!context.user) {
                throw new Error('Not logged in');
            }
            // create workout instance
            const newWorkout = new Workout({
                user: context.user.id,
                exercise: args.input.exercise,
                duration: args.input.duration,
                reps: args.input.reps,
                sets: args.input.sets,
            });
            // save workout
            const savedWorkout = await newWorkout.save();

            // return workout
            return savedWorkout;
        },
    },
};

module.exports = resolvers;