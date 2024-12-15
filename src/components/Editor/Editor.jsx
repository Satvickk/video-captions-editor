import { Button } from "@nextui-org/react";
import InputForm from "../UserInput/InputForm";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

export default function Editor({ setKey }) {
  const CaptionData = useSelector((state) => state.Data);
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen(){
    setIsOpen(!isOpen)
  }
  function handleUploadCaptions() {
    if (CaptionData.url.length <= 0) {
      toast.warn("Video URL missing!");
      return;
    }
    if (CaptionData.captions.length <= 0) {
      toast.warn("No Captions found");
      return;
    }
    setKey("videoresult");
    toast.success("Captions Uploaded successfully");
  }

  return (
    <div className="w-full h-full grid sm:gap-4 sm:grid-cols-6">
      <div id="user-input" className="h-full sm:col-span-4">
        <InputForm handleIsOpen={handleIsOpen} />
      </div>
      <div className="max-h-full hidden sm:grid bg-slate-800 rounded-lg w-full sm:col-span-2 overflow-y-scroll relative"
        id="captions-sidebar"
      >
        <div className="min-h-full absolute top-0 left-0 w-full px-2">
          <SideBar setKey={setKey} />
          <Button
            className="w-full my-4"
            color="primary"
            onPress={handleUploadCaptions}
          >
            Upload Captions
          </Button>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileSidebar isOpen={isOpen} handleUploadCaptions={handleUploadCaptions} handleIsOpen={handleIsOpen} />
      </div>
    </div>
  );
}
