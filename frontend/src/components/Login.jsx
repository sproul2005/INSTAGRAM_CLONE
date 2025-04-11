import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import axios from 'axios';
import { Button } from './ui/button';
 import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/redux/authSlice';

const Login = () => {
  const[input,setInput]=useState({
    username:"",
    email:"",
    password:"",
  });
  const [loading, setLoading] = useState(false);
  const{user}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}

const loginHandler = async (e) => {

  setLoading(true);

   e.preventDefault();
   console.log("Logging in with:", input);

   try{
    setLoading(true);
      const res = await axios.post('https://instagram-clone-qobx.onrender.com/api/v1/user/login', input, {

        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      if (res.data.success) {
        dispatch(setAuthUser(res.data.user));
        navigate("/");
        toast.success( res.data.message);

        setInput({
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
      <form onSubmit={loginHandler} className='shadow-lg flex flex-col gap-5 p-8'>

      <div className='my-4'>
        <h1 className='text-center font-bold text-2xl'>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
        <br/>
        <p className='text-sm text-center'>Login to see photos & videos form your friends</p>
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
                        <Button type='submit'>Login</Button>
                    )
                }
      
      <span className='text-center'>Doesn't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>

     </form>
    </div>
  )
}

export default Login
