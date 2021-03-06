import styled from "styled-components";
//import React, {useState} from "react";
//import { render } from "react-dom";
import Contacts from './Components/Contact';
import Project from './Components/Project';
import Career from './Components/Career';
import Skill from './Components/Skill';
//import $ from 'jquery';


//메인이미지
const Mainimg = styled.img`
  position: absolute;
  top: 0px; 
  left: 0px; 
  width:100%;
  height:100%;
  
`;

//콘텐츠영역
const Content = styled.div`
  position: absolute;
  top: 550px; 
  left:50%;
  transform: translate(-50%,-50%);
  background-color:transparent;
  border-radius:22px;
  width:1080px;
  height:500px;
  background-color:white;
  box-shadow: 40px 40px 40px red;
  @media all and (min-width:768px) and (max-width:1024px) {
    width:700px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    width:400px;
  }
  @media all and (max-width:479px) {
    width:300px;
  }
`;


//자기소개
const Intro = styled.p`
  position: absolute;
  top: 120px; 
  left:320px;
  width:700px;
  color:black;
  font-weight:400;
  font-size:25px;
  font-weight:500;
  @media all and (min-width:768px) and (max-width:1024px) {
    position: absolute;
    top: 120px; 
    left:250px;
    width:400px;
    font-size:20px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    position: absolute;
    top: 120px; 
    left:200px;
    width:200px;
    font-size:15px;
  }
  @media all and (max-width:479px) {
    position: absolute;
    top: 120px; 
    left:150px;
    width:130px;
    font-size:12px;
  }
`;

//프로필
const Profil = styled.ul`
  position: absolute;
  top: 370px; 
  left:0px;
  width:800px;
  color:black;
  font-weight:900;
  li{
      list-style:none;
  }
  @media all and (min-width:768px) and (max-width:1024px) {
    width:700px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    position: absolute;
    top: 380px; 
    left:0px;
    width:550px;
    font-size:15px;
  }
  @media all and (max-width:479px) {
    position: absolute;
    top: 350px; 
    left:-30px;
    font-size:10px;
  }
`;

//프로필이미지
const Profilimg = styled.img`
  position: absolute;
  top: 100px; 
  left: 30px; 
  width:200px;
  height:250px;
  border-radius:50%;
  @media all and (min-width:480px) and (max-width:767px) {
    width:150px;
    height:200px
  }
  @media all and (max-width:479px) {
    position: absolute;
    top: 150px; 
    left:20px; 
    width:100px;
    height:150px
  }
`;





function Main() {


    
  return (
    <div>
   
   {/* 이미지 */}
   <Mainimg src="/img/Moon.jpg"/>

    {/* 콘텐츠영역 */}
    <Content>
        <Intro>Hello<br/>
        I'm Kim Sung Won who is studying through books and YouTube.<br/>
        I like to make and decorate something, so I became interested in development, and I am steadily developing myself.<br/>
        There's nothing to show on this site, but I tried to introduce a lot.
        Thank you : -)</Intro>
        {/* 소개 */}

        <Profilimg src="/img/김성원.jpg"/>
        <Profil>
            <li>이름: Seongwon Kim(28 years old)</li>
            <li>생년월일: 1995.12.15</li>
            <li>이메일: kimeende@naver.com</li>
            <li>연락처: 010-8075-8012</li>
        </Profil>
    </Content>

    <Contacts/>

    <Skill/>

    <Career/>

    <Project/>

    </div>
  );
}

export default Main;
