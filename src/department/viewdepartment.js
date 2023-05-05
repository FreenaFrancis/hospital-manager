import React,{useState,useEffect} from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
function ViewDepartment() {
    const [dept, setdept]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/department').then(({data})=>{
        

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
          <th scope='col'>department name</th>
          <th scope='col'>department image</th>
          <th scope='col'>year founded</th>
          <th scope='col'>description</th>
        </tr>
      </MDBTableHead>
      {dept.map((dept)=>{
          return(
      <MDBTableBody>
           
        <tr>
          <th>{dept.departmentname}</th>
          <td>{dept.profileimage}</td>
          <td>{dept.yearfounded}</td>
          <td>{dept.description}</td>
        </tr>
      
      </MDBTableBody>
        )
    })}
    </MDBTable>
    </div> 
</>
    )
}

export default ViewDepartment
