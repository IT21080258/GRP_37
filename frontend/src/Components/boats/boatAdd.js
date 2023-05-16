import React,{useState} from "react";
import axios from "axios";

export default function BoatAdd(){
    
    const [Bname , setBname]=useState("");
    const [equipments , setequipments]=useState("");
    const [Owner , setOwner]=useState("");
    const [capacity , setcapacity]=useState("");
    const [description , setdescription]=useState("");
    // const [gps , setgps]=useState("");

    function refreshPage(){
        window.location.reload()
    }

    function sendData(e){
    e.preventDefault();
    const newBoat ={

        Bname,
        equipments,
        Owner,
        capacity,
        description,
        // gps


    }
    
  
      
      axios.post("http://localhost:8090/boat/add", newBoat).then(() => {
        alert("New Boat Added")
        refreshPage()
      }).catch((err) =>{
        alert(err)
      })
    }

      return(

        
          <div class="location">
              <div className="container">
                  <a href="/boat/">--back</a>
                  <center><h1>Add Boats</h1></center>
                  <form onSubmit={sendData} id="boatForm">

                      {/*Boat name*/}
                      <div className="form-group">
                          <label for="name">Boat Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Enter Name of the Boat"
                              onChange={(e) => {
                                  setBname(e.target.value);
                              }} />
                      </div>

                      {/*Equipments*/}
                      <div className="form-group">
                          <label for="equipments">Equipments</label>
                          <br />
                          <textarea rows="4" cols="100" id="Equipments" placeholder="Enter the Equipments of the boat..."
                              onChange={(e) => {
                                  setequipments(e.target.value);
                              }}
                          />


                      </div>

                      {/*Owner*/}
                      <div className="form-group">
                          <label for="owner">Owner</label>
                          <input type="text" className="form-control" id="owner" placeholder="Enter the Owner"
                              onChange={(e) => {
                                  setOwner(e.target.value);
                              }} />
                      </div>

                      {/*Capacity*/}
                      <div className="form-group">
                          <label for="Capacity">Capacity</label>
                          <input type="text" className="form-control" id="animal" placeholder="Enter the Capacity"
                              onChange={(e) => {
                                  setcapacity(e.target.value);
                              }} />
                      </div>

                      {/*Description*/}
                      <div className="form-group">
                          <label for="Description">Description</label>
                          <br />
                          <textarea rows="4" cols="100" id="Description" placeholder="Enter the description about the boat..."
                              onChange={(e) => {
                                  setdescription(e.target.value);
                              }}
                          />


                      </div>

                      {/*gps*/}
                      {/* <div className="form-group">
                          <label for="gps">GPS</label>
                          <input type="text" className="form-control" id="gps" placeholder="Eneter the GPS"
                              onChange={(e) => {
                                  setgps(e.target.value);
                              }} />
                      </div> */}

                      {/*****Button******/}
                      <button type="submit" class="btn btn-primary">Submit</button>

                  </form>
              </div>
          </div>

          
      )
}