import { Navigate } from "react-router-dom";

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
