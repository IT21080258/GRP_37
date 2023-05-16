// import React, {useEffect,useState} from "react";
// import axios from "axios";
// import {useReactToPrint} from "react-to-print";
// import { savePDF } from "@progress/kendo-react-pdf";
// import '../../App.css';
// // import { useNavigate } from "react-router-dom";

// export default function AnimalView(){
//     //declare animal as state to use
//     const [Animal, setAnimal] = useState([]);
//     const [searchTerm, setsearchTerm ]=useState("");
//     const componentPDF=useRef();

//     //GET method
//     useEffect(()=>{
//         function getAnimal(){
//             axios.get("http://localhost:8090/animal/")
//                 .then((res) => {
//                     setAnimal(res.data);
//                 }).catch((err) => {
//                     alert(err.massage);
//                 })
//             }
//             getAnimal();
//         }, []);
        
//         const deleteAnimal = (animalID) => {
//         axios.delete(`http://localhost:8090/animal/delete/${animalID}`)
//             .then((res) => {
//             alert(`deleted successfully`);
//             window.location.reload(false);
//           })
//           .catch((err) => {
//             alert(err);
//           });
//     };

//     const handleDownload = () => {
//         savePDF(componentPDF.current);
//       };


//       const handlePrint = useReactToPrint({
//         // content: () => componentPDF.current,

//         content: () => {
//             // Remove the buttons temporarily
//             const buttons = document.querySelectorAll('.print-hide');
//             buttons.forEach(button => {
//               button.style.display = 'none';
//             });
        
//             return componentPDF.current;
//           },

        
//       });

//     //html
//     return(
//         <div class = "animal">
//         <div className="container">
            
//             <br/>
//             <br/>
//             <centre><h1>Animals</h1></centre>
//             <br/>
//             <br/>

//             <div ref={componentPDF} style={{width:"100%"}}>

//                 <div id="pdf-table"></div>

//             {/* search bar */}
//             <input type="text" placeholder="Search...." className="form-control" style={{marginTop:50 , marginBottom:20, width:"40%"}}
//                 onChange={(e)=>{

//                     setsearchTerm(e.target.value);
//                 }}
//                 />


//             <table className="table table-striped table-dark">
//                 <thead>
//                      <tr>
//                             <th scope="col">Species</th>
//                             <th scope="col">Size</th>
//                             <th scope="col">Migrating country</th>
//                             <th scope="col">Migrating month</th>
//                             <th scope="col">Description</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/*show data in a table derived from the database*/}
//                     {
//                          Animal.filter(

//                             val=>{

//                                 if(searchTerm ===''){

//                                     return val;

//                                 }else if(

//                                     val.Species.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//                                     val.Migratingcountry.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//                                     val.Migratingmonth.toLowerCase().includes(searchTerm.toLocaleLowerCase())

                                    
//                                     ){

//                                     return val;
//                                 }

//                             }

//                          ).map((Animal)=>(
//                             <tr key={Animal._id} >
            
//                                 <td>{Animal.Species}</td>
//                                 <td>{Animal.Size}</td>
//                                 <td>{Animal.Migratingcountry}</td>                                
//                                 <td>{Animal.Migratingmonth}</td>
//                                 <td>{Animal.Description}</td>
            
//                                 <td>{<button class="btn btn-danger" 
//                                      onClick={() => {deleteAnimal(Animal._id)
//                                      }}>delete</button>}
//                                     {/* {<button id="update" class="btn btn-dark" 
//                                     onClick={() => {updateAnimal(animal._id)
//                                     }}>update</button>} */}
//                                 </td>
//                             </tr>

//                         ))
//                     }
//                 </tbody>
//             </table>

//             </div>       
//                 </div>

//             <button className="btn btn-success float-right m-3" onClick={handleDownload}>
//                                 Download Report
//       </button>

//       <button className="btn btn-primary float-right m-3" onClick={handlePrint}>
//         Print
//       </button>        

//             <br/>
//             {/* <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button> */}
//             <a href="/animal/add/">
//             <button>Add new animal</button>
//             </a>
//         </div>
//         </div>
//     )
    

// }