import React from 'react';
import logo from './logo.svg';
import './App.css';

// iconStyle = {
//   &:hover: {
//       transform: translateX(5px);
//   }
// }

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20vh" }}>
      <div><h1>Rebecca Murray</h1></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img src="https://img.icons8.com/clouds/100/000000/graduation-cap.png" />
          <img src="https://img.icons8.com/clouds/100/000000/business.png" />
          <img src="https://img.icons8.com/clouds/100/000000/resume.png" />
        </div>
        <div>
          <img src="https://img.icons8.com/clouds/100/000000/github.png" />
          <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" />
          <img src="https://img.icons8.com/clouds/100/000000/new-post.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
