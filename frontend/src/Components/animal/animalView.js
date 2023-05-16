import React, {useEffect,useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function AnimalView(){
    //declare animal as state to use
    const [Animal, setAnimal] = useState([]);
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
            window.location.reload(false);
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
                         Animal.map((Animal)=>(
                            <tr key={Animal._id} >
            
                                <td>{Animal.Species}</td>
                                <td>{Animal.Size}</td>
                                <td>{Animal.Migratingcountry}</td>                                
                                <td>{Animal.Migratingmonth}</td>
                                <td>{Animal.Description}</td>
            
                                <td>{<button class="btn btn-danger" 
                                     onClick={() => {deleteAnimal(Animal._id)
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