import styled from "styled-components";
import Modal from "react-modal";
import React, {useState} from "react";
import './Modal.css';
import UserList from "./Projectlist"
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

//프로젝트 아이콘
const ProjectS = styled.button`
  position: absolute;
  top: 0px; 
  left:200px;
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
  @media all and (min-width:768px) and (max-width:1024px) {
    position: absolute;
    top: 0px; 
    left:230px;
    font-size:30px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    position: absolute;
    top: 0px; 
    left:350px;
    font-size:20px;
  }
  @media all and (max-width:479px) {
    position: absolute;
    top: 0px; 
    left:400px;
    font-size:15px;
}

`;


const X = styled.button`
  position: absolute;
  top: 20px; 
  left:760px;
  border:none;
  background:transparent;
  font-size:32px;
  font-weight:600;
  cursor:pointer;
  @media all and (min-width:768px) and (max-width:1024px) {
    position: absolute;
    top: 0px; 
    left:680px;
  }
   @media all and (min-width:480px) and (max-width:767px) {
    position: absolute;
    top: 20px; 
    left:380px;
  }
  @media all and (max-width:479px) {
    position: absolute;
    top: 20px; 
    left:200px;
    font-size:22px;
    }
`;

function Project() {
  
    const [isOpen, setIsOpen] = useState(false);


    function projectmodal() { //Contact Modal usestate
        setIsOpen(!isOpen);
    }

return (
    <div>

    <Content>
        <ProjectS onClick={projectmodal}>Projects</ProjectS>
    </Content>

    {/*Contact Modal*/}
    <Modal
        isOpen={isOpen}
        onRequestClose={projectmodal}
        contentLabel="My dialog"
        className="projectmodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
      
    {/*Contact */}
        <div>

          <UserList/>

            <X onClick={projectmodal}>X</X>
        </div>
    </Modal>
    



    </div>
  );
}

export default Project;
