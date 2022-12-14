import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UsuarioContext } from "./contexts/UsuarioContext";



export default function CadastrarSaida() {
  const { user } = useContext(UsuarioContext);
  const [value, setValue] = useState()
  const [description, setDescription] = useState("")

  let navigate = useNavigate()

  const cashOut = async (e) => {
    e.preventDefault()

    const URL = "http://localhost:5000/transaction"

    const body = {
      value: Number(value),
      description: description,
      type: "saida"
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };


    try {
      await axios.post(URL, body, config)
      navigate("../extrato", { replace: true })
    } catch (err) {
      alert(`error: ${err.response?.data}`)
    }
  }

  return (
    <Container>
      <Logo>Nova Saída</Logo>
      <form onSubmit={cashOut}>
        <Box>
          <Valor
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
            name="valor"
            required
            placeholder="Valor"
          ></Valor>
          <Descrição
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            name="descricao"
            required
            placeholder="Descrição"
          ></Descrição>
          <Botao type="submit">Salvar saída</Botao>
        </Box>
      </form>
    </Container>
  )
}

const Container = styled.div`
`
const Logo = styled.div`
  font-family: "Raleway";
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
const Valor = styled.input`
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
const Descrição = styled.input`
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
