import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../redux/alertsSlice';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // login method
  async function handleLogin(e) {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/user/login', { email, password });
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.data);
        navigate('/dashboard');
      }
      else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('Something went wrong!');
    }
  }

  return (
    <div className='register-container'>
      <main className="form-register w-100 m-auto">
        <form onSubmit={e => {handleLogin(e)}}>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2">Login</button>
          <Link to="/register" className="w-100 btn btn-sm mt-3">Register</Link>
        </form>
      </main>
    </div>
  )
}

export default Login