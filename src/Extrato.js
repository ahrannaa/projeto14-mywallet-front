import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UsuarioContext } from "./contexts/UsuarioContext";


export default function Extrato() {
  const { user } = useContext(UsuarioContext);
  const [extrato, setExtrato] = useState([])

  useEffect(() => {
    console.log("use effect")
    const URL = "http://localhost:5000/transaction"

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        console.log(response)
        setExtrato(response.data.transactions)
      })
      .catch((error) => console.log(error))

  }, [user]);

  return (
    <>
      <Container>
        <Logo> Olá, {user.name}</Logo>
        <Icon>
          <Link to="/"><ion-icon name="exit-outline"></ion-icon></Link>
        </Icon>
      </Container>
      <Box>
        <Controle>
          {extrato.map((transaction) => (
            <Render>
              <Day>{transaction.date}</Day>
              <Descricao>{transaction.description}</Descricao>
              <ValorSaida>{transaction.value}</ValorSaida>
            </Render>
          ))}
        </Controle>
      </Box>
      <Boxsizing>
        <Botao>
          <Icons>
            <Link to="/entrada"><ion-icon name="add-circle-outline"></ion-icon></Link>
          </Icons>
          <p> Nova entrada</p>
        </Botao>
        <Botao>
          <Icons>
            <Link to="/saida"><ion-icon name="remove-circle-outline"></ion-icon></Link>
          </Icons>
          <p>Nova saída</p>
        </Botao>
      </Boxsizing>

    </>

  )
}

const Container = styled.div`
 display: flex;
 justify-content: space-evenly;
`
const Icon = styled.div`
 font-size: 40px;
  display: flex;
  justify-content: center;
  padding-top: 42px;
  color:#ffffff;
`
const Logo = styled.div`
  font-family: 'Raleway';
  font-size: 40px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding-top: 35px;

`
const Box = styled.div`
  width: 350px;
  height: 470px;
  background: #FFFFFF;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  p{
   color:#868686;
   font-family: 'Raleway';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;


  }
  
`
const Boxsizing = styled.div`
  display: flex;
  justify-content: center;
`
const Botao = styled.button`
  width: 155px;
  height: 114px;
  background:#A328D6;
  border-radius: 5px;;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin: 10px;
  color: #ffffff;
  font-family:'Raleway' ;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  flex-direction: column;

  p {
     margin-top: 30px;
  }
`
const Icons = styled.div`
 font-size: 25px;
 padding-top: 10px;
`
const Render = styled.div`
  display: flex;
  justify-content: space-around;
`
const Controle = styled.div`
`
const Day = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #C6C6C6;
margin-left: 20px;
margin-top: 10px;
`
const Descricao = styled.div`
 font-family: 'Raleway';
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 color: #000000;
 margin-left: 20px;
 margin-top: 10px;
`
const ValorSaida = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-right: 15px;
margin-top: 12px;
color: #C70000;
`

