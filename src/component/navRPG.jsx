import React from 'react'
import styled from 'styled-components'
import logo from '../img/NavImg/rostro.png'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
const NavRPG = () => {
    const navigate = useNavigate()
    const sampleLocation = useLocation();
    console.log(sampleLocation.pathname)
    const goBack = () => {
        navigate('/about')
    }
    const Container = styled.nav`
    width: 100vw;
    border-top: 6px solid black;
    padding-top: 10px;
    padding-bottom: 5px;
    height: 15vh;
    background-color: #111111;
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
    const PerfilImg = styled.img`
        width: 200px;
        image-rendering: pixelated;
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
                    <PerfilImg src={logo} />
                    <h1>Hori</h1>

                </Perfil>
                <ContainerButtoms>
                    <h4>{sampleLocation.pathname.toString() === '/' ?
                        'You are at home, you can visit the other views of the page following the map or cheating if you are a dev ;)' :
                        sampleLocation.pathname.toString() === '/about' ?
                            'Its in my personal zone, my about... in it you can know more about me!' :
                            sampleLocation.pathname.toString() === '/education' ?
                                <Buttom onClick={() => goBack()}><p>Return?</p></Buttom> :
                                sampleLocation.pathname.toString() === '/projects' ?
                                    'This area is a bit extensive! but here you can not only see my projects, but I also put a few of my most precious drawings :)' :
                                    'no hayt nada'
                    }</h4>
                    {/* {
                        sampleLocation.pathname.toString() === '/education' ?
                        
                            <>
                                <Buttom onClick={() => goBack()}><p>Volver?</p></Buttom>
                            </>
                            :
                            ''
                    } */}

                </ContainerButtoms>
            </Container>

        </>
    )
}

export default NavRPG