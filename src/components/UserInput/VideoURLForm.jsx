import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setURL } from "../../redux/slices/DataSlice";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  videoURL: Yup.string()
    .url("Invalid URL format")
    .matches(
      /\.(mp4|mov|avi|mkv|webm)$/,
      "Only video files (mp4, mov, avi, mkv, webm) are allowed"
    )
    .required("Video URL is required"),
});

export default function VideoUrlForm({ setKey }) {
  const [videoURL, setVideoURL] = useState("");
  const dispatch = useDispatch();
  const url = useSelector((state) => state.Data.url);

  function handleNext(values) {
    sessionStorage.setItem("videoURL", values.videoURL);
    dispatch(setURL(values.videoURL));
    setKey("videoedit");
    toast.success("Video loaded successfully");
  }

  useEffect(() => {
    const storedVideoURL = sessionStorage.getItem("videoURL");
    if (storedVideoURL) {
      setVideoURL(storedVideoURL);
      dispatch(setURL(storedVideoURL));
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 bg-black">
      {url && (
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <label htmlFor="videoURLInput" className="text-white text-lg">
            CURRENT VIDEO URL :
          </label>
          <span className="italic text-success-500 break-words">{url}</span>
        </div>
      )}
      <Formik
        initialValues={{ videoURL }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleNext}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col gap-3">
            <label htmlFor="videoURLInput" className="text-white text-lg">
              VIDEO URL
            </label>
            <Field
              id="videoURLInput"
              name="videoURL"
              type="text"
              as={Input}
              label="Enter your video URL"
              className={`w-full ${
                touched.videoURL && errors.videoURL
                  ? "border-danger-500 border-2"
                  : ""
              }`}
            />
            <ErrorMessage
              name="videoURL"
              component="div"
              className="text-red-500"
            />
            <Button color="primary" type="submit" className="w-full mt-4">
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
