import React from "react";
import { Navigate } from "react-router-dom";
import WorkSpace from "../layouts/workspace/WorkSpace";

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  if (token !== null && token?.length > 10) {
    return <WorkSpace />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
