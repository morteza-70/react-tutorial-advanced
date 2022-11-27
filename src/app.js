import React, { Component } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Users from './components/users';
import User from './components/user';
import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notFound';
import Dashboard from './components/dashboard';
import Logout from './components/logout';

class App extends Component {
	state = {
		user:null,
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		if (!token) {
			this.setState({user: null});
			return;
		}
		// const response = await axios.post('https://reqres.in/api/userbytoken', {token});  // comment beacuse api is fake
		const response = {
			data : {
				user: {
					emil: 'morteza@gmail.com',
					name: 'morteza'
				},
			}
		}
	
		if (!response.data.user) {
			this.setState({user: this.data.user});
			return;
		};
		this.setState({user:response.data.user});
	};

    render() {
		
		return (
			<>
				<Navbar/>
				<div className='container mt-3'>
					<Routes>
						<Route path='/users/:id' element={<User/>} />
						<Route path='/users' element={<Users/>} />
						<Route path='/login' element={<Login />} >
							<Route path='/login/:timestamp' element={<Login />} />  {/*for optional params */}
						</Route>
						<Route path='/logout' element={<Logout />} />
						<Route path='/register' element={<Register />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/' element={<Home />} />
						<Route path='/notFound' element={<NotFound />} />
						<Route path="*" element={<Navigate to ="/notFound" />}/>  {/*for redirect */}
						<Route path="morteza" element={<Navigate to ="/users" />}/>  {/*for redirect morteza to users */}
					</Routes>
				</div>
			</>
		)
   }
}

export default App;
