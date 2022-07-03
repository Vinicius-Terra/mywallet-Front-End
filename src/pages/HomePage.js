import styled from 'styled-components';
import Welcoming from '../components/Welcoming'
import Statement from '../components/Statement'
import Options from '../components/Options'

export default function HomePage() {
	return (
		<Page>
			<Welcoming />
			<Statement/>
			<Options/>
		</Page>
	);
}

const Page = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 25px 24px 16px 24px;
	box-sizing: border-box;
`;