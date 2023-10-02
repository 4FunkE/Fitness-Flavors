// Logout.js
// import { gql } from '@apollo/client';
import { useAuth } from '../utils/auth.js';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../utils/Mutations'; // Create this GraphQL mutation

function Logout() {
  const [isLoading, setIsLoading] = useState(false);

  // Define the logout mutation hook
  const [logoutMutation] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    try {
      const confirmed = await Swal.fire({
        title: 'Logout Confirmation',
        text: 'Are you sure you want to log out?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
      });

      if (confirmed.isConfirmed) {
        setIsLoading(true); // Set loading state while making the request

        // Call the logout mutation using Apollo Client
        const { data } = await logoutMutation();

        if (data.logout.success) {
          Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully!',
            icon: 'success',
            timer: 2000, // Automatically close the alert after 2 seconds
            timerProgressBar: true,
          }).then(() => {
            // Redirect to the home page after successful logout
            window.location.replace('/');
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: `Error: ${data.logout.message}`,
            icon: 'error',
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      {isLoading ? 'Logging Out...' : 'Logout'}
    </button>
  );
}

export default Logout;