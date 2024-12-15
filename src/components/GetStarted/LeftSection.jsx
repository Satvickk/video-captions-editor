import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function LeftSection() {
  const navigate = useNavigate();

  function handleGettingStarted() {
    window.sessionStorage.setItem("first", "qwertyuiop");
    navigate("/home");
  }
  return (
    <div className="w-full h-full sm:bg-slate-950 flex flex-col px-6 justify-center sm:text-lg font-semibold text-white sm:text-gray-300 items-center gap-4 text-center text-wrap">
      <p>
        Welcome to your free online Video Caption Editor. Click on the button to
        start editing your video
      </p>
      <Button onPress={handleGettingStarted} className="shadow-md" variant="solid" color="primary">Get Started</Button>
    </div>
  );
}
