import axios from 'axios';
import React, { Component } from 'react';

class Users extends Component {
    state ={
        users: [],
    };

    async componentDidMount() {
        const response = await axios.get('https://reqres.in/api/users');
        this.setState({users: response.data.data})
    }
    render() {
        return (
            <>
                <button onClick={this.handleCreate} className='btn btn-primary btn-larg'>
                    Create
                </button>
                <div className='row text-center p-5'>
                    {this.state.users.map((user) => {
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
                    })};
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