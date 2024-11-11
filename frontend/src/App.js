import './App.css';
import Login from './Pages/Auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'//dockerpackage that turns react from single page application
// into multipile page application

import Signup from './Pages/Auth/Signup';
import Home from './Pages/AfterAuth/Home';

function App() {
  return (
    <div className="App bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
 