"use client";

import { useContext } from "react";
import NextLink from "next/link";
import { redirect } from "next/navigation";
import { Container, Link } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { LoggedInLayout } from "@/layouts/loggedIn";
import { CountryInfo } from "@/shared/countryInfo";
import { UserInfoContext } from "@/state/userInfoContext";
import { useMounted } from "@/utils/useMounted";

type Props = {
  params: { code: string };
};

export default function CountryPage({ params: { code } }: Props) {
  const { userInfo } = useContext(UserInfoContext);

  // Wait for the userInfo to be retrieved client-side
  const isMounted = useMounted();
  if (!isMounted) return null;

  if (userInfo === undefined) {
    redirect("/");
  }

  return (
    <LoggedInLayout>
      <Link as={NextLink} href="/" passHref ml={10} display="block">
        <ArrowBackIcon ml={1} />
        View all countries
      </Link>

      <Container maxW="1200px" display="flex" alignItems="center" padding={10}>
        <CountryInfo code={code} />
      </Container>
    </LoggedInLayout>
  );
}
