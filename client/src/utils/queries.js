import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
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
`;
