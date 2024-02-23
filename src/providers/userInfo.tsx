"use client";

import { useState } from "react";

import { UserInfo } from "@/models/userInfo";
import { UserInfoContext } from "@/state/userInfoContext";
import { StorageManager } from "@/state/storageManager";
import { useMounted } from "@/utils/useMounted";

const storage = new StorageManager<UserInfo | undefined>("userInfo", undefined);

/**
 * Provides children with user information, and the ability to update it if needed.
 * Info is stored into localStorage, and accessed from it on load.
 */
export const UserInfoWrapper = ({ children }: React.PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

  useMounted(() => {
    setUserInfo(storage.get());
  });

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
