import { Input, Text } from "@chakra-ui/react";

type Props = {
  onChange: (value: string) => void;
  onEnter: () => void;
};

export const WelcomeModalSlide2 = ({ onChange, onEnter }: Props) => (
  <>
    <Text mb={2}>Next, enter your job title.</Text>
    <Input
      autoFocus
      onChange={(event) => onChange(event.target.value?.trim())}
      onKeyDown={(e) => {
        if (e.key === "Enter") onEnter();
      }}
      placeholder="Software Engineer"
    />
  </>
);
