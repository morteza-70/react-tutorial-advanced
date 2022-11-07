import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Users from './components/users';
import User from './components/user';
import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notFound'
import {Route, Routes, Navigate} from 'react-router-dom';

class App extends Component {
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
						<Route path='/register' element={<Register />} />
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
