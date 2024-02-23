"use client";

import { useState } from "react";

import { UserInfo } from "@/models/userInfo";
import { UserInfoContext } from "@/state/userInfoContext";
import { StorageManager } from "@/state/storageManager";

const storage = new StorageManager<UserInfo | undefined>("userInfo", undefined);

export const UserInfoWrapper = ({ children }: React.PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(storage.get());

  function updateUserInfo(newInfo: UserInfo) {
    setUserInfo(newInfo);
    storage.set(newInfo);
  }

  return (
    <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
