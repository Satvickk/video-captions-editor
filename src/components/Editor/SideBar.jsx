import {
  Card,
  CardFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCaption } from "../../redux/slices/DataSlice";
import { toast } from "react-toastify";

export default function SideBar() {
  const CaptionData = useSelector((state) => state.Data.captions);
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState(null);

  function handleIsModal(data) {
    setData(data);
    setIsModal(!isModal);
  }

  function DeleteIcon({ item }) {
    function handleRemoveCaption() {
      dispatch(removeCaption(item));
      toast.success("Caption removed successfully");
    }
    return (
      <img
        src="/delete.png"
        onClick={handleRemoveCaption}
        className={`h-5 w-5`}
      />
    );
  }
  function InfoIcon({ item }) {
    return (
      <img
        src="/info.png"
        onClick={() => handleIsModal(item)}
        className={`h-5 w-5`}
      />
    );
  }

  function DatailsModal() {
    return (
      <Modal
        backdrop={"blur"}
        isOpen={isModal}
        onClose={handleIsModal}
        className="bg-gray-300"
      >
        <ModalContent className="text-black">
          <>
            <ModalHeader className="flex flex-col gap-1">
              Caption Info
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-between">
                <span>Start Time : {data?.startTime}</span>
                <span>End Time : {data?.endTime}</span>
              </div>
              <div>
                <p>Caption:</p>
                <p className="italic">{data?.text}</p>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <div className="p-2 pt-4 flex flex-col gap-3 w-full h-full rounded-lg">
      {CaptionData.length > 0 ?
        CaptionData.map((item, index) => (
          <Card key={index} shadow="sm">
            <CardFooter className="text-small justify-between">
              <b>{item?.text?.slice(0, 30) + "..." || ""}</b>
              <span className="text-default-500 flex gap-2">
                {" "}
                <InfoIcon item={item} />
                <DeleteIcon item={item} />
              </span>
            </CardFooter>
          </Card>
        )) : "No Captions available"}
      {DatailsModal()}
    </div>
  );
}
