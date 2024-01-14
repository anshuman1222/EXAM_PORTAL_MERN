import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing , Register , Dashboard} from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      {/* <LandingNavbar/> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
