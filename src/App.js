import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './home/home'
import Profile from './profile/profile'
import Departmenthead from './departmenthead/departmenthead';
import Department from './department/department';
import ViewDepartment from './department/viewdepartment'
import ViewDepartmenthead from './departmenthead/viewdepartmenthead'
import Employee from './employee/employee';
import Login from './login/login';
// import axios from 'axios'
// import Card from './Card'
//  import Sidebar from './admin/sidebar'
// import Sidebar from './admin/sidebar';
// let data =[
//   {
//   h1:'hi',
//   body:'njoy the day',
//   body1:'be motivated in your work',
//   body2:'stay happy and health',  
//   },
//   {
//     h1:'hloo',
//     body:'how was your day',
//     body1:'always be happy',
//     body2:'work hard'
//   },
// ]




function App() {


  
  return (
    <div>
      <BrowserRouter>

        <Routes>
        
          <Route path='/' element={<Layout />}> 
          <Route path='home' element={<Home />} />
          <Route path='department' element={<Department />} />
          <Route path='departmenthead' element={<Departmenthead />} />
          <Route path='employee' element={<Employee />} />
        </Route>
        <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/ViewDepartmenthead' element={< ViewDepartmenthead/>} />
        <Route path='/ViewDepartment' element={< ViewDepartment/>} />
        </Routes>

      </BrowserRouter>
      {/* <Card  h1={'welcome all'}/>
      
      <Card h1={'Hospital Management System (HMS) is essential to the delivery of modern healthcare. It can boost patient outcomes, lower medical errors, and improve the overall quality of care.'} body={'happy birthday to you'} body1={'have a nice day'} body2={'be motivated yourself'}/>
      <Card h1={'hey'} body={'Are ypu happy baby'} body1={'always be happy'} body2={'njoy'}/> */}
   

    </div>
  )
}

export default App