import Home from "./Dashboard/Pages/Home"
import Activities from "./Dashboard/Pages/Activities"
import Projects from "./Dashboard/Pages/Projects"
import Billings from "./Dashboard/Pages/Billings"
import Support from "./Dashboard/Pages/Support"
import Settings from "./Dashboard/Pages/Settings"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInformation from "./Dashboard/Pages/Settings/Components/PersonalInformation"
import Notification from "./Dashboard/Pages/Settings/Components/Notification"
import Security from "./Dashboard/Pages/Settings/Components/Security"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/activities" element={<Activities/>}/>
        <Route path="/billing" element={<Billings/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/personalinformation" element={<PersonalInformation/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/security" element={<Security/>}/>
   </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
