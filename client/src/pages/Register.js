import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // register method
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/register', { name, email, password });
      if (response.data.success) {
        toast.success(response.data.message);
      }
      else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wront!');
      console.log('error', error);
    }
  }

  return (
    <div className='register-container'>
      <main className="form-register w-100 m-auto">
        <form onSubmit={e => {handleRegister(e)}}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2">Register</button>
          <Link to="/login" className="w-100 btn btn-sm mt-3">Login</Link>
        </form>
      </main>
    </div>
  )
}

export default Register