import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../../baseURL";
import "./premade.scss";
import { MenuSvg } from "../../../assets/icon";

interface DataItem {
  propertyName: string;
  premadeList: string;
  textLimit: string;
  language: string;
  generateSummary: string;
  regenerateSummary: string;
  socialMediaCaption: string;
}

function PremadeById() {
  const { ID } = useParams<{ ID: string }>(); // Specify the type of ID
  const [data, setdata] = useState<DataItem | null>(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    baseUrl
      .get("premade/premadebyId", {
        headers: {
          premadeid: ID,
        },
      })
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [ID]);

  return (
    <div className="premadebyid">
      <div className="title">
        <MenuSvg />
        Your Premade List
      </div>
      <div className="container">
        <div className="premade-item">
          <label>
            Property Name <span>:</span>
          </label>
          <p>{data?.propertyName}</p>
        </div>
        <div className="premade-item">
          <label>
            premadeList <span>:</span>
          </label>
          <p>{data?.premadeList}</p>
        </div>
        <div className="premade-item">
          <label>
            textLimit <span>:</span>
          </label>
          <p>{data?.textLimit}</p>
        </div>
        <div className="premade-item">
          <label>
            language <span>:</span>
          </label>
          <p>{data?.language}</p>
        </div>
        <div className="premade-item">
          <label>
            generateSummary <span>:</span>
          </label>
          <p>{data?.generateSummary}</p>
        </div>
        <div className="premade-item">
          <label>
            regenerateSummary <span>:</span>
          </label>
          <p>{data?.regenerateSummary}</p>
        </div>
        <div className="premade-item">
          <label>
            socialMediaCaption <span>:</span>
          </label>
          <p>{data?.socialMediaCaption}</p>
        </div>
          <button onClick={()=>navigate(`/premade/${ID}`)}>Edit Your Premade List</button>
      </div>
    </div>
  );
}

export default PremadeById;
