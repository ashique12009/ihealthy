import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.post('/api/user/get-user-inf-by-id', {}, 
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
    } catch (error) {
      console.log('CATCH ERROR', error);
      navigate('/login');
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <h1 className='text-center'>Welcome to iHealthy Dashboard</h1>
    </div>
  )
}

export default Dashboard;