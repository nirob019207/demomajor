import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/home/Nav";
import Home from "./components/home/Home";
import SpeecheContainer from "./components/Speeches/SpeecheContainter";
import SpeachesDetails from "./components/Speeches/SpeachesDetails";
import Birth from "./components/Birth/Birth";
import Contact from "./components/contact/Contact";
import East from "./components/East/East";
import Political from "./components/political/Political";
import AllSpeech from "./components/Speeches/AllSpeech";
import Photo from "./components/Photo/Photo";
import Timeline from "./components/timeline/Timeline";
import Footer from "./components/Footer/Footer";
import Legachy from "./components/legacy/Legachy";
import Anchor from "./components/Anchor/Anchor";

import Slider2 from "./components/slider/Slider2";



function App() {
  return (
    <>
   
   <Nav/>




    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/speech" element={<SpeecheContainer />} />
      <Route path="/speeches/:sl" element={<SpeachesDetails />} />
      <Route path="/birth" element={<Birth/>}/>
      <Route path="/east" element={<East/>}/>
      <Route path="political" element={<Political/>}/>
      <Route path="/allspeeach" element={<AllSpeech/>}/>
      <Route path="/photo" element={<Photo/>}/>
      <Route path="/timeline" element={<Timeline/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/legachy" element={<Legachy/>}/>
      <Route path="/anchor" element={<Anchor/>}/>
      <Route path="/slider" element={<Slider2/>}/>

    </Routes>
    <Footer/>

  
    </>
  );
}

export default App;
