import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
const About = () => {


  const AboutContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    `
  const ContainerIMG = styled.div`
    position: absolute;
    width: 30vw;
    height: 30vh;
    object-fit: cover;
    img{
      width:100%;
      image-rendering: pixelated;
    }
  `
  const TempladeGrid = styled.div`
    display: grid;
    width: 40vw;
    height:  40vh;
    grid-template-columns: repeat(20, 2vw);
    grid-template-rows: repeat(20, 2vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `

  return (
    <AboutContainer>



      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">
          <h3>About</h3>

            <ContainerIMG>
              <img src={planet} alt="" />
            </ContainerIMG>
            <TempladeGrid>

            </TempladeGrid>

        </div>
      </motion.div>


      <motion.div
        initial={{ y: 1000 }}
        animate={{
          y: 0,
          transition: { duration: 2.5, type: "spring" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

      </motion.div>
    </AboutContainer>
  )
}

export default About