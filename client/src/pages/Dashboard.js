import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

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
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  )
}

export default Dashboard;