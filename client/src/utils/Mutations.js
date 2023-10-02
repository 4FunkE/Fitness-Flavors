import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
      token
      user {
        _id
        username
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

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      logout
    }
  }
`;
