
// import authentication error and
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

// import the User and Workout models
const { User, Workout } = require('../models');

const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[0-9a-zA-Z@#$%^&*!]{8,}$/;
    return passwordRegex.test(password);
  };

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
        registerUser: async (_, { username, password }) => {
            // check if user exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                throw new AuthenticationError('User already exists');
            }

            // validate password
            if (!isPasswordValid(password)) {
                throw new AuthenticationError('Password must have 1 number, 1 uppercase, 1 lowercase, 1 special character, and be at least 8 characters long');
            }

            // create user instance
            const newUser = new User({
                username,
                password,
            });

            await newUser.save();
            // newUser.save(function (err, results) {
            //     console.log('register user error:', err);
            //   });

            // generate authentication token
            const token = signToken({ username, _id: newUser._id });

            return { token, user: newUser };

            // return('hi');
        },
        // login user
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Wrong username or password');
            }

            const correctPw = await user.isCorrectPassword(password);
            // bcrypt.compare(password, user.password);

            if (!correctPw) {
                throw new AuthenticationError('Wrong username or password');
            }

            const token = signToken({ username, _id: user._id });

            return { token, user };
        },

        // need log out return true when log out
        logout: (_, __, context) => {
            if (!context.user) {
                // handle case where user isn't authenticated
                return false;
            }
            
            try {
                // clear authentication token
                localStorage.removeItem('id_token');

                // return true for successful logout
                return true;
            } catch (error) {
                console.error("Error logging out:", error);
                return false;
            }

        }
    },
};

module.exports = resolvers;