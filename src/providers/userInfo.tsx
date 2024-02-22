"use client";

import { useState } from "react";

import { UserInfo } from "@/models/userInfo";
import { UserInfoContext } from "@/state/userInfoContext";

export const UserInfoWrapper = ({ children }: React.PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  function updateUserInfo(newInfo: UserInfo) {
    setUserInfo(newInfo);
  }

  return (
    <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
