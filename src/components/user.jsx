import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


function User() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const fullName = useRef({});

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('order');
    console.log(name);

    const navigate = useNavigate();

    useEffect(() =>{
        async function fetchUser() {
            const { data } =  await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(data.data);
        }
        fetchUser();
        console.log(fullName.current); //current is Element and value is value input
    },[id]);

    return (
        <>
            <div className='col-4'>
                <img
                    src={user.avatar}
                    style={{borderRadius: '50%', width: '100px'}}
                    alt=""
                />
                <h4 ref={fullName}>
                    {user.first_name} {user.last_name}
                </h4>
                <h5>
                    {user.email}
                </h5>
                <div className='row'>
                    <div className='col-6'>
                        <button onClick={()=>this.handleUpdate(user)} className='btn btn-success btn-primary'>Update</button>
                    </div>
                    <div className='col-6'>
                        <button onClick={()=>this.handleDelete(user)} className='btn btn-danger btn-primary'>Delete</button>
                    </div>
                </div>
            </div>
            <button onClick={()=> navigate("/users")} className='btn btn-info mt-3'>Users</button>
        </>
    )
}

export default User;

