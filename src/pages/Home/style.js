import styled from 'styled-components'
import {motion} from 'framer-motion'

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