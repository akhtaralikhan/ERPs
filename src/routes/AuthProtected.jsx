import { Navigate, Outlet } from "react-router-dom";

const AuthProtected = () => {


  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default AuthProtected;
