import React from 'react'
import styled from 'styled-components';
import './About.css'
import { motion } from "framer-motion";
import planetIce from '../../img/Planet/IcePlanetZOOM2.png'
const Education = () => {


  const EducationContainer = styled.div`
    overflow: hidden;
  height: 85vh;
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
    `
  const ContainerIMG = styled.div`
  position: absolute;
  width: 35vw;
  height: 65vh;
  image-rendering: pixelated;
  object-fit: contain;
  z-index: 10;
  color: white;
  text-align: center;
  color:white;
  font-family: 'PF Tempesta Seven Condensed', sans-serif;
  img{
    
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    z-index: 10;
  }
`
  

  return (
      <motion.div
        initial={{ x: -1000, scale: 0 }}
        animate={{
          x: 0,
          scale: 1,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >
        <EducationContainer>


          
        </EducationContainer>
      </motion.div>
  )
}

export default Education