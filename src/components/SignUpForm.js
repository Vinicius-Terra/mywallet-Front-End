import styled from 'styled-components';

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function SignUpForm() {
	const navigate = useNavigate();

    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

	const SignUp= (event) => {
		event.preventDefault();
		const user = {
            name,
			email,
			password,
            confirmPassword
		};

		const promise = axios.post('http://localhost:5000/sign-up', user);
		promise.then((res) => {
			localStorage.setItem("token", (res.data));
            //replace true prevents user accidentally coming back to sign in page
			navigate('/', { replace: true });
		});
		promise.catch((err) => {
			alert(err.response.data);
		});
	};

	return (
		<Container>
			<Forms onSubmit={SignUp}>
                <input
					required
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
                <input
					required
					type="password"
					placeholder="Confirme a senha"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<Button type="submit">Entrar</Button>
			</Forms>
            <SignupLink to="/cadastro">Primeira vez? Cadastre-se!</SignupLink>
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