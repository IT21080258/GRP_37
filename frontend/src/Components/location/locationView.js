import React, {useEffect,useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Location(){
    //declare location as state to use
    const [location, setLocation] = useState([]);
    //GET method
    useEffect(()=>{
        function getLocation(){
            axios.get("http://localhost:8090/location/")
                .then((res) => {
                    setLocation(res.data);
                }).catch((err) => {
                    alert(err.massage);
                })
            }
            getLocation();
        }, []);


        
        const deleteLocation = (loctionID) => {
        axios.delete(`http://localhost:8090/location/delete/${loctionID}`)
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
        <div class = "location">
        <div className="container">
            
            <br/>
            <br/>
            <centre><h1>Locations of species</h1></centre>
            <br/>
            <br/>
            <table className="table table-striped table-dark">
                <thead>
                     <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Coordinates</th>
                            <th scope="col">Animal</th>
                            <th scope="col">Aouthorized By</th>
                    </tr>
                </thead>
                <tbody>
                    {/*show data in a table derived from the database*/}
                    {
                         location.map((locaion)=>(
                            <tr key={locaion._id} >
            
                                <td>{locaion.name}</td>
                                <td>{locaion.coordinates}</td>
                                <td>{locaion.animal}</td>                                
                                <td>{locaion.authorizedBy}</td>
            
                                <td>{<button class="btn btn-danger" 
                                     onClick={() => {deleteLocation(locaion._id)
                                     }}>delete</button>}
                                    {/* {<button id="update" class="btn btn-dark" 
                                    onClick={() => {updateLocation(locaion._id)
                                    }}>update</button>} */}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
            <br/>
            {/* <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button> */}
            <a href="/location/add/">
            <button>Add new location</button>
            </a>
        </div>
        </div>
    )
    

}