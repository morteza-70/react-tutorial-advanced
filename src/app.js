import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Users from './components/users';
import User from './components/user';
import Login from './components/login';
import Register from './components/register';
import {Route, Routes} from 'react-router-dom';

class App extends Component {
  render() {
		return (
			<>
				<Navbar/>
				<div className='container mt-3'>
					<Routes>
						<Route path='/users/:id' element={<User/>} />
						<Route path='/users' element={<Users/>} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</>
		)
   }
}

export default App;
