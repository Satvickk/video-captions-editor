import { Tabs, Tab } from "@nextui-org/tabs";
import { useState } from "react";
import VideoUrlForm from "./components/UserInput/VideoURLForm";
import Editor from "./components/Editor/Editor";
import Result from "./components/Result/Result";

function App() {
  const [key, setKey] = useState("videourl");

  function renderTabBody(value) {
    if (value === "videourl") {
      return <VideoUrlForm setKey={setKey} key={key} />;
    } else if (value === "videoedit") {
      return <Editor setKey={setKey} key={key} />;
    } else {
      return <Result setKey={setKey} key={key} />;
    }
  }

  return (
    <div className="min-h-screen bg-black max-w-7xl py-4 mx-auto text-white">
      <div>
        <h1 className="text-2xl text-center sm:text-start font-semibold">
          Video Editor
        </h1>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full h-full my-8">
        <Tabs
          aria-label="Tabs selectors"
          color="primary"
          radius="full"
          selectedKey={key}
          onSelectionChange={setKey}
        >
          <Tab key="videourl" title="Upload URL" />
          <Tab key="videoedit" title="Edit" />
          <Tab key="videoresult" title="Result" />
        </Tabs>
      </div>
      <div className="w-full h-full">{renderTabBody(key)}</div>
    </div>
  );
}

export default App;
