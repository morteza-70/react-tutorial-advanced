import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup';
import axios from 'axios';
class Login extends Component {

	state = {
		account: {
			email:'',
			password: '',
		},
		errors:[],
	};

	schema = yup.object().shape({
		email: yup.string()
			.email('فرمت ایمیل صحیح نمی باشد')
			.required('ایمیل الزامی می باشد'),
		password: yup.string()
			.required('پسورد الزامی می باشد')
			.min(4, 'پسورد باید حداقل 4 کاراکتر باشد'),
	});

	validate = async () => {
		try {
			const result = await this.schema.validate(this.state.account, {abortEarly: false});
			return result;			
		} catch (error) {
			this.setState({errors: error.errors})
		}
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const result = await this.validate();
		console.log(result);
		if (result) {
			const response = await axios.post('https://reqres.in/api/login', result);
			console.log(response);
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
			<>
				{
					this.state.errors.length !== 0 && (
						<div className='alert alert-danger'>
							<ul>
								{
									this.state.errors.map((e,i) => <li key={i}>{e}</li>)
								}
							</ul>
						</div>
					)
				}
				<form onSubmit={this.handleSubmit} style={{width: '23rem'}}>
					<h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>				
					<Input onChange={this.handleChange} value={email} name="email" label="Email Address:"/>
					<Input onChange={this.handleChange} value={password} name="password" label="Password:"/>
					<div className="pt-1 mb-4">
						<button className="btn btn-info btn-lg btn-block">Login</button>
					</div>
				</form>
			</>
		)
	}
};

export default Login;
