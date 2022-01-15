import styled from "styled-components";
import $ from 'jquery';
import { Link } from "react-router-dom";

//메인이미지
const Main = styled.img`
  position: absolute;
  top: 0px; 
  left: 0px; 
  width:100%;
  height:100%;
`;

//텍스트 출력
const Intro = styled.p`
  position: absolute;
  top: 380px; 
  left:50%;
  transform: translateX(-50%);
  font-size:80px;
  font-weight:400;
  text-align:center;
  color:white;
`;

//자세히보기 이동
const Samsung = styled.button`
  position: absolute;
  top: 580px; 
  left:50%;
  width: 152px;
  height:70px;
  padding: 10px 10px;
  font-size: 30px;
  transform: translateX(-50%);
  font-weight:500;
  text-align:center;
  color:black;
  opacity:0;
  border:1px solid grey;
  border-radius:55px;
  background:white;
  transition:0.3s;
  :hover{
    background:black;
    color:white;
    border:none;
  }
`;

//
const Name = styled.p`
position: absolute;
top: 470px; 
left:50%;
transform: translateX(-50%);
font-size: 40px;
color:white;
opacity:0;
}
`;

// windows.load 하였을경우, 실행
window.addEventListener("load",function(event) {
  aa();
},false);


//Exposure in order

var Time = 1000; //시간설정

function aa() {
  $( '.jb-1' ).animate( {
  opacity: '1'
  },Time,
  function(){ $( '.jb-1' ).animate( {
    opacity: '0'
    },Time,
    function(){ $( '.jb-2' ).animate( {
      opacity: '1'
      },Time,
        function(){ 
          $( '.jb-2' ).animate( {
          opacity: '0'
          },Time,
        function(){ 
          $( '.jb-3' ).animate( {
          opacity: '1'
          }); 
      
})})})});
  }


function App() {
  return (
    <div className="App">
      <Main src="/img/main.jpg"
      className="img" alt="img"/>

      <Intro className="jb-1" style={{opacity:"0"}}>Hello!</Intro>
      <Intro className="jb-2" style={{opacity:"0"}}>Thank you for visiting.</Intro>

      <Link to="Main"><Samsung className="jb-3">
        About me
      </Samsung></Link>
    
      <Name className="jb-3">Seongwon Kim</Name>

    </div>
  );
}

export default App;
