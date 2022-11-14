import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Head/Homepage";
import Places from "./components/Section/Places";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
       <Routes>
        <Route path="*" element={<Homepage/>}/>
        <Route path="/places" element={<Places/>}/>


       </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
