 import { useState } from "react";
import styled from "styled-components"; 
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

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

const Looker = styled.iframe`
      border-style: solid;
      border-width: 10px;
      position: relative;
      width: 100%;
      height: 100%;
      `




const Dashboard = () => {
  let screen = ["https://megazonepartner.cloud.looker.com/embed/dashboards/82",
  "https://megazonepartner.cloud.looker.com/embed/dashboards/73?Date%20Formatted=2017%2F07%2F01%20to%202017%2F07%2F10&Geo%20Network%20Country=&Geo%20Network%20Region=&Traffic%20Source=&Device%20Operating%20System=&Device%20Browser=",
  "https://megazonepartner.cloud.looker.com/embed/dashboards-legacy/2?Brand%20Name=Calvin%20Klein&Date=90%20days&filter_config=%7B%22Brand%20Name%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22Calvin%20Klein%22%7D,%7B%7D%5D,%22id%22:4%7D%5D,%22Date%22:%5B%7B%22type%22:%22past%22,%22values%22:%5B%7B%22constant%22:%2290%22,%22unit%22:%22day%22%7D,%7B%7D%5D,%22id%22:5%7D%5D%7D"
  ];


  let [screenNum, setScreenNum] = useState(0);
 
  
  return (
    <Container>
        <Menu> 
          <MenuItem onClick={()=>{setScreenNum(0)}}><SLink to="/">루커트레인</SLink></MenuItem>
          <MenuItem onClick={()=>{setScreenNum(1)}}><SLink to="/">루커데모</SLink></MenuItem>
          <MenuItem onClick={()=>{setScreenNum(2)}}><SLink to="/">BA, W&T</SLink></MenuItem>
        </Menu>
        
      <Contents>
       

        {/* <iframe src="https://megazonepartner.cloud.looker.com/embed/dashboards/82" width="100%" height="100%" frameborder="0" z-index="0" allow_login_screen='true'></iframe> */}
        <iframe src={screen[screenNum]} width="100%" height="100%" 
        frameborder="0" z-index="0" allow_login_screen='true'></iframe>
      

      </Contents>

    </Container>
  );
};

export default Dashboard;
