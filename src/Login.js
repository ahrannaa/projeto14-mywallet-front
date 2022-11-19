import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Login() {

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <form>
        <Box>
          <Email
            type="text"
            name="email"
            id="email"
            placeholder="email"
          ></Email>
          <Senha
            type="text"
            name="password"
            id="password"
            placeholder="senha"
          ></Senha>
          <Botao>Entrar</Botao>
          <StyleLink>
          <Link to= "/cadastro">Primeira vez? Cadastre-se</Link>
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