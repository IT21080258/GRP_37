import React, {useEffect,useState , useRef} from "react";
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import { savePDF } from "@progress/kendo-react-pdf";
import '../../App.css';
// import { useNavigate } from "react-router-dom";

export default function Boat(){

    
    //declare boat as state to use
    const [boat, setBoat] = useState([]);
    const componentPDF=useRef();
    const [searchTerm, setsearchTerm ]=useState("");
    const[updateboat, setupdateboat]=useState(-1);


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
                window.location.reload(false);
            })
            .catch((err) => {
                alert(err);
            });
    };

    // const generatePDF = userReactToPrint({

    //     // content:()=>componentPDF.current,
    //     documentTitle:"Userdata",
    //     onAfterPrint:()=>alert("Data saved in PDF")
    // });

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
    return (
        <div class="location">
            <div className="container">

                <br />
                <br />
                <centre><h1>Boats</h1></centre>
                <br />
                <br />

                {/*<div style={{ height: "400px", overflowY: "scroll" }}>*/}

                <div ref={componentPDF} style={{width:"100%"}}>

                <div id="pdf-table">

                 {/* search bar  */}
                <input type="text" placeholder="Search...." className="form-control" style={{marginTop:50 , marginBottom:20, width:"40%"}}
                onChange={(e)=>{

                    setsearchTerm(e.target.value);
                }}
                />

                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Boat Name</th>
                            <th scope="col">Equipments Carried</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Description</th>
                            {/* <th scope="col">GPS</th> */}
                        </tr>
                    </thead>
                    
                    <tbody >  
                        
                        {/*show data in a table derived from the database*/}
                        {
                            
                            
                            boat.filter(val=>{

                                if(searchTerm ===''){

                                    return val;

                                }else if(

                                    val.Bname.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                                    val.Owner.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    
                                    ){

                                    return val;
                                }

                            }).map((boat) => (

                                <tr key={boat._id} >

                                    <td>{boat.Bname}</td>
                                    <td>{boat.equipments}</td>
                                    <td>{boat.Owner}</td>
                                    <td>{boat.capacity}</td>
                                    <td>{boat.description}</td>
                                    {/* <td>{boat.gps}</td> */}

                                    <td>
                                        <a className="btn btn-warning print-hide" href={`/update/${boat._id}`}>
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
                </div>       
                </div>

                <button className="btn btn-success float-right m-3" onClick={handleDownload}>
                                Download Report
      </button>

      <button className="btn btn-primary float-right m-3" onClick={handlePrint}>
        Print
      </button>
                
                 {/* <button onClick={generatePDF}>PDF</button>            */}

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