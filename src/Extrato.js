import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Extrato() {
    return (
        <>
            <Container>
                <Logo>Olá, Fulano</Logo>
                <Icon>
                    <ion-icon name="exit-outline"></ion-icon>
                </Icon>
            </Container>
            <Box><p>Não há registros de entrada ou saída</p></Box>
            <Boxsizing>
                <Botao>
                    <Icons>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Icons>
                    <p> Nova entrada</p>
                </Botao>
                <Botao>
                    <Icons>
                     <ion-icon name="remove-circle-outline"></ion-icon>
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
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

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