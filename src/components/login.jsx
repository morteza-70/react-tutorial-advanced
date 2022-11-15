import axios from 'axios';
import React, { Component, createRef } from 'react';
class Login extends Component {

	email = createRef();
	password = createRef();

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Email:', this.email.current.value);  //current is Element and value is value input
		console.log('Password:', this.password.current.value);
		const account = {email: this.email.current.value, password: this.password.current.value};
		const response = await axios.post(`https://reqres.in/api/login`, account);
		console.log(response);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} style={{width: '23rem'}}>
				<h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
				<div className="form-outline mb-4">
				<input ref={this.email} type="email" id="form2Example18" className="form-control form-control-lg" />
				<label className="form-label" htmlFor="form2Example18">Email address</label>
				</div>

				<div className="form-outline mb-4">
					<input ref={this.password} type="password" id="form2Example28" className="form-control form-control-lg" />
					<label className="form-label" htmlFor="form2Example28">Password</label>
				</div>

				<div className="pt-1 mb-4">
					<button className="btn btn-info btn-lg btn-block">Login</button>
				</div>

				{/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
				<p>Don't have an account? <a href="#!" className="link-info">Register here</a></p> */}
			</form>
		)
	}
};

export default Login;
