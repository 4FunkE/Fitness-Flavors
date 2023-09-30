import { gql } from "@apollo/client";


export const QUERY_USER = gql`
  mutation SignupUser($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        _id
        username
        exercises {
          _id
          exerciseName
          duration
          sets
          reps
        }
      }
    }
  }
`;