import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { CountryListItem } from "@/models/country";

type Props = {
  country: CountryListItem;
};

export const CountryCard = ({ country }: Props) => {
  return (
    <Card variant="outline">
      <CardHeader>
        <Heading size="md">
          {country.emoji}&nbsp;&nbsp;{country.name}
        </Heading>
        <Text size="sm">{country.native}</Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <Link as={NextLink} href={`/country/${country.code}`} passHref>
          More info
          <ArrowForwardIcon ml={1} />
        </Link>
      </CardBody>
    </Card>
  );
};
