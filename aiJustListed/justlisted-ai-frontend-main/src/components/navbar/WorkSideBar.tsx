import React, { useEffect, useState } from "react";
import { CloseSvg, HumberIconSvg, NewProjectSvg } from "../../assets/icon";
import baseUrl from "../../baseURL";
import WorkSpaceList from "./WorkSpaceList";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
interface DataItem {
  propertyName: string;
  // Add more properties here as needed
}
function WorkSideBar() {
  const sideBarActive = useSelector(
    (state: RootState) => state.loader.sideBarActive
  );

  const navigate = useNavigate();
  const [data, setdata] = useState<DataItem[]>([]);
  const [openPop, setopenPop] = useState(false);
  const [navActive, setnavActive] = useState(false);
  const [close, setclose] = useState(false);
  const [openFull, setopenFull] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/welcome") {
      setnavActive(true);
      setopenPop(false);
    } else {
      setnavActive(false);
    }
  }, [location]);

  useEffect(() => {
    baseUrl
      .get("usermade/findall")
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [sideBarActive]);

  return (
    <div className={`${close ? "" : "containerclose"} workSidebar`}>
      <div className="container">
        <div style={{backgroundColor:"#BFFC00"}} className={`${close ? "" : "headerclose"} header`}>
          <div className={`${close ? "" : "titleclose"} title`} onClick={() => navigate("/welcome")}>
            <NewProjectSvg  />
            NEW PROJECT
          </div>
          <HumberIconSvg
            onClick={() => setclose(!close)}
            className={`${close ? "humberractive" : ""}`}
          />
          <CloseSvg
            onClick={() => setclose(!close)}
            className={`${close ? "" : "close"} ${navActive ? "" : "d-none-m"} closesvg`}
          />
        </div>
        <div className={`listcontainer ${!openPop ? "" : "titleclose"}  ${navActive ? "" : "d-none-m"}`}>
          <ul className={` ${openFull ? "" : "h100"}`}>
            {data?.map((item, i) => (
              <WorkSpaceList
                setopenPop={setopenPop}
                openPop={openPop}
                key={i}
                item={item}
              />
            ))}
          </ul>
          <span className="activeli" onClick={() => setopenFull(!openFull)}>
            See All
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkSideBar;
