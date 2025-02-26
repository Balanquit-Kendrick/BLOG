import { Link, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); 
  return token ? <Outlet /> : <Link to="/login" replace />;
};

export default ProtectedRoute;
