import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/home/Nav";
import Home from "./components/home/Home";



function App() {
  return (
    <>

   <Nav/>



    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

  
    </>
  );
}

export default App;
