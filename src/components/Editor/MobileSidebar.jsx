import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Card,
    CardFooter,
  } from "@nextui-org/react";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { removeCaption } from "../../redux/slices/DataSlice";
  import { toast } from "react-toastify";
  
  export default function MobileSidebar({ isOpen, handleIsOpen, handleUploadCaptions }) {
    const CaptionData = useSelector((state) => state.Data.captions);
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(null);
  
    function handleIsModal(data) {
      setData(data);
      setIsModal(!isModal);
    }

    function handleApply(){
        handleUploadCaptions()
        handleIsOpen()
    }
  

    function handleRemoveCaption(item) {
      dispatch(removeCaption(item));
      toast.success("Caption removed successfully");
    }
  
    function InfoIcon({ item }) {
      return (
        <img
          src="/info.png"
          onClick={() => handleIsModal(item)}
          className={`h-5 w-5 cursor-pointer`}
        />
      );
    }
  
    function DeleteIcon({ item }) {
      return (
        <img
          src="/delete.png"
          onClick={() => handleRemoveCaption(item)}
          className={`h-5 w-5 cursor-pointer`}
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
            <ModalHeader className="flex flex-col gap-1">Caption Info</ModalHeader>
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
          </ModalContent>
        </Modal>
      );
    }
  
    return (
      <>
        <Drawer isOpen={isOpen} onOpenChange={handleIsOpen} className="bg-slate-800">
          <DrawerContent>
            <DrawerHeader className="flex flex-col gap-1">Captions</DrawerHeader>
            <DrawerBody className="flex flex-col gap-4">
              {CaptionData.length > 0 ? (
                CaptionData.map((item, index) => (
                  <Card key={index} shadow="sm">
                    <CardFooter className="text-small justify-between">
                      <b>{item?.text?.slice(0, 30) + "..." || ""}</b>
                      <span className="text-default-500 flex gap-2">
                        <InfoIcon item={item} />
                        <DeleteIcon item={item} />
                      </span>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p>No captions available.</p>
              )}
            </DrawerBody>
            <DrawerFooter>
              <Button color="danger" variant="light" onPress={handleIsOpen}>
                Close
              </Button>
              <Button color="success" variant="light" onPress={handleApply}>
                Upload Captions
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {DatailsModal()}
      </>
    );
  }
  