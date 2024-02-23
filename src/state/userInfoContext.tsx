import { createContext } from "react";

import { UserInfo } from "@/models/userInfo";

/**
 * Allows for retrieval and update of the stored user info.
 * User info is retrieved only on client-side mount, so use `useMounted`
 * when making decisions based off this value (ex. redirection)
 */
export const UserInfoContext = createContext<{
  userInfo: UserInfo | undefined;
  updateUserInfo: (newInfo: UserInfo) => void;
}>({
  userInfo: undefined,
  updateUserInfo: () => {},
});
