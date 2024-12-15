import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

export default function InfoModal({isModal, handleIsModal}) {
  return (
    <>
      <Modal backdrop={"blur"} isOpen={isModal} onClose={handleIsModal} className="bg-[#006FEE]">
        <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">Editor Info</ModalHeader>
              <ModalBody>
                <p>
                  Steps to add Caption :
                </p>
                <ul>
                <li>⌁ Pause the video</li>
                <li>⌁ Write the Caption</li>
                <li>⌁ Hit Send Button to add</li>
                </ul>
                <p>The timestamp can be set autotmatically or manually</p>
              </ModalBody>
            </>
        
        </ModalContent>
      </Modal>
    </>
  );
}

