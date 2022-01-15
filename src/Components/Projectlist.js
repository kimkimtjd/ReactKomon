import styled from "styled-components";




//메인이미지
const Mainimg = styled.img`
  position: relative;
  top: 0px; 
  left: 0px; 
  width:350px;
  height:230px;
  border-radius:22px;
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
`;

//PROJECTNAME
const Po = styled.p`
  position: relative;
  top: -400px; 
  left: 360px; 
  width:420px;
  height:130px;
  font-size:20px;
  font-weight:500;
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
`;

function Project({project}){
    return (
        <div style={{border:"1px solid black",height:"230px", borderRadius:"22px", marginBottom:"22px",top:"50px", position:"relative"}}>
             <Mainimg src={project.img}/>
             <Hone>{project.projectname}</Hone>
             <Po>Period: {project.Period}</Po>
             <Honen>Skill: {project.stack}</Honen>
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
            stack: ' Html,Css,JS,Vue,Jquery,fetch api,Djagno,MY SQL,Heidi SQL',
        },
        {
            id: 4,
            img:'/Projects/Black.PNG',
            projectname: 'Market B Black Friday special exhibition.',
            Period:'3Day',
            stack: ' Html,Css,JS,Vue,Jquery,fetch api,Djagno,MY SQL,Heidi SQL',
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
            stack: ' MY-SQL[AWS-RDS], Sequel Pro,React js, Node js,T Map,kakao Map api',
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