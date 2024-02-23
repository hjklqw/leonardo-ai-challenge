"use client";

import { useContext } from "react";

import { WelcomeModal } from "@/contents/welcomeModal";
import { InfoPage } from "@/contents/infoPage";
import { UserInfoContext } from "@/state/userInfoContext";

export default function Home() {
  const { userInfo } = useContext(UserInfoContext);

  return userInfo === undefined ? <WelcomeModal /> : <InfoPage />;
}
