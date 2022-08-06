import React from 'react'
import Home from './pages/Home'
import Patients from './pages/Patients';
import EditPatientForm from './pages/EditPatientForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PatientsDetails from './pages/PatientsDetails';
import SendMessage from './pages/SendMessage';
import Login from './pages/Login';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
           <Route exact path="/patients" element={<PrivateRoute><Patients/></PrivateRoute>}/>
           <Route exact path="/patients/:id" element={<PrivateRoute><PatientsDetails/></PrivateRoute>}/>
           <Route exact path="/patients/edit/:id" element={<PrivateRoute><EditPatientForm/></PrivateRoute>}/>
           <Route exact path="/sendText" element={<PrivateRoute><SendMessage/></PrivateRoute>}/>
           <Route exact path="/login" element={<Login/>}/>
         </Routes> 
     </Router>
    </div>
  );
}

export default App;
