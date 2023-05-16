import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


//location
import Location from './Components/location/locationView'
import AddLocation from './Components/location/locationAdd'
// boat
import Boat from './Components/boats/boatView';
import AddBoat from './Components/boats/boatAdd';
// homepage
import Homepage from './Components/Homepage/Homepage';

//animal
import AnimalAdd from './Components/animal/animalAdd';
import AnimalView from './Components/animal/animalView';

//login
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>

        {/* login */}
        <Route path="/" element={<Login/>}/>

        {/* location attributes */}
        <Route path='/location/' exact element={<Location/>}/>
        <Route path='/location/add/' exact element={<AddLocation/>}/>

        {/*Boat attributes */}
        <Route path='/boat/' exact element={<Boat/>}/>
        <Route path='/boat/add/' exact element={<AddBoat/>}/>

        {/* homepage */}
        {/* <Route path='/home/' exact element={<Homepage/>}/> */}
        <Route path='/animal/' exact element={<AnimalView/>}/>
        <Route path='/animal/add/' exact element={<AnimalAdd/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
