"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { Suspense } from "react";

import { LoggedInLayout } from "@/layouts/loggedIn";
import { CountryListItem } from "@/models/country";

import { countriesQuery } from "./queries";
import { CountryCard } from "./card";

/** The main page of the application, displaying a grid view of all countries. */
export const InfoPage = () => {
  const { data } = useSuspenseQuery<{ countries: CountryListItem[] }>(
    countriesQuery
  );

  const gridMinChildWidth = useBreakpointValue(
    {
      base: 250,
      md: 350,
      xl: 500,
    },
    { ssr: false }
  );

  return (
    <LoggedInLayout>
      <Heading as="h1" textAlign="center" size="2xl">
        Information Page
      </Heading>

      <Suspense fallback={<div>Loading...</div>}>
        <SimpleGrid minChildWidth={gridMinChildWidth} gap={6} padding={8}>
          {data.countries.map((c) => (
            <CountryCard key={c.code} country={c} />
          ))}
        </SimpleGrid>
      </Suspense>
    </LoggedInLayout>
  );
};
