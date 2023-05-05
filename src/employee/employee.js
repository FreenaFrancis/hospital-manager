

import React,{useState} from 'react'
// import './employee.css'
import { TextField,Button } from '@mui/material';
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Employee() {
  const [name, setName]=useState("");
  const [employeenumber, setEmployeeNumber] = useState("");
  const [age, setAge] = useState("");
  const [profileimage, setProfileImage] = useState("");
  const [profiledescription, setprofileDescription] = useState("");
  const [selectdepartment, setSelectDepartment] = useState("");
  const [report, setReport] = useState("");
  const [status, setstatus]=useState("");
  const handlesubmit =async (event)=>{event.preventDefault()
  setstatus(true)
  console.log('submitted');
  let response = await axios.post("http://localhost:4000/employee",{name,employeenumber,age,profileimage,profiledescription,selectdepartment})
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
      <form style={{display:'table-caption'}} onSubmit={handlesubmit} >
      <h1 style={{paddingLeft:'150px'}}
      >Employee detail</h1>
        <div >
          <label>Name:</label><br></br>
          {/* <input type="text" placeholder=" name" onChange={handlename} value={name}/> */}
          <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handlename} value={name}
        />
        </div>
        <div>
          <label>Employee number:</label><br></br>
          {/* <input type="text" placeholder="employee no" onChange={handleemployeenumber} value={employeenumber}/> */}
          <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handleemployeenumber} value={employeenumber}
        />
        </div>
        <div>
          <label>Age:</label><br></br>
          {/* <input type="text" placeholder="age" onChange={handleage} value={age}/> */}
          <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handleage} value={age}
        />
        </div>
        <div>
          <label>Profile Image:</label><br></br>
          {/* <input type="file" name="image"/> */}
          <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          
        />
        </div>
        <div>
          <label>Profile description:</label><br></br>
          {/* <input type="text" placeholder="Description" onChange={handleprofiledescription} value={profiledescription}/> */}
          <TextField style={{width:'700px'}}
          required
          id="outlined-required"
          label="Required"
          onChange={handleprofiledescription} value={profiledescription}
        />
        </div>
        <div>
        {/* <label>
          SELECT DEPARTMENT:<br></br>
          <select value={'state.value'} onChange={'handleChange'}>
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
    value={'state.value'}
    label="Select"
    onChange={'this.handleChange'}
  >
    <MenuItem value={10}>ENT</MenuItem>
    <MenuItem value={20}>DERMOTOLOGIST</MenuItem>
    <MenuItem value={30}>CARDIYOLOGY</MenuItem>
    <MenuItem value={30}>DENTIST</MenuItem>
  </Select>
        
        </div>
        <div>
        {/* <label>
          REPORT TO:<br></br>
          <select value={'state.value'} onChange={'handleChange'}>
            <option value="ENT-HEAD">ENT</option>
            <option value="DERMOTOLOGIST-HEAD">DERMOTOLOGIST</option>
            <option value="CARDIYOLOGY-HEAD">CARDIYOLOGY</option>
            <option value="DENTIST-HEAD">DENTIST</option>
          </select>
        </label> */}
             <InputLabel id="demo-simple-select-label">SELECT DEPARTMENT</InputLabel>
  <Select style={{width:'700px'}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={'state.value'}
    label="Select"
    onChange={'this.handleChange'}
  >
    <MenuItem value={10}>ENT</MenuItem>
    <MenuItem value={20}>DERMOTOLOGIST</MenuItem>
    <MenuItem value={30}>CARDIYOLOGY</MenuItem>
    <MenuItem value={30}>DENTIST</MenuItem>
  </Select>
        
        </div>
        
  
        
        
        
        
          <Button style={{marginTop:'10px',marginLeft:'200px'}} type='submit' variant="contained">Submit</Button>
       
        {/* <button className='but' type='submit' style={{backgroundColor:'blue'}}>Submit</button> */}
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

export default Employee
