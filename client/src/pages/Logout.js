// Logout.js
// import { gql } from '@apollo/client';
import React, { useState } from 'react';
// import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../utils/Mutations'; // Create this GraphQL mutation
import Auth from "../utils/auth";



function Logout() {
  const [isLoading, setIsLoading] = useState(false);

  // Define the logout mutation hook
  const [logoutMutation] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    try {
      const { data } = await logoutMutation();

      if (data && data.logout) {
        // clear authentication token
        Auth.logout(data.logout.token);

        // return true for successful logout
        return true;
      } 
      } catch (error) {
        console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      Logout
    </button>
  );
}

export default Logout;