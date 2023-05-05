import React,{useState} from 'react'
import axios from 'axios'
import { TextField, Button } from '@mui/material';

function Department() {
  const [departmentname, setDepartmentName] = useState([]);
 
  const [profileImage, setProfileImage] = useState("");
  const [yearFounded, setYearFounded] = useState("");
  const [description, setDescription] = useState("");
  const [status,setstatus]=useState(false)
  const handlesubmit =async (event)=>{ event.preventDefault()
    setstatus(true)
    console.log('submitted');
    let response =await axios.post("http://localhost:4000/department",{departmentname,profileImage,yearFounded,description})
    console.log(response.data);
}

const handledepartments =(event)=>setDepartmentName(event.target.value)

const handleprofileimage=(event)=> setProfileImage(event.target.value)
const handleyearfounded=(event)=> setYearFounded(event.target.value)
const handledescription=(event)=> setDescription(event.target.value)
  return (
 <>
   <div style={{marginLeft:"500px", marginTop:"130px"}}>
     <form style={{display:'table-caption'}} onSubmit={handlesubmit} >
     <h3 style={{padding:'38px', paddingLeft:'175px' }}>Department Details</h3>
       <div >
       

    
       <label style={{padding:'20px'}}>
        DepartmentName
       </label><br></br>
        <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handledescription} value={description}
        />
       </div>
       <div >
         <label style={{padding:'20px'}}> Department profileImage:</label><br></br>
         {/* <input type="file" placeholder="profileImage" onChange={handleprofileimage} value={profileImage}/>      */}
         <TextField style={{width:'700px'}} 
          required
          id="outlined-required"
          label="Required"
          onChange={handledescription} value={description}
        />
       </div>
       
       <div >
         <label style={{padding:'20px'}}>yearFounded:</label><br></br>
         {/* <input type="text" placeholder="yearFounded" onChange={handleyearfounded} value={yearFounded}/> */}
         <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handledescription} value={description}
        />
       </div>
       
       <div className='text-field'>
         <label style={{padding:'20px'}}>  Description:</label><br></br>
         {/* <input type="text" placeholder="Description" onChange={handledescription} value={description}/> */}
         <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handledescription} value={description}
          
        />
       </div>
       <Button style={{marginTop:'10px',marginLeft:'200px'}} type='submit' variant="contained">Submit</Button>
      
     </form>
     </div>

     {status&&
      <div>
        
        <p>departmentname :{departmentname}</p>
        <p>profileImage :{profileImage}</p>
        <p>yearFounded :{yearFounded}</p>
        <p>description :{description}</p>
      </div>
    }


</>
  )
}

export default Department

