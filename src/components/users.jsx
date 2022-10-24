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
        setTimeout(this.setState({users: response.data.data, isLoading: false})
        , 3000);
    }
    render() {
        return (
            <>
                <button onClick={this.handleCreate} className='btn btn-primary btn-larg'>
                    Create
                </button>
                <div className='row text-center p-5'>
                    {
                        this.state.isLoading ? (
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
                                                <button onClick={this.handleUpdate} className='btn btn-success btn-primary'>Update</button>
                                            </div>
                                            <div className='col-6'>
                                                <button onClick={this.handleDelete} className='btn btn-danger btn-primary'>Delete</button>
                                            </div>
                                        </div>
                                    </div> 
                                );
                            })
                        )
                    }
                </div>  
            </>
        );
    }

    handleCreate = () => {

    }

    handleUpdate = () => {
        
    }

    handleDelete = () => {
        
    }

}

export default Users;