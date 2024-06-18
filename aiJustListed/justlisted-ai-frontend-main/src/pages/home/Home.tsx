import React from "react";
import Slide from "./components/Slide";
import Finddream from "./components/Finddream";
import About from "./components/About";
import Connecting from "./components/Connecting";
import Howwork from "./components/Howwork";
import Agents from "./components/Agents";
import KeyFeature from "./components/KeyFeature";
import fast from "../../assets/home/fast.png";
import dynamic from "../../assets/home/dynamic.png";
import busy from "../../assets/home/busy.png";
import frame3 from "../../assets/home/frame3.png";
import frame67 from "../../assets/home/frame67.png";
import group32 from "../../assets/home/group32.png";
import keyfeature from "../../assets/home/keyFeatures.png";
function Home() {
  return (
    <div className="home">
      <Slide />
      <div style={{ background: '#BFFC00', height: 100, padding: 30 }}>
        <div style={{ marginLeft: 300 }}>
          <img style={{ marginRight: 600 }} src={fast} alt="" />
        </div>
      </div>

      <div style={{ background: '#000', height: 400, padding: 30, paddingTop: 100 }}>
        <div style={{ marginLeft: 300 }}>
          <img style={{ marginRight: 600 }} src={dynamic} alt="" />
        </div>
      </div>

      <div style={{
        backgroundImage: `url(${busy})`, backgroundSize: "cover",
        height: 600, padding: 30, paddingTop: 100
      }}>
        <div style={{ marginLeft: 300 }}>
        </div>
      </div>

      <div style={{ background: '#BFFC00', height: 100, padding: 30 }}>
        
        
      </div>

      <div style={{
        backgroundImage: `url(${frame3})`, backgroundSize: "cover",
        height: 1200, paddingTop: 100, marginLeft: -100
      }}>

      </div>

      <div style={{
         width: '100%',
         padding: 100, marginLeft: 0
      }}>
         <div >
          <img width='100%' src={frame67} alt="" />
        </div>

      </div>



      {/* <Finddream /> */}
      {/* <About /> */}
      <KeyFeature />
      <div style={{ background: '#BFFC00', height: 200, padding: 10 }}>
        <div style={{ marginLeft: 300 }}>
          <img style={{ marginRight: 600 }} src={keyfeature} alt="" />
        </div>
      </div>
      <div style={{
         width: '100%',
        marginLeft: 0,
      }}>
         <div >
          <img width='100%' src={group32} alt="" />
        </div>

      </div>

      {/* <Connecting /> */}
      {/* <Howwork /> */}
      <Agents />
    </div>
  );
}

export default Home;
