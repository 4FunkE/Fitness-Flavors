import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from './queries'; // Import your GraphQL query


function UserComponent() {
  const { loading, error, data } = useQuery(QUERY_USER);


  if (loading) {
    return <p>Loading data...</p>;
  }


  if (error) {
    return <p>Error: {error.message}</p>;
  }


  const user = data.user;


  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      {/* Render other user data and components here */}
    </div>
  );
}


export default UserComponent;