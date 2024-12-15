import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const convertToSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

export default function Result() {
  const Data = useSelector((state) => state.Data);
  const videoRef = useRef(null);

  const [currentCaption, setCurrentCaption] = useState("");

  const updateCaption = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    const activeCaption = Data.captions.find(
      (cap) => currentTime >= convertToSeconds(cap.startTime) && currentTime <= convertToSeconds(cap.endTime)
    );
    setCurrentCaption(activeCaption ? activeCaption.text : "");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", updateCaption);
      return () => video.removeEventListener("timeupdate", updateCaption);
    }
  }, [Data.captions]);

  return (
    <div className="w-full px-4 sm:px-0 h-full flex flex-col gap-4 bg-black">
      {Data.url && (
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <label htmlFor="videoURLInput" className="text-white text-lg">
            RESULT :
          </label>
        </div>
      )}
      {Data.url && Data.url.length > 0 && (
        <div className="relative w-full max-w-[500px] mx-auto bg-white rounded-lg">
          <video
            ref={videoRef}
            src={Data.url}
            controls
            className="w-full max-h-[500px] z-40 object-fill"
          />
          {currentCaption && (
            <div className="absolute bottom-16 left-0 z-10 w-full text-center text-white text-sm bg-black bg-opacity-60 py-2">
              {currentCaption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
