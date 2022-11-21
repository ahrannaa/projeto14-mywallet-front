import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UsuarioContext } from "./contexts/UsuarioContext";

export default function Login() {
  const { setToken } = useContext(UsuarioContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  const userLogin = async (e) =>{
   e.preventDefault()
   const URL = "http://localhost:5000/login"

   const body = {
        email: email,
        password: password,
     }
  
      try {
        const response = await axios.post(URL, body)
        setToken(response.data.token)
        navigate("../extrato", { replace: true })
      } catch (err) {
        alert(`error: ${err.response?.data}`)
      }
    }
  

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <form onSubmit={userLogin}>
        <Box>
          <Email
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
            name="email"
            placeholder="email"
          ></Email>
          <Senha
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
            name="password"
            placeholder="senha"
          ></Senha>
          <Botao type="submit">Entrar</Botao>
          <StyleLink>
            <Link to="/cadastro">Primeira vez? Cadastre-se</Link>
          </StyleLink>
        </Box>
      </form>
    </Container>
  )
}


const Container = styled.div`
`
const Logo = styled.div`
  font-family: 'Saira Stencil One';
  font-size: 40px;
  color: #ffffff;
  display: flex;
 justify-content: center;
  padding-top: 80px;

`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
const Email = styled.input`
  width: 303px;
  height: 45px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding: 10px;
  }
`
const Senha = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding: 10px;
  }
`
const Botao = styled.button`
  width: 303px;
  height: 45px;
  background: #A328D6;
  border-radius: 5px;;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  color: #ffffff;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
`
const StyleLink = styled.div`
  padding: 20px;

  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
