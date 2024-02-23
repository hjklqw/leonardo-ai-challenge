import { MAX_USERNAME_LENGTH } from "@/models/userInfo";
import { Input, InputEventProps } from "@/shared/input";

export const WelcomeModalSlide1 = (props: InputEventProps) => (
  <Input
    label="To get started, please set a username."
    placeholder="user12345"
    allowSpaces={false}
    maxLength={MAX_USERNAME_LENGTH}
    description={`${MAX_USERNAME_LENGTH} characters maximum.`}
    {...props}
  />
);
