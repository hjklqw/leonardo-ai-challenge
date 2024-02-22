import { Input, Text } from "@chakra-ui/react";
import { MAX_USERNAME_LENGTH } from "@/models/userInfo";

type Props = {
  onChange: (value: string) => void;
  onEnter: () => void;
};

export const WelcomeModalSlide1 = ({ onChange, onEnter }: Props) => (
  <>
    <Text mb={2}>To get started, please set a username.</Text>
    <Input
      onChange={(event) => onChange(event.target.value?.trim())}
      onKeyDown={(e) => {
        if (e.key === "Enter") onEnter();
      }}
      placeholder="user12345"
      maxLength={MAX_USERNAME_LENGTH}
    />
    <Text fontSize="xs" color="gray" mt={1} ml={1}>
      {MAX_USERNAME_LENGTH} characters maximum.
    </Text>
  </>
);
