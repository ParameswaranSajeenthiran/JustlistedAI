import React, { useState, useEffect } from "react";

import "./ownword.scss";
import { AddSVG, CrownSVG, RefreshSVG } from "../../../assets/icon";
import YourOwnWord from "./components/YourOwnWord";
import Regenerated from "./components/Regenerated";
import SmCaption from "./components/SmCaption";
import HappyMsg from "./components/HappyMsg";
import baseUrl from "../../../baseURL";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPreMade } from "../../../redux/actions/premadeAction";
import { useNavigate, useParams } from "react-router-dom";
import {
  setSidebarAction,
  setloadeActive,
  setloadeDeactive,
} from "../../../redux/actions/loaderActions";
function OwnWord() {
  const premade = useSelector((state: RootState) => state.premade);
  const { ID } = useParams();
  const dispatch = useDispatch();
  const [action, setaction] = useState({
    smCaption: false,
    regenerated: false,
  });
  useEffect(() => {
    dispatch(setSidebarAction("true"));
  }, []);


  const createCaption = () => {
    dispatch(setloadeActive());

    baseUrl
      .patch(
        premade.premade ? "premade/caption" : "fillup/caption",
        {
          regenerate: action.regenerated,
        },
        {
          headers: {
            [premade.premade ? "premadeid" : "fillupid"]: ID,
          },
        }
      )
      .then((response) => {
        dispatch(setPreMade("socialMediaCaption", response.data.caption));
        setaction({ ...action, smCaption: true });
        dispatch(setloadeDeactive());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const regenerateWords = () => {
    dispatch(setloadeActive());

    baseUrl
      .patch(
        premade.premade
          ? "premade/premade-regenerate-summary"
          : "fillup/fillup-regenerate-summary",
        {},
        {
          headers: {
            [premade.premade ? "premadeid" : "fillupid"]: ID,
          },
        }
      )
      .then((response) => {
        setaction({ ...action, regenerated: true });
        dispatch(
          setPreMade("regenerateSummary", response.data.regenerateSummary)
        );
        dispatch(setloadeDeactive());
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="ownword">
      <div className="container">
        <div className="title">
          <CrownSVG />
          Here your own words
        </div>
        <YourOwnWord generated={premade.generateSummary} />
        {!action.smCaption && !action.regenerated && <HappyMsg />}
        {action.regenerated && (
          <Regenerated contant={premade.regenerateSummary} />
        )}
        {action.smCaption && <SmCaption caption={premade.socialMediaCaption} />}
        {action.regenerated && !action.smCaption && (
          <div className="socialbutton">
            <button onClick={() => createCaption()}>
              <AddSVG />
              Create Matching Social Media Caption
            </button>
          </div>
        )}
        {!action.smCaption && !action.regenerated && (
          <div className="ownButton">
            <button onClick={() => createCaption()}>
              <AddSVG />
              Yes...Create Matching Social Media Caption
            </button>
            <button onClick={() => regenerateWords()}>
              <RefreshSVG />
              Hmm...Not Quite Right. Generate Again!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OwnWord;
