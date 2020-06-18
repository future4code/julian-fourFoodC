import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Nav = styled.nav`
    padding: 10px;
    background: white;
    display: flex;
    justify-content: space-around;

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0;
    margin: 0;
    position: relative;
`

export const PaginaCor = styled(motion.div)`
    background-color: ${props => props.corDaPagina};
    flex: 1;
    position: absolute;
    width:100vw;
    margin:0;
    padding:0;
    height: 100vh;
    top: 30px;
`
export const Card = styled.div`
    width: 90%;
    margin: 38px auto auto auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
`

export const Imagem = styled.img`
    width: 100%;
`

export const Nome = styled.span`
    margin: auto 12px;
    color: #e8222e;
    font-family: "Roboto";
`

export const Info = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 12px;
    font-family: "Roboto";

`

export const Topbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Input = styled.input`
    width: 80%;
    height: 56px;
`