import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';
import ThemeToggle from '../component/ThemeToggle';

const Login = () => {
  const [user, setUser] = useState({
      username : "",
      password : "",
  });

  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!user.username) newErrors.username = "Username is required";
    if (!user.password) newErrors.password = "Password is required";

    return newErrors;
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
        setErrors(formErrors);
         
        if (Object.keys(formErrors).length > 0){
            toast.error("Please fix the form errors");
            
          return;
    }  

    try {
      const res = await axios.post( `${import.meta.env.VITE_API_URL}/api/user/login`, 
          user, 
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }  
    );

    if(res){
        navigate("/");
        toast.success(res.data.message);
    }


    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] dark:bg-gray-900 dark:text-white text-black px-4">
      <div className="absolute  top-8 right-8"><ThemeToggle /></div>
      <div className='text-black w-full max-w-md bg-[var(--homepage-white)] dark:bg-gray-800 dark:shadow dark:text-white dark:shadow-gray-500 shadow-xl shadow-gray-300 p-8 space-y-6'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} className="space-y-5">

          <div>
            <input
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder='Username' />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div>
            <input
              name="password" 
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder='Password' />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
            <button type="submit" className="text-white w-full cursor-pointer px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-[var(--dark-blue)]">Login</button>
          <p className='text-center my-2'>Don't have an account? <Link to="/register" className='text-[var(--dark-blue)]' > Register </Link></p>
          <div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;