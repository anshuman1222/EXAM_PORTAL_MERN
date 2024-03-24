import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing , Register , Dashboard} from "./pages/index";
import { ConfigProvider } from "antd";
function App() {
  return (
    <BrowserRouter>
    <ConfigProvider theme={{cssVar:true}}>
      {/* <LandingNavbar/> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
