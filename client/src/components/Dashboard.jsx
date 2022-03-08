 import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getLookerEmbed } from '../getLookerEmbed';

const eurl = getLookerEmbed();

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




const Dashboard = () => {
  // const [dark, setDark] = useState();
  
  // const onDark = () => {
  //   axios.post('https://megazonepartner.cloud.looker.com/embed/dashboards/82/api/3.1?themes={"show_filters_bar":false}')
  // }


  return (
    <Container>
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
        <iframe id="looker" src={eurl} width="80%" height="80%" z-index="0" sandbox="allow-scripts"></iframe>      
      <button>다크모드</button>
      </Contents>

    </Container>
  );
};

export default Dashboard;
