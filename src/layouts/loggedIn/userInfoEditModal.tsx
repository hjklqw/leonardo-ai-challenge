import { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react";

import { UserInfoContext } from "@/state/userInfoContext";
import { MAX_USERNAME_LENGTH, UserInfo } from "@/models/userInfo";

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
              <Text mb={2}>Username</Text>
              <Input
                defaultValue={userInfo!.username}
                onChange={(event) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    username: event.target.value?.trim(),
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                placeholder="user12345"
                maxLength={MAX_USERNAME_LENGTH}
              />
              <Text fontSize="xs" color="gray" mt={1} ml={1}>
                {MAX_USERNAME_LENGTH} characters maximum.
              </Text>
            </Container>

            <Container>
              <Text mb={2}>Job Title</Text>
              <Input
                defaultValue={userInfo!.jobTitle}
                onChange={(event) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    jobTitle: event.target.value?.trim(),
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                placeholder="Software Engineer"
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
