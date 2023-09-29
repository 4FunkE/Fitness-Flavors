// import authentication error and
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

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
                user: context.user._id,
                exercise: args.input.exercise,
                duration: args.input.duration,
                reps: args.input.reps,
                sets: args.input.sets,
            });
            // save workout
            const savedWorkout = (await newWorkout.save()).populate('user');
            console.log({ savedWorkout });

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
                throw new Error(`Error deleting workout: ${error.message}`);
            }
        },
        // register user
        registerUser: async (_, { input }) => {
            const { username, password } = input;

            // check if user exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                throw new AuthenticationError('User already exists');
            }

            // hash password
            // const hashedPassword = await bcrypt.hash(password, 10);

            // create user instance
            const newUser = new User({
                username,
                password,
            });

            await newUser.save();

            // generate authentication token
            const token = signToken({ username, _id: newUser._id });

            return { token, user: newUser };
        },
        // login user
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Wrong username');
            }

            const correctPw = await user.isCorrectPassword(password);
            // bcrypt.compare(password, user.password);

            if (!correctPw) {
                throw new AuthenticationError('Wrong password');
            }

            const token = signToken({ username, _id: user._id });

            return { token, user };
        }
    },
};

module.exports = resolvers;