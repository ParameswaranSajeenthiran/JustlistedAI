import React, { useEffect, useState } from "react";
import InputText from "../../../components/input/InputText";
import InputMail from "../../../components/input/InputMail";
import { PhotoSvg } from "../../../assets/icon";
import baseUrl from "../../../baseURL";
import { toast } from "react-toastify";
function UserData() {
  const [formData, setformData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    userImage: null,
    apiImage: null,
  });
  useEffect(() => {
    baseUrl
      .get("user/findOne")
      .then((response) => {
        setformData({
          userName: response.data.data?.userName,
          email: response.data.data?.email,
          phoneNumber: response.data.data?.phoneNumber,
          address: response.data.data?.address,
          apiImage: response.data.data?.userImage,
          userImage: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = async (e: any) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      if (e.target.files[0]) {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setformData({ ...formData, [name]: reader.result });
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    } else {
      setformData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    baseUrl
      .patch("user/findOneupdate", formData)
      .then((response) => {
        if (response.data.success ) {
          toast("user update successfully")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="col-1">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input-image">
          <label htmlFor="">Photo</label>
          <label htmlFor="selectUserimage" className="imagesvg">
            {formData.userImage != null ? (
              <img src={formData.userImage} alt="" />
            ) : formData.apiImage ? (
              <img
                src={`${process.env.REACT_APP_API}${formData.apiImage}`}
                alt=""
              />
            ) : (
              <PhotoSvg />
            )}
          </label>
          <input
            type="file"
            id="selectUserimage"
            name="userImage"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
        <InputText
          disabled={true}
          name="name"
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Name"
          value={formData.userName}
        />
        <InputMail
          name="email"
          error={false}
          onchange={handleChange}
          placeholder="Email"
          title="Email"
          value={formData.email}
        />
        <InputText
          name="phoneNumber"
          error={false}
          onchange={handleChange}
          placeholder="Mobile Number"
          title="Mobile Number"
          value={formData.phoneNumber}
        />
        <InputText
          name="address"
          error={false}
          onchange={handleChange}
          placeholder="name"
          title="Address"
          value={formData.address}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserData;
