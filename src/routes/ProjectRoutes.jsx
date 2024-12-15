import { Route, Routes } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import ProtectedRoute from "../utils/ProtectedRoute";
import GetStarted from "../pages/GetStarted";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<App />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
