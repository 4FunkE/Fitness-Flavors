// import authentication error and
const { AuthenticationError } = require('apollo-server-express');

// import the User and Workout models
const User = require('../models/User');
const Workout = require('../models/Workout');


const resolvers = {
    Query: {
        user: async (_, args, context) => {
            // check if authenticated
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            // return user
            return context.user;
        },
        // resolver for workouts query
        workouts: async (_, args, context) => {
            // check if authenticated
            if(!context.user) {
                throw new AuthenticationError('Not logged in');
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
                throw new AuthenticationError('Not logged in');
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
        // delete workout
        deleteWorkout: async(_, args, context) => {
            // check if authenticated
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }

            try {
                // find by id
                const deletedWorkout = await Workout.findByIdAndRemove(args.id);

                if (!deletedWorkout) {
                    throw new Error('Workout not found or cannot be deleted');
                }

                return deletedWorkout;
            } catch (error) {
                throw new Error('Error deleting workout: ${error.message');
            }
        },
    },
};

module.exports = resolvers;