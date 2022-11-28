import axios from "axios";
import { useEffect } from "react";
import { Navigate } from 'react-router-dom';

// axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['token'] = `Token: ${localStorage.getItem('token')}`;

const Dashboard = ({user}) => {

    useEffect( () => {
        async function fetchData() {
        const response = await axios.get('https://reqres.in/api/unknown');
        console.log(response.data);
        };
        fetchData();
    },[]);

    if (!user) {
        return <Navigate to="/login" replace />;  // protect route for security
    }
    return (
        <h1>Dashboard</h1>
    )
    };

export default Dashboard;
