 import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getLookerEmbed } from '../getLookerEmbed';

const eurl = getLookerEmbed();
const url = 'https://megazonepartner.cloud.looker.com/embed/dashboards/82';
const Container = styled.div`
  width: 100%; 
  height: 80vh;
  display: flex;
  position: relative;  
  ${mobile({ display: "none" })}
`;

const Contents = styled.div`
width: 100%; 
height: 100%;
margin-top: 10px;
background-color: rgb(184,184,184);
`;

const Menu = styled.ul`
width: 10%; 
height: 100%; 
list-style: none; 
padding-left: 0px;
padding-top: 1%;
`; 

const MenuItem = styled.li`
margin-top: 20px;
font-size: 20px;
text-align: center; 
`; 
 
const SLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: none;
        color: rgb(124,124,124);
    }
`;

const Frame1 = styled.div`
  margin-left: 5%;
  position: relative;
  width: 80%;
  height: 80%;
`



const Dashboard = () => {
  const a = document.getElementsByClassName("Footer-sc-1ief1vb-0 dWJJOy");
  function deleteE() {
    a.remove();
  }


  return (
    <Container position='relative'>
        <Menu> 
          <MenuItem><SLink to="/">메뉴 1</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 2</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 3</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 4</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 5</SLink></MenuItem>
        </Menu>
        
      <Contents>
      <div>memo :</div> 
      <div>
        src, db링크 바꿀것, db적재
      </div>
      <Frame1 id='frame1'>
        <iframe id="looker"
                src="https://megazonepartner.cloud.looker.com/embed/dashboards/82"
                width="100%"
                height="100%"
                z-index="0" 
                sandbox= "allow-scripts allow-same-origin"
                allowFullScreen
                ></iframe>      </Frame1>
      <button onClick={deleteE}>다크모드</button>
      </Contents>

    </Container>
  );
};

export default Dashboard;
