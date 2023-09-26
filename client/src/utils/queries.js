import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      userName
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
