import React, { Component } from 'react';
import axios from 'axios';
import LoadingUsers from './loading/loadingUsers';

class Users extends Component {
    state ={
        users: [],
        isLoading: true
    };

    async componentDidMount() {
        const response = await axios.get('https://reqres.in/api/users');
        this.setState({users: response.data.data, isLoading: false});
    }
    render() {
        return (
            <>
                <button onClick={this.handleCreate} className='btn btn-primary btn-larg'>
                    Create
                </button>
                <div className='row text-center p-5'>
                    {this.state.isLoading ? (
                        <LoadingUsers/>
                    ) : (
                        this.state.users.map((user) => {
                            return (
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
                            );
                        })
                    )}
                </div>  
            </>
        );
    }

    handleCreate = async () => {
        const newUser = {
                email: 'morteza@gmail.com',
                first_name: 'Morteza',
                last_name: 'Torkashvand',
                avatar: 'https://reqres.in/img/faces/5-image.jpg',
        };
        
        await axios.post('https://reqres.in/api/users', newUser);
        this.setState({users: [...this.state.users, newUser]});
    };

    handleUpdate = async (user) => {
        user.first_name = 'Updated';
        await axios.put(`https://reqres.in/api/users/${user.id}`, user);
        const updatedUsers = [...this.state.users];
        const index = updatedUsers.indexOf[user];
        updatedUsers[index] = {...user};
        this.setState({users: updatedUsers});
    }
    handleDelete = async (user) => {
        await axios.delete(`https://reqres.in/api/users/${user.id}`, user);
        const newUsers = this.state.users.filter((p) => p.id !== user.id);
        this.setState({users: newUsers});
    };
}

export default Users;

