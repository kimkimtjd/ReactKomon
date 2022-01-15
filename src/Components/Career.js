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



//커리어 아이콘
const Career = styled.button`
  position: absolute;
  top: 0px; 
  left:400px;
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

//Let's system
const Lets = styled.div`
  position: absolute;
  top:0px; 
  left:30px;
  width:200px;
  text-align:center;
  font-size:28px;
`;

//Let's system
const Market = styled.div`
  position: absolute;
  top:0px; 
  left:330px;
  width:200px;
  text-align:center;
  font-size:28px;
`;

//Let's system
const Zip = styled.div`
  position: absolute;
  top:0px; 
  left:630px;
  width:200px;
  text-align:center;
  font-size:28px;
`;

//Front Language
const Frontp = styled.p`
  position: absolute;
  top:85px; 
  left:0px;
  width:260px;
  text-align:left;
  font-size:20px;
`;

const X = styled.button`
  position: absolute;
  top: 20px; 
  left:880px;
  border:none;
  background:transparent;
  font-size:32px;
  font-weight:600;
  cursor:pointer;
`;

function Skill() {
  
    const [isOpen, setIsOpen] = useState(false);


    function careermodal() { //Contact Modal usestate
        setIsOpen(!isOpen);
    }

return (
    <div>

    <Content>
        <Career  onClick={careermodal}>Career</Career>
    </Content>

    {/*Contact Modal*/}
    <Modal
        isOpen={isOpen}
        onRequestClose={careermodal}
        contentLabel="My dialog"
        className="careermodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
      
    {/*Contact */}
        <div>
            <Lets className="Front">
                <p>Let's System<br/> [2019.07~2019.12]</p>
                <Frontp>
                    He was in charge of controlling the exposure machine, one of the semiconductor manufacturing equipment, and conducted tests on driving and sensors. <br/>
                    For the first time, we started development work, and we were able to improve our understanding of hardware by conducting Set-Up directly at the Gunpo plant.
                </Frontp>
            </Lets>

            <Market className="Front">
                <p>MarketB<br/>[2019.12~2021.11]</p>
                <Frontp>
                    We managed the entire company's internal funds and attendance, which allowed us to increase our knowledge of other fields besides development.<br/>                    
                    Since the full stack developer left the company, he has been working on various site UI, UX modification, planning exhibition, and DB management instead, and is trying to develop further through self-development.
        
                </Frontp>
            </Market>

            <Zip className="Front">
                <p>Zipdaejang<br/>[2021.12~2022.1]</p>
                <Frontp>
                Because I wanted to try a new challenge, I joined a startup company called Zipdaejang, and after joining the company, I was able to develop cooperation by working together from the planning stage.<br/>                    
                I was able to gain more knowledge about development by managing from the beginning of Front-End to Back-End and DB.  
                </Frontp>
            </Zip>

            <X onClick={careermodal}>X</X>
        </div>
    </Modal>
    



    </div>
  );
}

export default Skill;
