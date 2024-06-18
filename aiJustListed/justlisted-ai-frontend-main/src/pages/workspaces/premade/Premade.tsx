import React, { useEffect, useState } from "react";
import "./premade.scss";
import { GenerateSVG, MenuSvg } from "../../../assets/icon";
import InputText from "../../../components/input/InputText";
import PremadeDrop from "../../../components/input/PremadeDrop";
import InputTextArea from "../../../components/input/InputTextArea";
import InputWithCount from "../../../components/input/InputWithCount";
import baseUrl from "../../../baseURL";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPreMade } from "../../../redux/actions/premadeAction";
import { LANGUAGES } from "../../../utils/dropItem/dropItems";
import { setloadeActive, setloadeDeactive } from "../../../redux/actions/loaderActions";
import { toast } from "react-toastify";

function Premade() {
  const { ID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    propertyName: "",
    premadeList: "",
    textLimit: "",
    language: "english",
  });
  useEffect(() => {
    if (ID) {
      dispatch(setloadeActive());

      baseUrl
        .get("premade/premadebyId", {
          headers: {
            premadeid: ID,
          },
        })
        .then((response) => {
          let item = response.data.data;
          setformData({
            propertyName: item?.propertyName,
            premadeList: item?.premadeList,
            textLimit: item?.textLimit,
            language: item?.language,
          });
          dispatch(setPreMade("propertyName", item?.propertyName));
          dispatch(setPreMade("premadeList", item?.premadeList));
          dispatch(setPreMade("textLimit", item?.textLimit));
          dispatch(setPreMade("language", item?.language));
          dispatch(setloadeDeactive())

        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [ID]);
  const handleChange = (e: any) => {
    let { value, name } = e.target;
    dispatch(setPreMade(name, value));
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setPreMade("premade", true));
    dispatch(setloadeActive())

    if (ID) {
      baseUrl
        .put("premade/premade-summary-update", formData,{
          headers:{
            premadeid:ID
          }
        })
        .then((response) => {
          dispatch(setPreMade("generateSummary", response.data.summary));
          dispatch(setloadeDeactive())
          navigate(`/ownWord/${response.data.id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      baseUrl
        .post("premade/premade-summary", formData)
        .then((response) => {
          console.log(response.status);

          // handle 403
          
          dispatch(setPreMade("generateSummary", response.data.summary));
          dispatch(setloadeDeactive())
          navigate(`/ownWord/${response.data.id}`);

        })
        .catch((e) => {
          dispatch(setloadeDeactive())

          console.log(e);
          if(e.response.status === 403){
            console.log(e.response.data)
            toast(e.response.data.message)
            // navigate("/pricing")
          }
        });
    }
  };

  return (
    <div className="premade">
      <form onSubmit={handleSubmit}>
        <div className="premade-raw">
          <div className="title">
            <MenuSvg />
            Add your pre-made list
          </div>
          <InputText
            name="propertyName"
            error={false}
            onchange={handleChange}
            placeholder="property Name"
            title="Property Name"
            value={formData.propertyName}
          />
          <InputTextArea
            name="premadeList"
            error={false}
            height={500}
            onchange={handleChange}
            placeholder="Pre-made list"
            title="Pre-made list"
            value={formData.premadeList}
          />
        </div>
        <div className="premade-raw">
          <InputWithCount
            limit={7500}
            name="textLimit"
            error={false}
            onchange={handleChange}
            placeholder="Character Limit"
            title="Character Limit"
            value={formData.textLimit}
          />
          <PremadeDrop
            onchange={handleChange}
            value={formData.language}
            name="language"
            title="language"
            data={LANGUAGES}
          />
          <button type="submit" className="premade-button">
            <GenerateSVG />
            Generate Real Estate Description
          </button>
        </div>
      </form>
    </div>
  );
}

export default Premade;
