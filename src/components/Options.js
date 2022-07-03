import styled from 'styled-components';

import { Link } from "react-router-dom";

export default function Options() {
	return (
		<Container>
			<Option to="/deposit">
				<ion-icon name="add-circle-outline" />
				<p>Nova entrada</p>
			</Option>
			<Option to="/withdrawal">
				<ion-icon name="remove-circle-outline" />
				<p>Nova saída</p>
			</Option>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	width: 100%;
    gap: 15px;
`;

const Option = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 10px;
	height: 114px;
    min-width: 154px;
	width: 100%;
	background-color: #a328d6;
	color: #ffffff;
    box-sizing: border-box;
	ion-icon {
		font-size: 22px;
	}
	p {
		font-weight: 700;
		font-size: 17px;
		word-spacing: 100vw;
	}
`;

