import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Statement() {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const URL = "https://my-wallet-server-vai.onrender.com/transactions";
    const promise = axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    promise.then(({ data }) => {
      setUserData(data);
    });
  }, []);

  function showWarning() {
    if (userData === null) {
      return (
        <Warning>
          <ThreeDots color="#8C11BE" height={40} width={60} />
        </Warning>
      );
    }
    if (userData === "") {
      return (
        <Warning>
          <h3>Não há registros de entrada ou saída</h3>
        </Warning>
      );
    } else {
      return <></>;
    }
  }
  function showTransactions() {
    if (userData === null || userData === "") {
      return <></>;
    } else {
      return userData.transactions.map((t, index) => (
        <Transaction key={index}>
          <Date>{t.date}</Date>
          <Description>{t.description}</Description>
          <Value type={t.type}>{t.value}</Value>
        </Transaction>
      ));
    }
  }
  function showBalance() {
    if (userData === null || userData === "") {
      return <></>;
    } else {
      let balance = 0;
      userData.transactions.forEach((t) => {
        if (t.type === "deposit") {
          balance += Number(t.value);
        } else {
          balance -= Number(t.value);
        }
      });
      return (
        <Botton>
          <h6>Saldo</h6>
          <Balance type={balance}>{balance}</Balance>
        </Botton>
      );
    }
  }

  const warning = showWarning();
  const transactions = showTransactions();
  const balance = showBalance();

  return (
    <Container>
      {transactions}
      {balance}
      {warning}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 446px;
  gap: 26px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 24px 12px 70px 12px;
  margin: 22px 0 14px 0;
  position: relative;
`;

const Warning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 446px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  p {
    font-weight: 400;
    font-size: 20px;
    color: #868686;
  }
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #c6c6c6;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Value = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type === "deposit" ? "#03AC00" : "#C70000")};
`;

const Botton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 12px 0 12px;
  width: 100%;
  height: 18px;
  h6 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
`;

const Balance = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type >= 0 ? "#03AC00" : "#C70000")};
`;
