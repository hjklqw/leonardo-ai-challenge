"use client";

import { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  SlideFade,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

import { UserInfoContext } from "@/state/userInfoContext";

import { WelcomeModalSlide1 } from "./slide1";
import { WelcomeModalSlide2 } from "./slide2";

const MAX_NUM_SLIDES = 2;

type Props = {
  onCompletion: () => void;
};

export const WelcomeModal = ({ onCompletion }: Props) => {
  const { updateUserInfo } = useContext(UserInfoContext);

  const [username, setUsername] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [currSlide, setCurrSlide] = useState<number>(1);

  function gotoNextSlide() {
    setCurrSlide((v) => v + 1);
  }

  function finish() {
    updateUserInfo({ username, jobTitle });
    onCompletion();
  }

  return (
    <Modal isOpen={currSlide <= MAX_NUM_SLIDES} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Welcome!</ModalHeader>

        <ModalBody>
          {currSlide === 1 && (
            <WelcomeModalSlide1
              onChange={setUsername}
              onEnter={gotoNextSlide}
            />
          )}
          {currSlide === 2 && (
            <SlideFade in={true}>
              <WelcomeModalSlide2 onChange={setJobTitle} onEnter={finish} />
            </SlideFade>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              if (currSlide < MAX_NUM_SLIDES) {
                gotoNextSlide();
              } else {
                finish();
              }
            }}
            isDisabled={currSlide === 1 ? username === "" : jobTitle === ""}
          >
            {currSlide === MAX_NUM_SLIDES ? (
              <>
                Done
                <CheckIcon ml={1} />
              </>
            ) : (
              <>
                Next
                <ArrowForwardIcon ml={1} />
              </>
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
