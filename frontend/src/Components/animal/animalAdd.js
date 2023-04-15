import React,{useState} from "react";
import axios from "axios";

export default function AnimalAdd(){
    
    const [species, setSpecies] = useState("");
    const [size, setSize] = useState("");
    const [migratingcountry, setMigratingcountry] = useState("");
    const [migratingmonth, setMigratingmonth] = useState("");
    const [description, setDescription] = useState("");

    function refreshPage(){
        window.animaldetails.reload()
    }

    function sendData(e){
    e.preventDefault();
    const newAnimal = {
        species,
        size,
        migratingcountry,
        migratingmonth,
        description

      }
  
      
      axios.post("http://localhost:8090/animal/Add", newAnimal).then(() => {
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