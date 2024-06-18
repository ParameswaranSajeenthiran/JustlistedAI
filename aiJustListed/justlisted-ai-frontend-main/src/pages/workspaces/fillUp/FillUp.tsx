import React, { useEffect } from "react";
import { FillUpSVG, GenerateSVG, MenuSvg } from "../../../assets/icon";
import "./fillup.scss";
import InputText from "../../../components/input/InputText";
import PremadeDrop from "../../../components/input/PremadeDrop";
import InputTextArea from "../../../components/input/InputTextArea";
import {
  LANGUAGES,
  PROPERTYTYPE,
  PURPOSE,
  STATUS,
} from "../../../utils/dropItem/dropItems";
import InputWithCount from "../../../components/input/InputWithCount";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPreMade } from "../../../redux/actions/premadeAction";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "../../../baseURL";
import {
  setloadeActive,
  setloadeDeactive,
} from "../../../redux/actions/loaderActions";
function FillUp() {
  const { ID } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fillUp = useSelector((state: RootState) => state.premade);

  useEffect(() => {
    if (ID) {
      dispatch(setloadeActive());

      baseUrl
        .get("fillup/fillupbyId", {
          headers: {
            fillupid: ID,
          },
        })
        .then((response) => {
          let item = response.data.data;

          dispatch(setPreMade("propertyName", item?.propertyName));
          dispatch(setPreMade("textLimit", item?.textLimit));
          dispatch(setPreMade("language", item?.language));
          dispatch(setPreMade("location", item?.location));
          dispatch(setPreMade("propertyType", item?.propertyType));
          dispatch(setPreMade("status", item?.status));
          dispatch(setPreMade("price", item?.price));
          dispatch(setPreMade("floorArea", item?.floorArea));
          dispatch(setPreMade("bedRoomNodes", item?.bedRoomNodes));
          dispatch(setPreMade("kitchenNotes", item?.kitchenNotes));
          dispatch(setPreMade("bathRoomNotes", item?.bathRoomNotes));
          dispatch(setPreMade("additionalNotes", item?.additionalNotes));
          dispatch(setPreMade("purpose", item?.purpose));
          dispatch(setloadeDeactive());
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [ID]);
  const handleChange = (e: any) => {
    let { value, name } = e.target;

    dispatch(setPreMade(name, value));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setPreMade("premade", false));
    dispatch(setloadeActive());

    if (ID) {
      baseUrl
        .put("fillup/fillup-summary-update", fillUp, {
          headers: {
            fillupid: ID,
          },
        })
        .then((response) => {
          dispatch(setPreMade("generateSummary", response.data.summary));
          dispatch(setloadeDeactive());
          navigate(`/ownWord/${response.data.id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      baseUrl
        .post("fillup/fillup-summary", fillUp)
        .then((response) => {
          dispatch(setPreMade("generateSummary", response.data.summary));
          dispatch(setloadeDeactive());

          navigate(`/ownWord/${response.data.id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="fillup">
      <div className="title">
        <FillUpSVG />
        Fill up quickly
      </div>
      <form onSubmit={handleSubmit}>
        <InputText
          name="propertyName"
          value={fillUp.propertyName}
          error={false}
          onchange={handleChange}
          placeholder="property Name (Street Address)"
          title="property Name (Street Address)"
        />
        <InputText
          name="location"
          value={fillUp.location}
          error={false}
          onchange={handleChange}
          placeholder="Location (City)"
          title="Location (City)"
        />
        <PremadeDrop
          onchange={handleChange}
          name="propertyType"
          value={fillUp.propertyType}
          title="Property Type"
          data={PROPERTYTYPE}
        />
        <PremadeDrop
          onchange={handleChange}
          name="status"
          value={fillUp.status}
          title="Status"
          data={STATUS}
        />

        <InputText
          name="price"
          value={fillUp.price}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Price"
        />
        <InputText
          name="floorArea"
          value={fillUp.floorArea}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Floor Area or GLA"
        />
        <InputTextArea
          name="bedRoomNodes"
          value={fillUp.bedRoomNodes}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Bedroom Notes "
        />
        <InputTextArea
          name="kitchenNotes"
          value={fillUp.kitchenNotes}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Kitchen Notes "
        />
        <InputTextArea
          name="bathRoomNotes"
          value={fillUp.bathRoomNotes}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Bathroom Notes "
        />
        <InputTextArea
          name="additionalNotes"
          value={fillUp.additionalNotes}
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Additional Notes or Features "
        />
        <PremadeDrop
          onchange={handleChange}
          name="purpose"
          value={fillUp.purpose}
          title="Intended Purpose/Audience"
          data={PURPOSE}
        />
        <InputWithCount
          limit={7500}
          name="textLimit"
          error={false}
          onchange={handleChange}
          placeholder="Character Limit"
          title="Character Limit"
          value={fillUp.textLimit}
        />

        <PremadeDrop
          onchange={handleChange}
          value={fillUp.language}
          name="language"
          title="Language"
          data={LANGUAGES}
        />
        <button type="submit">
          <GenerateSVG />
          Generate Real Estate Description
        </button>
      </form>
    </div>
  );
}

export default FillUp;
