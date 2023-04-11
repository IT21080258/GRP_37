import React,{useState} from "react";
import axios from "axios";

export default function LocationAdd(){
    
    const [name, setName] = useState("");
    const [coordinates, setCoordinates] = useState("");
    const [animal, setAnimal] = useState("");
    const [authorizedBy, setAuthorizedBy] = useState("");

    function refreshPage(){
        window.location.reload()
    }

    function sendData(e){
    e.preventDefault();
    const newLocation = {
        name,
        coordinates,
        animal,
        authorizedBy
      }
  
      
      axios.post("http://localhost:8090/location/add", newLocation).then(() => {
        alert("Location added")
        refreshPage()
      }).catch((err) =>{
        alert(err)
      })
    }

      return(
        <div class = "location">
            <div className="container">
                <a href="/location/">--back</a>
                <center><h1>Add Locations</h1></center>
                <form onSubmit={sendData} id="locationForm">
                    <div className="form-group">
                        <label for="name">Name of location</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name of location" 
                            onChange={(e) =>{
                                setName(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="coordinates">Coordinates of location</label>
                        <input type="text" className="form-control" id="coordinates" placeholder="Enter Coordinates of location" 
                            onChange={(e) =>{
                                setCoordinates(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="animal">Animal found in location</label>
                        <input type="text" className="form-control" id="animal" placeholder="Enter animal found in location" 
                            onChange={(e) =>{
                                setAnimal(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="authorizedBy">Authorzed By</label>
                        <input type="text" className="form-control" id="name" placeholder="Authorized By" 
                            onChange={(e) =>{
                                setAuthorizedBy(e.target.value);
                        }}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      )
}