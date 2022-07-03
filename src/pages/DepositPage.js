import styled from 'styled-components';
import Deposit from '../components/Deposit';


export default function DepositPage() {
	return (
		<Page>
			<Deposit/>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 25px 24px 16px 24px;
	box-sizing: border-box;
`;