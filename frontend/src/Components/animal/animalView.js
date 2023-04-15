import React, {useEffect,useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function AnimalView(){
    //declare animal as state to use
    const [animal, setAnimal] = useState([]);
    //GET method
    useEffect(()=>{
        function getAnimal(){
            axios.get("http://localhost:8090/animal/")
                .then((res) => {
                    setAnimal(res.data);
                }).catch((err) => {
                    alert(err.massage);
                })
            }
            getAnimal();
        }, []);
        
        const deleteAnimal = (animalID) => {
        axios.delete(`http://localhost:8090/animal/delete/${animalID}`)
            .then((res) => {
            alert(`deleted successfully`);
            window.animal.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
    };
    //html
    return(
        <div class = "animal">
        <div className="container">
            
            <br/>
            <br/>
            <centre><h1>Animals</h1></centre>
            <br/>
            <br/>
            <table className="table table-striped table-dark">
                <thead>
                     <tr>
                            <th scope="col">Species</th>
                            <th scope="col">Size</th>
                            <th scope="col">Migrating country</th>
                            <th scope="col">Migrating month</th>
                            <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {/*show data in a table derived from the database*/}
                    {
                         animal.map((animal)=>(
                            <tr key={animal._id} >
            
                                <td>{animal.species}</td>
                                <td>{animal.size}</td>
                                <td>{animal.migratingcountry}</td>                                
                                <td>{animal.migratingmonth}</td>
                                <td>{animal.description}</td>
            
                                <td>{<button class="btn btn-danger" 
                                     onClick={() => {deleteAnimal(animal._id)
                                     }}>delete</button>}
                                    {/* {<button id="update" class="btn btn-dark" 
                                    onClick={() => {updateAnimal(animal._id)
                                    }}>update</button>} */}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
            <br/>
            {/* <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button> */}
            <a href="/animal/add/">
            <button>Add new animal</button>
            </a>
        </div>
        </div>
    )
    

}