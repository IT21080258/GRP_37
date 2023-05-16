import React, {useEffect,useState, useRef} from "react";
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import { savePDF } from "@progress/kendo-react-pdf";
import '../../App.css';
// import { useNavigate } from "react-router-dom";

export default function Location(){

    //declare location as state to use
    const [location, setLocation] = useState([]);
    const [searchTerm, setsearchTerm ]=useState("");
    const componentPDF=useRef();

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

    const handleDownload = () => {
        savePDF(componentPDF.current);
      };

      const handlePrint = useReactToPrint({
        // content: () => componentPDF.current,

        content: () => {
            // Remove the buttons temporarily
            const buttons = document.querySelectorAll('.print-hide');
            buttons.forEach(button => {
              button.style.display = 'none';
            });
        
            return componentPDF.current;
          },

        
      });


    //html
    return(
        <div class = "location">
        <div className="container">
            
            <br/>
            <br/>
            <centre><h1>Locations of species</h1></centre>
            <br/>
            <br/>

            <div ref={componentPDF} style={{width:"100%"}}>

                <div id="pdf-table">

            {/* search bar */}
            <input type="text" placeholder="Search...." className="form-control" style={{marginTop:50 , marginBottom:20, width:"40%"}}
                onChange={(e)=>{

                    setsearchTerm(e.target.value);
                }}
                />

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
                         location.filter(val=>{

                            if(searchTerm ===''){

                                return val;

                            }else if(

                                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                                val.coordinates.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                
                                ){

                                return val;
                            }

                        }).map((location)=>(

                            <tr key={location._id} >
            
                                <td>{location.name}</td>
                                <td>{location.coordinates}</td>
                                <td>{location.animal}</td>                                
                                <td>{location.authorizedBy}</td>
            
                                <td>{<button class="btn btn-danger" 
                                     onClick={() => {deleteLocation(location._id)
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

            </div>       
                </div>

                <button className="btn btn-success float-right m-3" onClick={handleDownload}>
                                Download Report
                </button>

                <button className="btn btn-primary float-right m-3" onClick={handlePrint}>
                    Print
                </button>

            <br/>
            
            {/* <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button> */}
            <a href="/location/add/">
            <button>Add new location</button>
            </a>
        </div>
        </div>
    )
    

}