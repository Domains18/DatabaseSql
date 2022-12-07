import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Rooms from "./Pages/Rooms";
import SingleRooms from "./Pages/SingleRooms";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css';
function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRooms />} />
          <Route path="*"element={<Error/>}/>
        </Routes>
    </>
  );
}

export default App;
