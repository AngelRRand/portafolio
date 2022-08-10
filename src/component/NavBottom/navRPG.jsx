import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import logo from '../../img/NavBotton/PJprueba.gif'
import logoSinCasco from '../../img/NavBotton/PJpruebaSinCasco.gif'
import nutria from '../../img/NavBotton/nutria.gif'
import nutriaSinCasco from '../../img/NavBotton/nutriaSinCasco.gif'
import './nav.css'
const NavRPG = () => {

    const navigate = useNavigate()
    const sampleLocation = useLocation();
    const goBack = () => {
        navigate('/')
    }

    const Container = styled.nav`
        width: 100vw;
        border-top: 3px solid #ffffff;
        padding-top: 10px;
        padding-bottom: 5px;
        height: 15vh;
        background-color: #070707;
        justify-content: center;
        align-items: center;
        display: flex;
        color: #ebeceb;
        font-family: 'PF Tempesta Seven', sans-serif;
        font-family: 'PF Tempesta Seven Extended', sans-serif;
        font-family: 'PF Tempesta Seven Condensed', sans-serif;
        font-family: 'PF Tempesta Seven Compressed', sans-serif;
        image-rendering: pixelated;                            
        position: fixed;
        z-index: 100;
    `
    const Perfil = styled.div`
        position: absolute;
        bottom: 5px;
        image-rendering: pixelated;
        color: white;
        text-align: center;
        padding: 5px;
        left: 0px;
    `
    const PerfilNutrie = styled.div`
        position: absolute;
        bottom: 5px;
        image-rendering: pixelated;
        color: white;
        text-align: center;
        padding: 5px;
        right: 0px;
    `
    const PerfilImg = styled.img`
        width: 20vw;
        image-rendering: pixelated;
        border: 3px solid #ffffff;
        background-color: #070707;
    `
    const ContainerButtoms = styled.div`
        flex-direction: row;
        display: flex;
        width: 50vw;
        justify-content: space-around;
        border: 1px solid white;
        padding: 5px;
        border-radius: 10px;
        
    `
    const Buttom = styled.button`
        color: #000000;
        border: none;
        padding: 10px;
        text-align: center;
        background-color: white;
        font-size: 1.2rem;
        cursor: pointer;
    `

    return (
        <>
            <Container>
                <Perfil>
                    <PerfilImg src={sampleLocation.pathname.toString() === '/About/House'? logoSinCasco: logo } />
                    <h1>Hori</h1>

                </Perfil>
                <ContainerButtoms>
                    <h4 className='animationText'>{sampleLocation.pathname.toString() === '/' ?
                        'You are at home, you can visit the other views of the page following the map or cheating if you are a dev ;)' 
                        :
                        sampleLocation.pathname.toString() === '/About' ?
                        'Its in my personal zone, my about... in it you can know more about me!' 
                        :
                        sampleLocation.pathname.toString() === '/House' ?
                        'CASA!' 
                        :
                        sampleLocation.pathname.toString() === '/Education' ?
                        'As you can see, many of the technologies are oriented towards frontend development, but I dont frown on new experiences.'
                        :
                        sampleLocation.pathname.toString() === '/Projects' ?
                        'This area is a bit extensive! but here you can not only see my projects, but I also put a few of my most precious drawings :)' :
                        'no hay nada'
                    }</h4>
                        <Buttom onClick={() => goBack()}><p>Return?</p></Buttom>
                    {/*   */}
                    {/* {
                        sampleLocation.pathname.toString() === '/education' ?
                        
                            <>
                                <Buttom onClick={() => goBack()}><p>Volver?</p></Buttom>
                            </>
                            :
                            ''
                    } */}
                </ContainerButtoms>
                <PerfilNutrie>
                    <PerfilImg src={sampleLocation.pathname.toString() === '/About/House'? nutriaSinCasco: nutria} />
                    <h1>nutria</h1>
                </PerfilNutrie>
            </Container>

        </>
    )
}

export default NavRPG