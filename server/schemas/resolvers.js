// import authentication error and
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// import the User and Workout models
const { User, Workout } = require('../models');

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
            if (!context.user) {
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
            if (!context.user) {
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
        deleteWorkout: async (_, args, context) => {
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
        // login: async (parent, { username, password }) => {
        //     const user = await User.findOne({ username });
      
        //     if (!user) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
      
        //     const correctPw = await user.isCorrectPassword(password);
      
        //     if (!correctPw) {
        //       throw new AuthenticationError('Incorrect credentials');
        //     }
      
        //     const token = signToken(user);
      
        //     return { token, user };
        //   }
    },
};

module.exports = resolvers;