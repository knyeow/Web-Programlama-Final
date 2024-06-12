import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {  
      const {id} = useParams(); 
      console.log(id);
      const [values, setValues] = useState({  id: id,  name: '',  email: '' })   
               
       useEffect(()=> {  
        axios.get('http://localhost:8800/getuser/'+id)       
        .then(res => {
     
          console.log(res.data);
          const a=res.data;
          // Burada res.data tek elemanlı dizi olarak geliyor. 
          //Bunu object'e çeviriyoruz. çünkü state'imiz object tipinde
          const c=a[0];
          console.log(c);
          setValues(c);
        })       
         .catch(err => console.log(err))    }, [])   
          const navigate = useNavigate();
      
          const handleSubmit = (e) => { e.preventDefault();        
            axios.put('http://localhost:8800/update/'+id, values)      
              .then(res => {  navigate('/'); })        
              .catch(err => console.log(err))    }

  return (    
  <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>       
   <div className='w-50 border bg-secondary text-white p-5'> 
              <form onSubmit={handleSubmit}>            
                  <div>                
                 <label htmlFor="name">Name:</label>   
                     <input type="text" name='name' className='form-control' placeholder='Enter Name'   value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>          
                    </div>      
                     <div>       
                        <label htmlFor="email">Email:</label> 
                       <input type="email" name='email' className='form-control' placeholder='Enter Email' value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>               
                     </div><br />         
                     <button className='btn btn-info'>Update</button>

                     </form>  
                    </div>  
                 </div>  
                 )}
export default Update