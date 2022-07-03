import styled from 'styled-components';

import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';

export default function SignInPage() {
	return (
		<Page>
			<Logo />
			<SignInForm />
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;