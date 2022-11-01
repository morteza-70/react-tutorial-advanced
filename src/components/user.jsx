import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() =>{
        async function fetchUser() {
            const { data } =  await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(data.data);
        }
        fetchUser();
    },[id]);

    return (
        <>
            <div className='col-4'>
                <img
                    src={user.avatar}
                    style={{borderRadius: '50%', width: '100px'}}
                    alt=""
                />
                <h4>{user.first_name} {user.last_name}</h4>
                <h5>{user.email}</h5>
                <div className='row'>
                    <div className='col-6'>
                        <button onClick={()=>this.handleUpdate(user)} className='btn btn-success btn-primary'>Update</button>
                    </div>
                    <div className='col-6'>
                        <button onClick={()=>this.handleDelete(user)} className='btn btn-danger btn-primary'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;

