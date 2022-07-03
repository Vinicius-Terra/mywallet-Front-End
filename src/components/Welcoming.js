import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function Header() {
	const name = localStorage.getItem('name');
    const navigate = useNavigate();


	return (
		<Container>
			<h2>Olá, {name}</h2>
			<ion-icon name="enter-outline" 
            onClick={()=>{
                const res = window.confirm("Deseja encerrar sua sessão?");
                if(res){
                    setTimeout(()=>{
                        localStorage.clear();
                        navigate("/")
                    },600)
                }
            }}/>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: #ffffff;
    box-sizing: border-box;
	h2 {
		font-weight: 700;
		font-size: 26px;
	}
	ion-icon {
		font-size: 24px;
	}
`;