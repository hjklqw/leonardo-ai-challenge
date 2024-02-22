"use client";

import { WelcomeModal } from "@/contents/welcomeModal";
import { InfoPage } from "@/contents/infoPage";
import { useState } from "react";

export default function Home() {
  // Temporary way to determine what page to show before userInfo persistence
  const [isFirstRun, setFirstRun] = useState<boolean>(true);

  return (
    <main>
      {isFirstRun ? (
        <WelcomeModal onCompletion={() => setFirstRun(false)} />
      ) : (
        <InfoPage />
      )}
    </main>
  );
}
