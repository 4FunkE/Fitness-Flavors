import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "../styles/Home.css";
import { GET_MESSAGE, UPDATE_MESSAGE } from "./graphql"; // Import your GraphQL queries and mutations

function Home() {
  // Define a state variable to store the updated message
  const [newMessage, setNewMessage] = useState("");

  // Define a query to fetch the current message
  const { loading, error, data } = useQuery(GET_MESSAGE);

  // Define a mutation to update the message
  const [updateMessage] = useMutation(UPDATE_MESSAGE);

  // Function to handle the form submission and update the message
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the updateMessage mutation to update the message
    updateMessage({ variables: { newMessage } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar bg-blue-500 p-4">{/* ... Navbar content */}</nav>

      {/* Hero Section */}
      <section className="hero bg-gray-100 py-12">
        <div className="hero-content text-center">
          <h1 className="animated fadeInDownBig text-3xl font-bold text-blue-800 mb-4">
            {data.message}
          </h1>
          <p className="animated fadeInUpBig text-gray-600 mb-4">Motto</p>
          <form onSubmit={handleSubmit} className="animated fadeInLeftBig">
            <input
              type="text"
              placeholder="Enter a new message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Update Message
            </button>
          </form>
        </div>
      </section>

      {/* Additional Content */}
      <section className="additional-content">
        {/* more sections/content here with animations */}
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-200 p-4 text-center">
        {/* footer content */}
      </footer>
    </div>
  );
}

export default Home;
