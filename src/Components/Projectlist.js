import styled from "styled-components";




//메인이미지
const Mainimg = styled.img`
  position: relative;
  top: 0px; 
  left: 0px; 
  width:350px;
  height:230px;
  border-radius:22px;
  @media all and (min-width:768px) and (max-width:1024px) {
    width:250px;
    height:200px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    width:230px;
    height:150px;
    }
  @media all and (max-width:479px) {
    width:200px;
    height:150px;
  }
  
`;

//PROJECTNAME
const Hone = styled.h1`
  position: relative;
  top: -250px; 
  left: 360px; 
  width:420px;
  height:230px;
  font-size:30px;
  font-weight:500;
  @media all and (min-width:768px) and (max-width:1024px) {
    position: relative;
    top: -200px; 
    left: 270px; 
    width:400px;
    height:200px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    position: relative;
    top: -10px; 
    left:30px; 
    width:360px;
    height:200px;
    font-size:23px;
  }
  @media all and (max-width:479px) {
    position: relative;
    top: -10px; 
    left:0px; 
    width:202.3px;
    height:200px;
    font-size:15px;
  }
`;

//period
const Po = styled.p`
  position: relative;
  top: -400px; 
  left: 360px; 
  width:420px;
  height:130px;
  font-size:20px;
  font-weight:500;
  @media all and (min-width:768px) and (max-width:1024px) {
    position: relative;
    top: -310px; 
    left: 270px; 
    width:400px;
    height:200px;
  }
  @media all and (min-width:480px) and (max-width:767px) {
    position: relative;
    top: -380px; 
    left: 235px; 
    width:200px;
    height:200px;
  }
  @media all and (max-width:479px) {
    position: relative;
    top: -155px; 
    left: 0px; 
    width:200px;
    height:200px;
    font-size:13px;
  }
`;

//stack
const Honen = styled.h2`
  position: relative;
  top: -520px; 
  left: 360px; 
  width:422px;
  height:130px;
  font-size:20px;
  font-weight:500;
  @media all and (min-width:768px) and (max-width:1024px) {
    position: relative;
    top: -500px; 
    left: 270px; 
    width:400px;
    height:200px;
  }
  @media all and  (min-width:480px) and (max-width:767px) {
    position: relative;
    top: -570px; 
    left: 240px; 
    width:140px;
    height:400px;
    font-size:15px;
  }
  @media all and (max-width:479px) {
    position: relative;
    top: -400px; 
    left: 0px; 
    width:210px;
    height:200px;
    font-size:13px;
  }
`;

function Project({project}){
    return (
        <div style={{height:"230px", borderRadius:"22px", marginBottom:"22px",top:"50px", position:"relative"}}>
             <Mainimg src={project.img}/>
             <Hone>{project.projectname}</Hone>
             <Po>Period: {project.Period}</Po>
             <Honen>{project.stack}</Honen>
        </div>
 
    )
}
 
function ProjectList() {
    const projects =[
        {
            id:1,
            img:'/Projects/Lets.PNG',
            projectname: 'Exposure machine setup.',
            Period:'2Month',
            stack: 'C#, MY-SQL',
        },
        {
            id:2,
            img:'/Projects/MKB_Fall.PNG',
            projectname: 'Market B Autumn  Exhibition',
            Period:'3Day',
            stack: ' Html,Css,JS,Vue,Jquery, Vue',
        },
        {
            id:3,
            img:'/Projects/wedding.PNG',
            projectname: 'Market B Wedding Exhibition',
            Period:'3Day',
            stack: ' Html,Css,JS,Vue,Jquery,Djagno,MY SQL,Heidi SQL',
        },
        {
            id: 4,
            img:'/Projects/Black.PNG',
            projectname: 'Market B Black Friday special exhibition.',
            Period:'3Day',
            stack: ' Html,Css,JS,Vue,Jquery,Djagno,MY SQL,Heidi SQL',
        },
        {
            id: 5,
            img:'/Projects/store.PNG',
            Period:'3Day',
            projectname: 'Market B agency information page',
            stack: ' HTML,CSS,JS,Jquery,Vue js',
        },
        {
            id: 6,
            img:'/Projects/docker.PNG',
            Period:'2Month',
            projectname: 'Manage DB using Docker and Django',
            stack: ' Python,Django,Docker, Google Triger',
        },
        {
            id: 7,
            img:'/Projects/zip.PNG',
            Period:'1Month',
            projectname: 'Implementation a Zipdaejang Mobile App,Website.',
            stack: ' MY-SQL, Sequel Pro,React js, Node js,T Map,kakao Map api',
        },
    ];
 
    return (
        <div>
          {
              projects.map(
                project => (<Project project={project}  key={project.id}/>)
              )
          }
        </div>
    )
}
 
export default ProjectList;