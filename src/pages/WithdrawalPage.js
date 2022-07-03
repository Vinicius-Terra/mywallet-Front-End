import styled from 'styled-components';
import Withdrawal from '../components/Withdrawal';


export default function DepositPage() {
	return (
		<Page>
			<Withdrawal/>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 25px 24px 16px 24px;
	box-sizing: border-box;
`;