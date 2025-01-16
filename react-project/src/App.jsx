/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './App.css';
import photo from './images/photo.jpg';
import { useEffect, useReducer } from 'react';

let user = "Toprik";

function Header({ name, year }){
  return <header>
      <h1>{name}'s Playground</h1>
      <p>Copyright {year}</p>
    </header>;
}

function Main({ skills }){
  return (
    <>
    <div>
      <h2>Welcome to my playground!</h2>
    </div>
    <main>
      <img src = {photo} height={200} alt='The developer Toprak Aktaş'/>
  <ul>
    {skills.map((techs) => (
    <li key={techs.id} style={{ listStyleType: "none"}}>{techs.title}</li>
    ))}
  </ul>
  </main>
  </>
  );
}

const technologies = [
  "Flutter with Dart",
  "Java with Selenium & Cucumber",
  "React with HTML/CSS & JS"
];

const techObjects = technologies.map((techs, i) => ({
  id: i,
  title: techs
}));

function App() {
  const [status, toggle] = useReducer(
    (status) => !status, true
  );

  useEffect(() => {
    console.log(`The system is ${status ? "up": "down"}`);
  }, [status]);
  
  return (
    <div>
      <h3>System is currently {" "} {status ? "Up" : "Down"}.</h3>
      <button onClick={toggle}>{status ? "Close" : "Up"} the System</button>
      <Header name={user} year={new Date().getFullYear()}/>
      <Main skills={techObjects} onStatus={toggle}/>
    </div>);
}

export default App
