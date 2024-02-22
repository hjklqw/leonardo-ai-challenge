"use client";

import NextLink from "next/link";
import { Container, Link } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { LoggedInLayout } from "@/layouts/loggedIn";
import { CountryInfo } from "@/shared/countryInfo";

type Props = {
  params: { code: string };
};

export default function CountryPage({ params: { code } }: Props) {
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
