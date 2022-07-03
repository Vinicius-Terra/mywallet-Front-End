import styled from 'styled-components';

import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';

export default function SignInPage() {
	return (
		<Page>
			<Logo />
			<SignUpForm />
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