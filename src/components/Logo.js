import styled from 'styled-components';

export default function Logo() {
	return (
		<Container>
			<BrandLogo>MyWallet</BrandLogo>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
	padding: 0  0 26px 0;
	width: 100%;
	height: 76px;
`;

const BrandLogo = styled.h1`
	font-family: 'Saira Stencil One', cursive;
	font-size: 32px;
	color: #ffffff;
`;