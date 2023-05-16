import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


//location
import Location from './Components/location/locationView'
import AddLocation from './Components/location/locationAdd'
import Boat from './Components/boats/boatView';
import AddBoat from './Components/boats/boatAdd';
import EditBoat from './Components/boats/boatEdit';
import Animal from './Components/animal/animalView';
import AddAnimal from './Components/animal/animalAdd';



function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        {/* location attributes */}
        <Route path='/location/' exact element={<Location/>}/>
        <Route path='/location/add/' exact element={<AddLocation/>}/>

        {/*Boat attributes */}
        <Route path='/boat/' exact element={<Boat/>}/>
        <Route path='/boat/add/' exact element={<AddBoat/>}/>
        <Route path='/boat/update/:id' exact element={<EditBoat/>}/>

        {/*Animal attributes */}
        <Route path='/animal/' exact element={<Animal/>}/>
        <Route path='/animal/add/' exact element={<AddAnimal/>}/>

        

      </Routes>
    </div>
    </Router>
  );
}

export default App;
