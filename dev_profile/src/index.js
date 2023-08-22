import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

function App(){
  return(
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return (<img className="avatar" src="name.jpg" alt="" />);
}

function Intro(){
  return (
    <div>
      <h1>Name</h1>
      <p>
        line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3 line 1 line 2 lien 3
      </p>
    </div>
  );
}

function SkillList(){
  return (
    <div>
      <Skill skill="React" color="#FFFFFF" />
      <Skill skill="HTML" color="#00FFFF"/>
      <Skill skill="C#" color="#0000FF"/>
    </div>
  );
}

function Skill(props){
  return (
    <div style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
