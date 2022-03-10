 import { useState, useRef, useEffect } from "react";
import styled from "styled-components"; 
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import styles from "../components/dashboardStyle.css";
// import logo from "img/mzcWideLogo.png"

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
background-color: rgb(234,234,234);
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
`;

const Img = styled.img.attrs({
  src: "img/mzcWideLogo.png"
})`
  max-width: 200px;
`;

const Footer = styled.div`
width: 100%;  
background-color: rgb(194,194,194);
`;

const Dashboard = () => {
  let screen = ["https://megazonepartner.cloud.looker.com/embed/dashboards/82", 
  "https://megazonepartner.cloud.looker.com/embed/dashboards/73?Date%20Formatted=2017%2F07%2F01%20to%202017%2F07%2F10&Geo%20Network%20Country=&Geo%20Network%20Region=&Traffic%20Source=&Device%20Operating%20System=&Device%20Browser=", 
  "https://megazonepartner.cloud.looker.com/embed/dashboards/94" ];

  let [screenNum, setScreenNum] = useState(0);

  // const remove2 = useRef();
   

  // var iframe = document.querySelector("footer");
  // let footer = iframe.contentDocument.querySelector("footer");
  // footer.remove(); 

  return (
    <Container>
        <Menu> 
          <MenuItem onClick={()=>{setScreenNum(0)}}><SLink to="/">루커트레인</SLink></MenuItem>
          <MenuItem onClick={()=>{setScreenNum(1)}}><SLink to="/">루커데모</SLink></MenuItem>
          <MenuItem onClick={()=>{setScreenNum(2)}}><SLink to="/">리테일</SLink></MenuItem>
        </Menu>
        
      <Contents> 
        {/* <Img /> */}
        <iframe src={screen[screenNum]} width="100%" height="100%" 
        frameBorder="0" z-index="0" allow_login_screen="true" ></iframe>
       
        <Footer><Img /> </Footer>

      </Contents>

    </Container>
  );
};

export default Dashboard;
