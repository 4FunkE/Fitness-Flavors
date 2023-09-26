// import logo from './logo.svg';
// import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Exercise from './pages/Exercise.js';
import Home from './pages/Home.js';
import Login from "./pages/Login.js";
import Profile from './pages/Profile.js'
import Signup from "./pages/SignUp.js";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          {/* header or nav bar here */}
          <Routes>
            <Route path="/" element={"Homepage"} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          {/* footer here */}
        </div>
      </BrowserRouter>
     </ApolloProvider>
  );
}

export default App;
