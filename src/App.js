import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Head/Homepage";
import Places from "./components/Section/Places";
import { useState } from "react";
import Popup from "./components/Popup/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false)
  function connectWallet(){
    setShowPopup(!showPopup);
  }
  
  return (
    <div className="font-Redrose min-w-fit max-w-[1200px] m-auto">
      <BrowserRouter>
       {showPopup && <Popup connectWallet={connectWallet}/>}
        <NavBar connectWallet={connectWallet}/>
       <Routes>
        <Route path="*" element={<Homepage/>}/>
        <Route path="/places" element={<Places/>}/>
       </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
