import React from 'react';
import { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Flipper, Flipped } from 'react-flip-toolkit'

// import { spring } from 'react-flip-toolkit'

// spring({
//   config: "wobbly",
//   values: {
//     translateY: [-15, 0],
//     opacity: [0, 1]
//   },
//   // delay: i * 25,
//   onComplete: () => console.log('done')
// });

const colStyle = { flexDirection: "row" };
const rowStyle = { flexDirection: "column" };

function App() {

  // useEffect(() => {
  //   const grid = document.getElementById("grid");
  //   wrapGrid(grid);
  // }, []);
  const [viewingSection, setViewingSection] = useState(false);
  const gridRef = useRef(null);
  const toggleViewingSection = () => {
    setViewingSection(prevState => !prevState);
    gridRef.current.classList.toggle('is-viewing-section')
    
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20vh" }}>
      <div><h1>Rebecca Murray</h1></div>
      {/* <Flipper flipKey={String(viewingSection)} spring="gentle" staggerConfig={{
        default: {
          reverse: true,
          speed: 0.2,
        }
      }}> */}
        <div className="grid" ref={gridRef} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {/* <Flipped flipId="grad"> */}
            <img id="grad" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/graduation-cap.png" />
          {/* </Flipped> */}
          {/* <Flipped flipId="business"> */}
            <img id="business" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/business.png" />
          {/* </Flipped> */}
          {/* <Flipped flipId="resume"> */}
            <img id="resume" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/resume.png" />
          {/* </Flipped> */}
          {/* <Flipped flipId="github"> */}
            <img id="github" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/github.png" />
          {/* </Flipped> */}
          {/* <Flipped flipId="linkedin"> */}
            <img id="linkedin" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/linkedin.png" />
          {/* </Flipped> */}
          {/* <Flipped flipId="email"> */}
            <img id="email" onClick={toggleViewingSection} src="https://img.icons8.com/clouds/100/000000/new-post.png" />
          {/* </Flipped> */}
        </div>
      {/* // </Flipper> */}
    </div>
  );
}

export default App;
