import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import videoFile from '../assets/background.mp4'

export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formData);
  return (
    <div className='bg-[#e9eece] p-3 max-w-lg mx-auto rounded-lg'>
      <video autoPlay loop muted style={{ position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <h1 className='text-[#3C6255] text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email'
        className=' bg-[#EAE7B1] border p-3 rounded-lg' id='email' onChange = {handleChange} />
        <input type='password' placeholder='password'
        className='bg-[#EAE7B1] border p-3 rounded-lg' id='password' onChange = {handleChange} />
        <button disabled = {loading} className='bg-[#3C6255] text-[#EAE7B1] rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...':'Sign In'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-[#3C6255]'>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}