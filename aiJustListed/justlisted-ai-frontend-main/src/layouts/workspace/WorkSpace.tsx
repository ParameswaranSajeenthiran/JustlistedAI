import React, { useEffect } from "react";
import "./workspace.scss";
import WorkSideBar from "../../components/navbar/WorkSideBar";
import { Outlet } from "react-router-dom";
import carRealEstate from "../../assets/workspace/carRealEstate.png";
import fill from "../../assets/workspace/fillUp.png";
import premade from "../../assets/workspace/premade.png";
import login from "../../assets/login.png"
import { useLocation } from "react-router-dom";
function WorkSpace() {
  const location = useLocation();

  const [backgronnd,setBackgronnd] = React.useState(carRealEstate)
  useEffect(() => {

    console.log(location.pathname ,"patth",location.pathname.split("/")[1] )
    if(location.pathname === '/welcome'){
      setBackgronnd(carRealEstate)
    }else if(location.pathname === '/fillup'){
      setBackgronnd(fill)
    }else if(location.pathname === '/premade'){
      setBackgronnd(premade)
    }else if(location.pathname.split("/")[1] === 'ownWord'){
      setBackgronnd(login)
    }
  },[location])
  return (
    <div className="workspace">

      <div className="workspaceMainBody"  style={{backgroundImage: `url(${backgronnd})` ,width:'100%',height:1500 ,backgroundSize:'cover'}}>
        <div className="sidebar">
          <WorkSideBar />
        </div>
        <div className="workspacecontainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
