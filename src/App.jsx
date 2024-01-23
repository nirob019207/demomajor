import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/home/Nav";
import Home from "./components/home/Home";
import SpeecheContainer from "./components/Speeches/SpeecheContainter";
import SpeachesDetails from "./components/Speeches/SpeachesDetails";



function App() {
  return (
    <>

   <Nav/>



    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books" element={<SpeecheContainer />} />
      <Route path="/speeches/:sl" element={<SpeachesDetails />} />
    </Routes>

  
    </>
  );
}

export default App;
