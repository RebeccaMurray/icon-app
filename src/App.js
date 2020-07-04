import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const imgStyle = {
  transition: "transform 330ms ease-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px)",
  }
}


function App() {

  var [isGridLayout, setisGridLayout] = useState(true);
  const toggleIsGridLayout = () => setisGridLayout(!isGridLayout);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20vh" }}>
      <div><h1>Rebecca Murray</h1></div>
        <div>
          <img 
            onClick={toggleIsGridLayout} 
            src="https://img.icons8.com/clouds/100/000000/graduation-cap.png" 
            style={isGridLayout ? {transform: "translateX(150%)"} : {}}
          />
          <a href="https://github.com/RebeccaMurray" target="_blank">
          <img 
            src="https://img.icons8.com/clouds/100/000000/github.png" 
            style={isGridLayout ? {transform: "translateY(100%) translateX(50%)"} : {}}
          />
          </a>
          <img 
            onClick={toggleIsGridLayout} 
            src="https://img.icons8.com/clouds/100/000000/business.png"
            style={isGridLayout ? {transform: "translateX(50%)"} : {}}
           />
          <a href="https://www.linkedin.com/in/rebeccamichellemurray/" target="_blank">
          <img 
            style={isGridLayout ? {transform: "translateY(100%) translateX(-50%)"} : {}}
            src="https://img.icons8.com/clouds/100/000000/linkedin.png" 
          />
          </a>
          <img 
            onClick={toggleIsGridLayout} 
            src="https://img.icons8.com/clouds/100/000000/resume.png" 
            style={isGridLayout ? {transform: "translateX(-50%)"} : {}}
          />
          
          <img 
            onClick={toggleIsGridLayout} 
            src="https://img.icons8.com/clouds/100/000000/new-post.png"
            style={isGridLayout ? {transform: "translateY(100%) translateX(-150%)"} : {}}
          />
        </div>
    </div>
  );
}

export default App;
