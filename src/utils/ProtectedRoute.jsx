import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const flag = window.sessionStorage.getItem("first");
  return flag ? <Outlet /> : <Navigate to={"/"} />;
}
