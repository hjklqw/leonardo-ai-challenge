import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ChakraWrapper } from "@/providers/chakra";
import { ApolloWrapper } from "@/providers/apollo";
import { UserInfoWrapper } from "@/providers/userInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo.Ai Technical Challenge",
  description: "By Michelle Poon",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <ChakraWrapper>
            <UserInfoWrapper>
              {children}
              {modal}
            </UserInfoWrapper>
          </ChakraWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
