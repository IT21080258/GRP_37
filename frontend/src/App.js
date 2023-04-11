import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


//location
import Location from './Components/location/locationView'
import AddLocation from './Components/location/locationAdd'

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        {/* location attributes */}
        <Route path='/location/' exact element={<Location/>}/>
        <Route path='/location/add/' exact element={<AddLocation/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
