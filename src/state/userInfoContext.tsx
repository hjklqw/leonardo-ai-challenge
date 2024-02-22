import { createContext } from "react";

import { UserInfo } from "@/models/userInfo";

export const UserInfoContext = createContext<{
  userInfo: UserInfo | undefined;
  updateUserInfo: (newInfo: UserInfo) => void;
}>({
  userInfo: undefined,
  updateUserInfo: () => {},
});
