"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  Heading,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Suspense } from "react";

import { Country } from "@/models/country";

import { singleCountryQuery } from "./queries";
import { NoDataText } from "./noDataText";

import styles from "./styles.module.css";

type Props = {
  code: string;
};

const TH_WIDTH = 150;

/**
 * Renders out the full information for a given country.
 * Is meant to be used inside a container, as opposed to being a standalone component.
 */
export const CountryInfo = ({ code }: Props) => {
  const { data } = useSuspenseQuery<{ country: Country }>(singleCountryQuery, {
    variables: { code },
  });

  const c = data.country;

  function renderArrayData<T>(arr: T[], transformData?: (d: T) => string) {
    if (arr.length === 0) {
      return <NoDataText />;
    }
    if (transformData === undefined) {
      return arr.join(", ");
    }
    return arr.map(transformData).join(", ");
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack spacing={10} className={styles.container}>
        <Box>
          <Heading as="h1" size="2xl" mb={1}>
            {c.name}
          </Heading>
          {c.name !== c.native && <Text size="lg">{c.native}</Text>}
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Geography
          </Heading>

          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th width={TH_WIDTH}>Capital</Th>
                <Td>{c.capital}</Td>
              </Tr>
              <Tr>
                <Th>Continent</Th>
                <Td>{c.continent.name}</Td>
              </Tr>
              <Tr>
                <Th>States</Th>
                <Td>{renderArrayData(c.states, (s) => s.name)}</Td>
              </Tr>
              <Tr>
                <Th>Subdivisions</Th>
                <Td>{renderArrayData(c.subdivisions, (s) => s.name)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Living
          </Heading>

          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th width={TH_WIDTH}>Languages</Th>
                <Td>
                  {renderArrayData(c.languages, (lang) =>
                    lang.name === lang.native
                      ? lang.name
                      : `${lang.name} (${lang.native})`
                  )}
                </Td>
              </Tr>
              <Tr>
                <Th>Currencies</Th>
                <Td>{renderArrayData(c.currencies)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Suspense>
  );
};
