import axios from "axios";
import { useEffect } from "react";

// axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['token'] = `Token: ${localStorage.getItem('token')}`;

const Dashboard = () => {

  useEffect( () => {
    async function fetchData() {
      const response = await axios.get('https://reqres.in/api/unknown');
      console.log(response.data);
    };
    fetchData();
  },[]);

  return (
    <h1>Dashboard</h1>
  )
};

export default Dashboard;
