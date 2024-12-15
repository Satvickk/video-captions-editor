import { useRef, useState } from "react";
import { Input } from "@nextui-org/input";
import { useDispatch, useSelector } from "react-redux";
import InfoModal from "./InfoModal";
import { toast } from "react-toastify";
import { addSingleCaption } from "../../redux/slices/DataSlice";
import { Button } from "@nextui-org/react";

export default function InputForm({handleIsOpen}) {
  const Data = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [captionText, setCaptionText] = useState("");
  const [pausedTime, setPausedTime] = useState(null);
  const [endTime, setEndTime] = useState("00:00:00");
  const videoRef = useRef(null);

  const parseTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const addCaption = () => {
    if (!captionText.trim()) {
      toast.warn("Caption cannot be empty!");
      return;
    }
    if (!pausedTime) {
      toast.warn("Start Time is not set! Please pause the video.");
      return;
    }
    if (!endTime.trim() || endTime === "00:00:00") {
      toast.warn("End Time cannot be empty or default value!");
      return;
    }

    dispatch(
      addSingleCaption({
        text: captionText,
        startTime: pausedTime,
        endTime: endTime.trim(),
      })
    );

    setCaptionText("");
    setPausedTime(null);
    setEndTime("00:00:00");
    toast.success("Caption added successfully!");
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      const time = Math.floor(videoRef.current.currentTime);
      const duration = Math.floor(videoRef.current.duration);
      const startTime = parseTime(time);
      const autoEndTime = time + 1 <= duration ? parseTime(time + 1) : parseTime(duration);

      setPausedTime(startTime);
      setEndTime(autoEndTime);
    }
  };

  const handleIsModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="w-full h-full p-2">
      <InfoModal isModal={isModal} handleIsModal={handleIsModal} />
      {Data.url && (
          <div>
          <video
            ref={videoRef}
            src={Data?.url}
            controls
            onPause={handleVideoPause}
            onCanPlay={() => setVideoLoaded(true)}
            className="w-full h-full max-h-[300px]"
            />
        </div>
      )}
      <div className="p-2 pt-4 grid gap-2 bg-slate-800 rounded-lg px-4 pb-6 mt-4">
      <p className="text-lg">Add Captions</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4 sm:mb-0">
          <Input
            radius="full"
            label="Start Time"
            readOnly
            value={pausedTime || "Pause video to capture time"}
          />
          <Input
            radius="full"
            label="End Time"
            placeholder="Enter end time (hh:mm:ss)"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <Input
          radius="full"
          startContent={
            <button
              onClick={handleIsModal}
              className="rounded-full cursor-default p-2 flex justify-center items-center"
            >
              <img
                src="/info.png"
                className={`h-5 w-5 transition-all duration-300 ${
                  isModal && "-rotate-180"
                }`}
              />
            </button>
          }
          endContent={
            <button
              onClick={addCaption}
              className={`rounded-full cursor-default p-2 flex justify-center items-center transition-all duration-300 ${
                captionText.length > 0 && endTime.length > 0 && pausedTime
                  ? "bg-gray-300 hover:bg-gray-500"
                  : "bg-[#FAFAFA]"
              }`}
            >
              <img
                src="/send-blue.png"
                className={`h-5 w-5 transition-all duration-300 ${
                  captionText.length > 0 && endTime.length > 0 && pausedTime &&
                  "-rotate-45"
                }`}
              />
            </button>
          }
          placeholder="Enter caption here"
          type="text"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
        />
        <Button className="sm:hidden mt-4" color="primary" onPress={handleIsOpen}>Show Captions</Button>
      </div>
    </div>
  );
}
