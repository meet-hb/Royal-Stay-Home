
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./navbar/Navbar";
import Main from "./Home/Main";
import { Footer } from "./footer/Footer";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import Ourservices from "./pages/Ourservices";
import Navbar from './navbar/Navbar';
import Settings from "./pages/Settings";
import Register from "./pages/Ragistration";
import Login from "./login/Login";
import Nopagefound from "./Nopagefound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">       
        <Navbar />     
        <Routes>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/" element={<Main />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Ourservices" element={<Ourservices />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Nopagefound />} />

          <Route path="/Registration" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
