import { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Stack,
  Container,
} from "@chakra-ui/react";

import { UserInfoContext } from "@/state/userInfoContext";
import {
  MAX_JOBTITLE_LENGTH,
  MAX_USERNAME_LENGTH,
  UserInfo,
} from "@/models/userInfo";
import { Input } from "@/shared/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserInfoEditModal = ({ isOpen, onClose }: Props) => {
  const { userInfo, updateUserInfo } = useContext(UserInfoContext);
  const [newUserInfo, setNewUserInfo] = useState<UserInfo>(userInfo!);

  function submit() {
    updateUserInfo(newUserInfo);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Edit user info</ModalHeader>

        <ModalBody>
          <Stack spacing={6}>
            <Container>
              <Input
                label="Username"
                placeholder="user12345"
                allowSpaces={false}
                maxLength={MAX_USERNAME_LENGTH}
                description={`${MAX_USERNAME_LENGTH} characters maximum.`}
                onChange={(value) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    username: value,
                  }))
                }
                onEnter={submit}
                defaultValue={userInfo!.username}
              />
            </Container>

            <Container>
              <Input
                label="Job Title"
                allowSpaces
                placeholder="Software Engineer"
                maxLength={MAX_JOBTITLE_LENGTH}
                description={`${MAX_JOBTITLE_LENGTH} characters maximum.`}
                onChange={(value) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    jobTitle: value,
                  }))
                }
                onEnter={submit}
                defaultValue={userInfo!.jobTitle}
              />
            </Container>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={submit} isDisabled={false}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
