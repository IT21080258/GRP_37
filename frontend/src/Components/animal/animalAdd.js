import React,{useState} from "react";
import axios from "axios";

export default function AnimalAdd(){
    
    const [Species, setSpecies] = useState("");
    const [Size, setSize] = useState("");
    const [Migratingcountry, setMigratingcountry] = useState("");
    const [Migratingmonth, setMigratingmonth] = useState("");
    const [Description, setDescription] = useState("");

    function refreshPage(){
        window.location.reload()
    }

    function sendData(e){
    e.preventDefault();
    const newAnimal = {
        Species,
        Size,
        Migratingcountry,
        Migratingmonth,
        Description

      }
  
      
      axios.post("http://localhost:8090/animal/add", newAnimal).then(() => {
        alert("Animal added")
        refreshPage()
      }).catch((err) =>{
        alert(err)
      })
    }

      return(
        <div class = "animal">
            <div className="container">
                <a href="/animal/">--back</a>
                <center><h1>Add Animal</h1></center>
                <form onSubmit={sendData} id="animalForm">
                    <div className="form-group">
                        <label for="species">species</label>
                        <input type="text" className="form-control" id="species" placeholder="Enter species" 
                            onChange={(e) =>{
                                setSpecies(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="size">size</label>
                        <input type="dropdown" className="form-control" id="size" placeholder="Small,Medium,Large" 
                            onChange={(e) =>{
                                setSize(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="migratingcountry">Migratingcountry</label>
                        <input type="text" className="form-control" id="migratingcountry" placeholder="Enter migratingcountry" 
                            onChange={(e) =>{
                                setMigratingcountry(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="migratingmonth">Migratingmonth</label>
                        <input type="text" className="form-control" id="migratingmonth" placeholder="Enter migratingmonth" 
                            onChange={(e) =>{
                                setMigratingmonth(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Enter description" 
                            onChange={(e) =>{
                                setDescription(e.target.value);
                        }}/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      )
}