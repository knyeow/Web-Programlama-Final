import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {   
     const [data, setData] = useState([])   
     const navigate = useNavigate()   
     useEffect(()=> {       
         axios.get('http://localhost:8800/users')      
           .then(res => setData(res.data))       
            .catch(err => console.log(err))  })
         
  return (    
    <div className='container '>      
      <h2>Crud App with JSON Server</h2>      
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>     
           <table className='table'>          
             <thead>             
                   <tr>          
                        <th>ID</th> 
                        <th>Name</th>      
                        <th>Email</th>   
                         <th>Action</th> 
                       </tr>         
                </thead>   
                  <tbody> 
                    {data.map((d, i)=> (   
                          <tr key={i}>  
                          <td>{d.id}</td>         
                         <td>{d.name}</td>  
                         <td>{d.email}</td>  
                          <td>                       
                             <Link className='text-decoration-none btn btn-sm btn-success'  to={`/update/${d.id}`}>Update</Link> 
                                 <button className='text-decoration-none btn btn-sm btn-danger mx-1'  onClick={e => handleDelete(d.id)}>Delete</button>        
                                                          
                            </td>                    
                        </tr>                
                    ))}            
                    </tbody>       
                     </table>
        </div>  )
  
  function handleDelete(id) {   
     const confirm = window.confirm("Do you like to Delete?");    
     if(confirm) {       
         axios.delete('http://localhost:8800/delete/'+id)   
         .then(res => { alert("Record Deleted");     })    
            }  }}
export default Home