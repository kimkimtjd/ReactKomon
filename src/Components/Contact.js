import styled from "styled-components";
import Modal from "react-modal";
import React, {useState} from "react";
import './Modal.css';
Modal.setAppElement("#root");

//import $ from 'jquery';
//import { Link } from "react-router-dom";

//메인이미지
const Contactme = styled.ul`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:400px;
    li{
        list-style:none;
        font-size:28px;
        margin:15px;
    }
`;

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


//연락 아이콘
const Contact = styled.button`
  position: absolute;
  top: 0px; 
  left:800px;
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

const X = styled.button`
  position: absolute;
  top: 20px; 
  left:580px;
  border:none;
  background:transparent;
  font-size:32px;
  font-weight:600;
  cursor:pointer;
`;

function Contacts() {
  
    const [isOpen, setIsOpen] = useState(false);


    function toggleModal() { //Contact Modal usestate
        setIsOpen(!isOpen);
    }

return (
    <div>

    <Content>
        <Contact onClick={toggleModal}>Contact Me</Contact>
    </Content>

    {/*Contact Modal*/}
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
      
    {/*Contact */}
        <div>
            <Contactme className="Intro">
                <li>Phone:010-8075-8012</li>
                <li>E-mail: kimeende@naver.com</li>
                <li>kakao: kim1995.12.15@daum.net</li>
                <li>Line: kimeende@naver.com</li>
                <li>Instagram: s.w_kim_1215</li>
            </Contactme>
            <X onClick={toggleModal}>X</X>
        </div>
    </Modal>
    



    </div>
  );
}

export default Contacts;
