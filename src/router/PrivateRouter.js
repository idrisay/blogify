import React from "react";
import Login from "../pages/auth/Login";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children, currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      {currentUser ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigate to="/login" />
          {/* <Login /> */}
        </div>
      )}
    </div>
  );
};

export default PrivateRouter;
