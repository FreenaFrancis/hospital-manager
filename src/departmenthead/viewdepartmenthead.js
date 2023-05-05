import React,{useState,useEffect} from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ViewDepartmenthead() {
    const [dept, setdept]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:4000/departmenthead').then(({data})=>{
          
  
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
            <th scope='col'>Employeenumber</th>
            <th scope='col'>Profile Image</th>
            <th scope='col'> Profile description</th>
            <th scope='col'> Department</th>
          </tr>
        </MDBTableHead>
        {dept.map((dept)=>{
            return(
        <MDBTableBody>
             
          <tr>
            <th>{dept.name}</th>
            <td>{dept.employeenumber}</td>
            <td>{dept.profileimage}</td>
            <td>{dept.profiledescription}</td>
            <td>{dept.department}</td>
          </tr>
        
        </MDBTableBody>
          )
      })}
      </MDBTable>
      </div> 
  </>
      )
  }
  
 
export default ViewDepartmenthead






