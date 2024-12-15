import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1>404 | Not Found</h1>
      <Button onPress={handleNavigate}>Back to Home</Button>
    </div>
  );
}
