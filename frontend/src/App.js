import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


//location
import animalAdd from './Components/animal/animalAdd'
import animalView from './Components/animal/animalView'

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        {/* animal attributes */}
        <Route path='/animal/' exact element={<animalAdd/>}/>
        <Route path='/animal/add/' exact element={<animalView/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;