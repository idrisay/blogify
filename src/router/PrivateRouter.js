import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children, currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigate to="/login" />
        </div>
      )}
    </div>
  );
};

export default PrivateRouter;
