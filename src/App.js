import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import { wrapGrid } from 'animate-css-grid'


function App() {

  const [viewingSection, setViewingSection] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    wrapGrid(gridRef.current);
  }, []);
  
  const toggleViewingSection = () => {
    setViewingSection(prevState => !prevState);
    gridRef.current.classList.toggle('is-viewing-section');
    
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20vh" }}>
      <div><h1>Rebecca Murray</h1></div>
        <div className="grid" ref={gridRef} >
            <div id="blank-left" style={{backgroundColor: "blue"}}></div>
            <img id="grad" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/graduation-cap.png" />

            <img id="business" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/business.png" />
            <img id="resume" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/resume.png" />
            <img id="github" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/github.png" />
            <img id="linkedin" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/linkedin.png" />
            <img id="email" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/new-post.png" />
            {/* <div id="blank-right" style={{backgroundColor: "green"}}></div> */}
        </div>
    </div>
  );
}

export default App;
