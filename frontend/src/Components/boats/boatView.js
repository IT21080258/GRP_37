import React, {useEffect,useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Boat(){
    //declare boat as state to use
    const [boat, setBoat] = useState([]);
    const[updateboat, setupdateboat]=useState(-1)
    //GET method
    useEffect(() => {
        function getBoat() {
            axios.get("http://localhost:8090/boat/")
                .then((res) => {
                    setBoat(res.data);
                }).catch((err) => {
                    alert(err.massage);
                })
        }
        getBoat();
    }, []);
        

    {/*Delete Boat */ }
    const deleteBoat = (boatID) => {
        axios.delete(`http://localhost:8090/boat/delete/${boatID}`)
            .then((res) => {
                alert(`deleted successfully`);
                window.boat.reload(false);
            })
            .catch((err) => {
                alert(err);
            });
    };

    

    //html
    return (
        <div class="location">
            <div className="container">

                <br />
                <br />
                <centre><h1>Boats</h1></centre>
                <br />
                <br />

                {/*<div style={{ height: "400px", overflowY: "scroll" }}>*/}
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Boat Name</th>
                            <th scope="col">Equipments Carried</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Description</th>
                            <th scope="col">GPS</th>
                        </tr>
                    </thead>
                    
                    <tbody >  
                        
                        {/*show data in a table derived from the database*/}
                        {
                            
                            
                            boat.map((boat) => (


                                <tr key={boat._id} >

                                          

                                    <td>{boat.Bname}</td>
                                    <td>{boat.equipments}</td>
                                    <td>{boat.Owner}</td>
                                    <td>{boat.capacity}</td>
                                    <td>{boat.description}</td>
                                    <td>{boat.gps}</td>

                                    <td>
                                        <a className="btn btn-warning" href={`/edit/${boat._id}`}>
                                            <li className="fas fa-edit"></li>Edit
                                        </a>
                                        {<button class="btn btn-danger"
                                        onClick={() => {
                                            deleteBoat(boat._id)
                                        }}>delete</button>}
                                        {/* {<button id="update" class="btn btn-dark" 
                                    onClick={() => {updateboat(boat._id)
                                    }}>update</button>} */}
                                    </td>


                                    
                                </tr>
                                                

                                
                                

                            ))
                        }
                            
                    </tbody>
                </table>
                
                {/*</div>*/}
                <br />
                {/* <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button> */}
                
                <a href="/boat/add/">
                    <button>Add new boat</button>
                </a>
            </div>
        </div>
    )
    

}