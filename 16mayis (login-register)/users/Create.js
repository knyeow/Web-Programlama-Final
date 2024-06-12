import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {  
      const [inputData, setInputData] = useState({  name: '',username: '', email: '',phone: '',website: '' })   
       const navigate = useNavigate();
    const handleSubmit = (event) => {
         event.preventDefault(); 
         console.log(inputData)  ;  
            
         axios.post("http://localhost:8800/newuser", inputData)
          .then((res) => {  alert("Data Posted Successfully!") ; navigate('/')  }) 
          .catch(err => console.log(err))
    } 
         return (
                <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>        
                <div className='w-50 border bg-secondary text-white p-5'>  
                    <form onSubmit={handleSubmit}>    
                         <div>        
                         <label htmlFor="name">Name:</label> 
                        <input type="text" name='name' className='form-control'                    
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                         </div> 

                         <div>        
                         <label htmlFor="username">UserName:</label> 
                        <input type="text" name='username' className='form-control'                    
                        onChange={e => setInputData({...inputData, username: e.target.value})}/>
                         </div>               
                         <div>                
                             <label htmlFor="email">Email:</label> 
                                <input type="email" name='email' className='form-control'      
                                 onChange={e => setInputData({...inputData, email: e.target.value})}/>                
                                 </div>

                                 <div>                
                             <label htmlFor="phone">Phone:</label> 
                                <input type="text" name='phone' className='form-control'      
                                 onChange={e => setInputData({...inputData, phone: e.target.value})}/>                
                                 </div>
                                 <div>                
                             <label htmlFor="website">WebSite:</label> 
                                <input type="text" name='website' className='form-control'      
                                 onChange={e => setInputData({...inputData, website: e.target.value})}/>                
                                 </div>
                                 <br />    
                             <button className='btn btn-info'>Submit</button> 
                             </form>       
                             </div>    
                             </div>  
                             )}
export default Create