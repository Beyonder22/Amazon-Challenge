import React from 'react';
import {Link, useNavigate  } from 'react-router-dom';
import { useState } from "react";
import './Login.css';
import {auth} from './firebase';

function Login() {
	const navigate = useNavigate ();
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const signIn = e => {
		e.preventDefault();
		auth
		.signInWithEmailAndPassword(email,password)
		.then((auth) => {
			if(auth){
				navigate('/')
			}
		})
		.catch((error)=>alert(error.message))
	}
	const register = e => {
		e.preventDefault();
		auth
		.createUserWithEmailAndPassword(email,password)
		.then((auth) => {
			if(auth){
				navigate('/')
			}

	})
		.catch(error => alert(error.message))
	}
	return (
		<div className='login'>
			<Link to='/'>
				<img className='login_logo' 
				src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
				alt="not found"/>
			</Link>
			<div className='login_container'>
				<h1>Sign-in</h1>
				<form action="">
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
					<h5>Password</h5>
					<input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
					<button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
				</form>
				<p>
					By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.
				</p>
				<button onClick={register} className='login_registerButton'>Create your Amazon Clone account</button>
			</div>
		</div>
	)
}

export default Login