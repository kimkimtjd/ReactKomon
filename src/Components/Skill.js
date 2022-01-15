import styled from "styled-components";
import Modal from "react-modal";
import React, {useState} from "react";
import './Modal.css';
Modal.setAppElement("#root");

//import $ from 'jquery';
//import { Link } from "react-router-dom";



//콘텐츠영역
const Content = styled.div`
  position: absolute;
  top: 350px; 
  left:50%;
  transform: translate(-50%,-50%);
  background-color:transparent;
  border-radius:22px;
  width:1080px;
  background-color:white;
  box-shadow: 40px 40px 40px red;
`;


//스킬 아이콘
const Skills = styled.button`
  position: absolute;
  top: 0px; 
  left:600px;
  color:black;
  font-weight:900;
  font-size:40px;
  transition:0.3s;
  border:none;
  background-color:transparent;
  :hover{
    position: absolute;
    top: -20px; 
  }
`;

//Front
const Front = styled.div`
  position: absolute;
  top:20px; 
  left:50px;
  width:200px;
  font-size:28px;
`;

//Front Language
const Frontp = styled.p`
  position: absolute;
  top:65px; 
  left:-20px;
  font-size:20px;
`;

//Back
const Back = styled.div`
  position: absolute;
  top:20px; 
  left:330px;
  width:200px;
  font-size:28px;
`;

//DateBase
const DateBase = styled.div`
  position: absolute;
  top:190px; 
  left:330px;
  width:200px;
  font-size:28px;
`;

//Etc
const Etc = styled.div`
  position: absolute;
  top:110px; 
  left:600px;
  width:200px;
  font-size:28px;
`;

const X = styled.button`
  position: absolute;
  top: 20px; 
  left:780px;
  border:none;
  background:transparent;
  font-size:32px;
  font-weight:600;
  cursor:pointer;
`;

function Skill() {
  
    const [isOpen, setIsOpen] = useState(false);


    function skillmodal() { //Contact Modal usestate
        setIsOpen(!isOpen);
    }

return (
    <div>

    <Content>
        <Skills onClick={skillmodal}>Skill</Skills>
    </Content>

    {/*Contact Modal*/}
    <Modal
        isOpen={isOpen}
        onRequestClose={skillmodal}
        contentLabel="My dialog"
        className="skillmodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
      
    {/*Contact */}
        <div>
           
                <Front className="Front">
                    <p>Front-End</p>
                    <Frontp>HTML , CSS , JS , jQuery
                    React js , Redux, Vue js
                    styled-componenets , swiper js, AOS.js , 
                    Fullpage js, slack js, Bootstrap , kakao Open api, 
                    Naver Open api, Tmap api , Google Trigger</Frontp>
                </Front>

                <Back className="Front">
                    <p>Back-End</p>
                    <Frontp>Python , Django , selenium
                    openpyxyl , docker , node js , express
                    </Frontp>
                </Back>

                <DateBase className="Front">
                    <p>DateBase</p>
                    <Frontp>MySQL , Maria DB, Heidi SQL , Sequel Pro
                    </Frontp>
                </DateBase>

                <Etc className="Front">
                    <p>Etc</p>
                    <Frontp>AWS EC2, AWS RDS , Figma GitHub , Cafe 24, Slack
                    </Frontp>
                </Etc>

            <X onClick={skillmodal}>X</X>
        </div>
    </Modal>
    



    </div>
  );
}

export default Skill;
