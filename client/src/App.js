import React from 'react'
import Home from './pages/Home'
import Patients from './pages/Patients';
import EditPatientForm from './pages/EditPatientForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PatientsDetails from './pages/PatientsDetails';
import SendMessage from './pages/SendMessage';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/patients" element={<Patients/>}/>
           <Route exact path="/patients/:id" element={<PatientsDetails/>}/>
           <Route exact path="/patients/edit/:id" element={<EditPatientForm/>}/>
           <Route exact path="/sendText" element={<SendMessage/>}/>
         </Routes> 
     </Router>
    </div>
  );
}

export default App;
