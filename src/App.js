import React, {useState, useEffect} from "react";
import Frase from "./components/Frase";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  flex-direction: column;

  /* @media (min-width: 280px) and (max-width: 731px) {
    margin-top: -22rem; 
  };

  @media (min-width: 375px) and (max-width: 376px) {
    margin-top: -30rem;
  }; */
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 3px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }

`;


function App() {

  // useState que guardará la Frase y mostrará en el componente
  const [frase, guardarFrase] = useState({})

  useEffect(() =>{
    
    consultarAPI();

  }, [])

  const consultarAPI = async () => {
    
    const API = await fetch ("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await API.json()

    guardarFrase(frase[0])




  };

  return (

    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={ () => consultarAPI()} >

        Pide una Frase
      </Boton>
    </Contenedor>
    
    
  );
}

export default App;
