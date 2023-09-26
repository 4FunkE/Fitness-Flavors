const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        fitnessGoals: String
        createdAt: String!
    }

    type Workout {
        _id: ID!
        user: User!
        exercise: String!
        duration: Float
        reps: Int
        sets: Int
    }

    input WorkoutInput {
        exercise: String!
        duration: Float
        reps: Int
        sets: Int
    }

    type Auth {
        token: ID
        user: User
      }

    type Query {
        user: User!
        workouts: [Workout!]!
    }

    type Mutation {
        addWorkout(input: WorkoutInput!): Workout!
        deleteWorkout(id: ID!): Workout
        registerUser(input: RegisterUserInput!): Auth
        login(username: String!, password: String!): Auth
    }
    input RegisterUserInput {
        username: String!
        password: String!
    }
`;

module.exports = typeDefs;