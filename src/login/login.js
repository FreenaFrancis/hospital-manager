import React, {useState} from 'react'
import './login.css'
import axios from 'axios'
function Login() {
  
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [status,setstatus]=useState(false)

const handlesubmit =async (event)=>{ event.preventDefault()  //async- await kodukumpol async use chaiyanam
    setstatus(true)
    console.log('submitted');
    let response =await axios.post("http://localhost:4000/login",{email,password})
    console.log(response.data);
}


const handleemail =(event)=>  setemail(event.target.value)
const handlepassword =(event)=> setpassword(event.target.value)
    return(

         <div className='log'> 
          <img className="img" src={`data:image/jpeg;base64,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`} alt=""></img>
            <div className='hi'> 
                 <form style={{display:'table-caption'}} onSubmit={handlesubmit} > 
       <h2
       
       
       >Login</h2>
      
       <div className="txt_field"><label>Email:</label><input type="text" placeholder='Email' onChange={handleemail} value={email}/></div>
       <div className="txt_field"><label>Password:</label><input type="text " placeholder='Password'onChange={handlepassword} value={password}/></div>
      
       <button className='but' type='submit' >Submit</button><a href='/home'></a>
     
     </form>
    </div>  
    {status&&
  <div>
    
    <p>Email :{email}</p>
    <p>Password :{password}</p>
  </div>
}
            
        </div>
    )
    
}
export default Login