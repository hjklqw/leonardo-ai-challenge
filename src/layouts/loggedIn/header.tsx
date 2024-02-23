"use client";

import { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

import { UserInfoEditModal } from "./userInfoEditModal";
import { UserInfoContext } from "@/state/userInfoContext";

export const Header = () => {
  const { userInfo } = useContext(UserInfoContext);

  const {
    isOpen: isUserEditModalOpen,
    onOpen: openUserEditModal,
    onClose: closeUserEditModal,
  } = useDisclosure();

  return (
    <>
      <Box
        bg="black"
        padding={3}
        mb={20}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Tooltip label="Edit" hasArrow>
          <Button
            variant="link"
            color="white"
            gap={2}
            fontWeight="normal"
            onClick={openUserEditModal}
          >
            <Avatar size="sm" />
            <Text>
              {userInfo!.username} ({userInfo!.jobTitle})
            </Text>
          </Button>
        </Tooltip>
      </Box>
      <UserInfoEditModal
        isOpen={isUserEditModalOpen}
        onClose={closeUserEditModal}
      />
    </>
  );
};
