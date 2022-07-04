import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Deposit() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const deposit = (event) => {
		event.preventDefault();
        const deposit = {
			value,
			description,
		};

		const promise = axios.post('https://my-wallett.herokuapp.com/deposit', 
        deposit, 
        {
            headers: {Authorization: `Bearer ${token}`}
        });
		promise.then((res) => {
			navigate('/home');
		});
		promise.catch((err) => {
			alert(err.response.data);
		});
	};

	return (
		<>
			<Title>
				<h2>Nova entrada</h2>
			</Title>
			<Forms onSubmit={deposit}>
				<input
					required
					type="number"
					placeholder="Valor"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<input
					required
					type="text"
					placeholder="Descrição"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button type="submit">Salvar entrada</Button>
			</Forms>
		</>
	);
}

const Title = styled.div`
	margin: 24px 0 40px;
	width: 100%;
	max-width: 652px;
	h2 {
		font-weight: 700;
		font-size: 26px;
		color: #ffffff;
	}
`;

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	width: 100%;
	max-width: 652px;
	input {
		height: 56px;
		width: 100%;
		font-family: 'Raleway', sans-serif;
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
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	cursor: pointer;
`;