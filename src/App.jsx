import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Place from "./pages/Place";
import PlaceList from "./pages/PlaceList";
import PlaceAdd from "./pages/PlaceAdd";

function App() {
 
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/place/:id"  element={<Place />} />
        <Route path="/newplace"  element={<PlaceAdd />} />
        <Route path="/place/:category"  element={<PlaceList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
export default App;