import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../../baseURL";
import "./fillup.scss";
import { FillUpSVG } from "../../../assets/icon";

interface DataItem {
  propertyName: string;
  textLimit: string;
  language: string;
  projectName: string;
  location: string;
  propertyType: string;
  status: string;
  price: string;
  floorArea: string;
  bedRoomNodes: string;
  kitchenNotes: string;
  bathRoomNotes: string;
  additionalNotes: string;
  purpose: string;
  generateSummary: string;
  regenerateSummary: string;
  socialMediaCaption: string;
}

function FillUpById() {
  const { ID } = useParams<{ ID: string }>();
  const [data, setdata] = useState<DataItem | null>(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    baseUrl
      .get("fillup/fillupbyId", {
        headers: {
          fillupid: ID,
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
    <div className="fillupbyId">
      <div className="title">
        <FillUpSVG />
        Fill up quickly
      </div>
      <div className="container">
        <div className="fillup-item">
          <label>property Name</label>
          <p>{data?.propertyName}</p>
        </div>
        <div className="fillup-item">
          <label>textLimit</label>
          <p>{data?.textLimit}</p>
        </div>
        <div className="fillup-item">
          <label>language</label>
          <p>{data?.language}</p>
        </div>
        <div className="fillup-item">
          <label>projectName</label>
          <p>{data?.projectName}</p>
        </div>
        <div className="fillup-item">
          <label>location</label>
          <p>{data?.location}</p>
        </div>
        <div className="fillup-item">
          <label>propertyType</label>
          <p>{data?.propertyType}</p>
        </div>
        <div className="fillup-item">
          <label>status</label>
          <p>{data?.status}</p>
        </div>
        <div className="fillup-item">
          <label>price</label>
          <p>{data?.price}</p>
        </div>
        <div className="fillup-item">
          <label>floorArea</label>
          <p>{data?.floorArea}</p>
        </div>
        <div className="fillup-item">
          <label>bedRoomNodes</label>
          <p>{data?.bedRoomNodes}</p>
        </div>
        <div className="fillup-item">
          <label>kitchenNotes</label>
          <p>{data?.kitchenNotes}</p>
        </div>
        <div className="fillup-item">
          <label>bathRoomNotes</label>
          <p>{data?.bathRoomNotes}</p>
        </div>
        <div className="fillup-item">
          <label>additionalNotes</label>
          <p>{data?.additionalNotes}</p>
        </div>
        <div className="fillup-item">
          <label>purpose</label>
          <p>{data?.purpose}</p>
        </div>
        <div className="fillup-item">
          <label>generateSummary</label>
          <p>{data?.generateSummary}</p>
        </div>
        <div className="fillup-item">
          <label>regenerateSummary</label>
          <p>{data?.regenerateSummary}</p>
        </div>
        <div className="fillup-item">
          <label>socialMediaCaption</label>
          <p>{data?.socialMediaCaption}</p>
        </div>
        <button onClick={()=>navigate(`/fillup/${ID}`)}>Edit Fill up</button>
      </div>
    </div>
  );
}

export default FillUpById;
