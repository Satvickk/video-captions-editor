import LeftSection from "../components/GetStarted/LeftSection";
import RightSection from "../components/GetStarted/RightSection";

export default function GetStarted() {
  return (
    <div className="h-screen grid sm:grid-cols-5">
      <div className="sm:col-span-2 sm:static absolute z-50 w-full h-full flex items-center justify-center">
        <LeftSection />
      </div>

      <div className="sm:col-span-3 relative">
        <RightSection />
      </div>
    </div>
  );
}
