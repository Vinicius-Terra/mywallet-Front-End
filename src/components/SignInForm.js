import styled from 'styled-components';

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export default function SignInForm() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const locallyStoredToken = localStorage.getItem('token');

		if (locallyStoredToken !== null) {
			//Had an idea but it's on hold for the moment
		}
	}, []);

	const SignIn = (event) => {
		event.preventDefault();
		const user = {
			email,
			password,
		};

		const promise = axios.post('https://my-wallett.herokuapp.com/sign-in', user);
		promise.then((res) => {
			localStorage.setItem("token", (res.data.token));
			localStorage.setItem("name", (res.data.name));
            //replace true prevents user accidentally coming back to sign in page
			navigate('/home', { replace: true });
		});
		promise.catch((err) => {
			alert(err.response.data);
		});
	};

	return (
		<Container>
			<Forms onSubmit={SignIn}>
				<input
					required
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					required
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type="submit">Entrar</Button>
			</Forms>
            <SignupLink to="/sign-up">Primeira vez? Cadastre-se!</SignupLink>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	align-items: center;
	width: 100%;
`;

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
	width: 100%;
    gap: 13px;
	input {
		width: 100%;
        max-width: 326px;
        height: 58px;
		font-size: 20px;
		color: #000000;
	}
`;

const Button = styled.button`
	height: 46px;
	width: 100%;
	max-width: 326px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	border: transparent;
	background-color: #a328d6;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	cursor: pointer;
`;

const SignupLink = styled(Link)`
	margin: 36px 0 40px 0;
	font-weight: 700;
	font-size: 15px;
	color: #ffffff;
`;