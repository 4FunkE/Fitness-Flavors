import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    {/* header or nav bar here */}
        <Routes>
        <Route path='/' element={'Homepage'} />
        {/* <Route path='/login' element={<Login/>} /> */}
          {/* <Route path='/signup' element={<Signup></Signup>} /> */}
        </Routes>
    {/* footer here */}


   </BrowserRouter>
    </div>
  );
}

export default App;
