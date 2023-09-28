import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation REGISTER_USER($username: String!, $password: String!) {
    registerUser(input: { username: $username, password: $password }) {
      token
      user {
        _id
        username
        fitnessGoals
        createdAt
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        fitnessGoals
        createdAt
      }
    }
  }
`;

export const SAVE_WORKOUT = gql`
  mutation SAVE_WORKOUT($input: WorkoutInput!) {
    addWorkout(input: $input) {
      _id
      user {
        _id
      }
      exercise
      duration
      reps
      sets
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation DELETE_WORKOUT($id: ID!) {
    deleteWorkout(id: $id) {
      _id
    }
  }
`;
