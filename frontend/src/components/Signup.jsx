import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import axios from 'axios';
import { Button } from './ui/button';
 import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const Signup = () => {
  const[input,setInput]=useState({
    username:"",
    email:"",
    password:"",
  });
  const [loading, setLoading] = useState(false);
  const {user}=useSelector(store=>store.auth);
  const navigate=useNavigate();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}

const registerHandler = async (e) => {
  e.preventDefault();
  
  if (input.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  setLoading(true);
  console.log("Registering with:", input);

   try{
    setLoading(true);
      const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {

        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success("Registration successful: " + res.data.message);
        setInput({
          username: "",
          email: "",
          password: ""
      });
      }
    } catch (error) {

    console.log(error);
    toast.error("Error: " + error.response.data.message);

   } finally{
    setLoading(false);
   }
}

useEffect(()=>{
    if(user){
      navigate("/");
    }
},[])

  return (
    <div className='flex items-center w-screen h-screen justify-center'>
      <form onSubmit={registerHandler} className='shadow-lg flex flex-col gap-5 p-8'>

      <div className='my-4'>
        <h1 className='text-center  font-bold text-2xl'>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
        <br/>
        <p className='text-sm text-center'>Signup to see photos & videos form your friends</p>
      </div>
      <div>
        <span className='font-medium'>Username</span>
        <Input 
          type="text"
          name="username"
          value={input.username}
          onChange={changeEventHandler}
          className="focus-visible:ring-transparent my-2 bg-white"
        />
      </div>
      <div>
        <span className='font-medium'>Email</span>
        <Input 
          type="email"
          name="email"
          value={input.email}
          onChange={changeEventHandler}
          className="focus-visible:ring-transparent my-2 bg-white"
        />
      </div>
      <div>
        <span className='font-medium'>Password</span>
        <Input 
          type="password"
          name="password"
          value={input.password}
          minLength="6"
          onChange={changeEventHandler}
          className="focus-visible:ring-transparent my-2"
        />
      </div>
      {
         loading ? (
             <Button>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Please wait
              </Button>
               ) : (
           <Button type='submit'>Signup</Button>
            )
      }

      <span className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
     </form>
    </div>
  )
}

export default Signup
