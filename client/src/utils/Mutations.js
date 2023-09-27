import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const SAVE_WORKOUT = gql`
mutation SAVE_WORKOUT($exercise: String!) {
  addWorkout(exersice: $exersice) {
    id
    exersice
    duration
    reps
    sets
  }
}
`;

export const DELETE_WORKOUT = gql`
  mutation DELETE_WORKOUT($deleteWorkoutId: ID!) {
    deleteworkout(id: $deleteworkoutId)
  }
`;
