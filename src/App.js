import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Creators from './Pages/Creators';  // Your Creators component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Creators" element={<Creators />} />
      </Routes>
    </Router>
  );
}

export default App;
