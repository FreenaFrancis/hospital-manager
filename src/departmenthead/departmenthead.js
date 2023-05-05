import React, {useState}from 'react'
// import './departmenthead.css'
import axios from'axios'
import { TextField,Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Departmenthead() {
  const [name, setName]=useState("");
  const [employeenumber, setEmployeeNumber] = useState("");
  const [age, setAge] = useState("");
  const [profileimage, setProfileImage] = useState("");
  const [profiledescription, setprofileDescription] = useState("");
  const [status, setstatus]=useState("");
  const handlesubmit =async (event)=>{event.preventDefault()
  setstatus(true)
  console.log('submitted');
  let response = await axios.post("http://localhost:4000/departmenthead",{name,employeenumber,age,profileimage,profiledescription})
  console.log(response.data);
  }
  const handlename =(event)=>setName(event.target.value)
  const handleemployeenumber =(event)=>setEmployeeNumber(event.target.value)
const handleprofileimage=(event)=> setProfileImage(event.target.value)
const handleage=(event)=> setAge(event.target.value)
const handleprofiledescription=(event)=> setprofileDescription(event.target.value)
  return (
    
    <div >
    
    <div style={{marginLeft:"500px"}}>
      <form style={{display:'table-caption'}} onSubmit={handlesubmit}>
      <h2>Department head</h2>
        <div className='text-field'>
          <label>Name:</label><br></br>
          {/* <input className="in"type="text" placeholder="Department name" onChange={handlename} value={name}/> */}
             <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handlename} value={name}
        />
        </div>
        <div className='text-field'>
          <label>Employee number:</label><br></br>
          {/* <input className="in"type="text" placeholder="employee number" onChange={handleemployeenumber} value={employeenumber}/> */}
            <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
         onChange={handleemployeenumber} value={employeenumber}
        />
        </div>
        
        <div >
          <label>Age:</label><br></br>
          {/* <input type="text" placeholder="Age" onChange={handleage} value={age}/> */}
               <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
         onChange={handleemployeenumber} value={employeenumber}
        />
        </div>
        <div>
          <label>Profile image:</label><br></br>
          {/* <input type="file" name="image"/> */}
               <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
         onChange={handleemployeenumber} value={employeenumber}
        />

        </div>
        <div className='text-field'>
          <label> Profile Description:</label><br></br>
          {/* <input type="text" placeholder="Description" onChange={handleprofiledescription} value={profiledescription}/> */}
                <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handleprofiledescription} value={profiledescription}
        />
        </div>
        <div >
        {/* <label>
          SELECT DEPARTMENT:<br></br>
          <select value={'state.value'} onChange={'this.handleChange'}>
            <option value="ENT">ENT</option>
            <option value="DERMOTOLOGIST">DERMOTOLOGIST</option>
            <option value="CARDIYOLOGY">CARDIYOLOGY</option>
            <option value="DENTIST">DENTIST</option>
          </select>
        </label> */}
          <InputLabel id="demo-simple-select-label">SELECT DEPARTMENT</InputLabel>
  <Select style={{width:'700px'}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Select"
    onChange={'this.handleChange'}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
        </div>
        <Button style={{marginTop:'10px',marginLeft:'200px'}} type='submit' variant="contained">Submit</Button>
      </form>
      </div>
      {status&&
      <div>
        
        <p>name :{name}</p>
        <p>employeenumber :{employeenumber}</p>
        <p>age :{age}</p>
        <p>profileimage :{profileimage}</p>
        <p>profiledescription :{profiledescription}</p>
      </div>
    }
    </div>
  )
}

export default Departmenthead


