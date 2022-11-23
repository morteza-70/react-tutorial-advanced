import React, { Component } from 'react';
import Input from './input';
class Login extends Component {

	// login with ref module
	// email = createRef();
	// password = createRef();

	// handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const account = {email: this.email.current.value, password: this.password.current.value}; //current is Element and value is value input
	// 	const response = await axios.post(`https://reqres.in/api/login`, account);
	// 	console.log(response);
	// };

	state = {
		account: {
			email:'',
			password: '',
		}
	};

	handleChange = async ({currentTarget:input}) => {
		const account = {...this.state.account};
		account[input.name] = input.value;
		this.setState({account});
	};

	render() {
		const {email, password} = this.state.account;
		return (
			<form onSubmit={this.handleSubmit} style={{width: '23rem'}}>
				<h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>				
				<Input onChange={this.handleChange} value={email} name="email" label="Email Address:"/>
				<Input onChange={this.handleChange} value={password} name="password" label="Password:"/>
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
