import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup';
import axios from 'axios';
import { Navigate } from "react-router-dom";
class Login extends Component {

	state = {
		account: {
			email:'',
			password: '',
		},
		errors:[],
		sending: false,
	};

	schema = yup.object().shape({
		email: 
			yup.string()
			.email('فرمت ایمیل صحیح نمی باشد')
			.required('ایمیل الزامی می باشد'),
		password: 
			yup.string()
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
			try {		
				this.setState({sending: true});		
				const response = await axios.post('https://reqres.in/api/login', result);				
				localStorage.setItem('token', response.data.token);
				this.setState({sending: false});
			} catch (error) {
				this.setState({sending: false});	
				this.setState({errors: ['ایمیل یا پسورد صحیح نمی باشد']});
			}
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
				{localStorage.token  && (
					<Navigate to="/dashboard" replace={true} />
        		)}
				<form onSubmit={this.handleSubmit}>
					<h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>				
					<Input onChange={this.handleChange} value={email} name="email" label="Email Address:"/>
					<Input onChange={this.handleChange} value={password} name="password" label="Password:"/>
					<div className="pt-1 mb-4">
						<button disabled={this.state.sending} className="btn btn-info btn-lg btn-block">Login
							{
								this.state.sending &&
								<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								// <span class="sr-only"> ...</span>
							}
						</button>
					</div>
				</form>
			</>
		)
	}
};

export default Login;
