import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import Withdrawal from './pages/WithdrawalPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignInPage/>} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/deposit" element={<DepositPage />} />
				<Route path="/withdrawal" element={<Withdrawal />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;