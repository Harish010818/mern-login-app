import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import ThemeToggle from '../component/ThemeToggle';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",

  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }


  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.username) newErrors.username = "Username is required";
    if (!user.email || !emailRegex.test(user.email)) newErrors.email = "Invalid email";
    if (user.password.length < 5) newErrors.password = "Password must be at least 5 characters";
    if (user.password !== user.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!user.gender) newErrors.gender = "Gender is required";

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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`,
        user,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })

    setErrors({});
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-[var(--bg)] dark:bg-gray-900 dark:text-white text-black px-4'>
      <div className="absolute  top-8 right-8"><ThemeToggle /></div>
      <div className="text-black w-full max-w-md bg-[var(--homepage-white)] dark:bg-gray-800 dark:shadow dark:text-white dark:shadow-gray-500 shadow-xl shadow-gray-300 p-8 space-y-6">
        <h1 className='text-3xl font-bold text-center'>Register</h1>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder='Username' />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder='email' />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className='relative'>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder='Password' />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}  
          </div>
          <div className='relative'>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder='Confirm Password' />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}   
          </div>
          <div className="flex gap-6 my-4">
            <label className="relative flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="peer appearance-none w-5 h-5 border border-gray-400 rounded bg-white  dark:bg-gray-700 checked:bg-[var(--dark-blue)]"
              />

              {/* Blue Tick shown only when checked */}
              <svg className="absolute w-4 h-4 text-[var(--office-white)] opacity-0 peer-checked:opacity-100 left-0.5 top-0.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-1 text-black dark:text-white">Male</span>
            </label>

            <label className="relative flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="peer appearance-none w-5 h-5 border border-gray-400 rounded bg-white dark:bg-gray-700 checked:bg-[var(--dark-blue)]"
              />
              <svg className="absolute w-4 h-4 text-[var(--office-white)] opacity-0 peer-checked:opacity-100 left-0.5 top-0.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-1 text-black dark:text-white">Female</span>
            </label>
          </div>
             {errors.gender && <p className="text-red-500 text-sm -mt-2">{errors.gender}</p>}
          <div>
            <button
              type='submit'
              className="text-white cursor-pointer w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2  bg-[var(--dark-blue)]">
              Register
            </button>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login" className='text-[var(--dark-blue)]'>login</Link></p>
        </form>
      </div>
    </div>

  )
}

export default Register;
