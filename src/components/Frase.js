import styled from "@emotion/styled";

const Contenedor = styled.div`
    padding: 3rem;
    border-radius: 0% .5rem;
    background-color: white;
    max-width: 800px;

    /* @media (min-width: 414px) and (max-width: 415px) {
        margin-top: -5rem;
    }; */

    @media (min-width: 992px) {
        margin-top: 5rem;
    }

    h2 { 
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top:-2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;



const Frase = ({frase}) => {
    return ( 

        
        <Contenedor>
            <h2>{frase.quote}</h2>
            <p>-{frase.author}-</p>
        </Contenedor>

    );
}
 
export default Frase;