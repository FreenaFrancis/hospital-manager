
import React, {useState, useEffect} from 'react'
import axios from axios
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function ViewEmployee() {
    const [dept, setdept]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:4000/employee').then(({data})=>{
          
  
          console.log(data);
          setdept(data);
    });
    },[])
  return (
    <>
    <div>
<MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Name</th>
        <th scope='col'>setEmployeeNumber</th>
        <th scope='col'>Age</th>
        <th scope='col'>profiledescription</th>
        <th scope='col'>Select Department</th>
        <th scope='col'>Reported To</th>
        

      </tr>
    </MDBTableHead>
    {dept.map((dept)=>{
        return(
    <MDBTableBody>
         
      <tr>
        <th>{dept.name}</th>
        <td>{dept.employeenumber}</td>
        <td>{dept.age}</td>
        <td>{dept.profiledescription}</td>
        <td>{dept.selectdepartment}</td>
        <td>{dept.report}</td>
      </tr>
    
    </MDBTableBody>
      )
  })}
  </MDBTable>
  </div> 
</>
  )
}

      
 

export default ViewEmployee
