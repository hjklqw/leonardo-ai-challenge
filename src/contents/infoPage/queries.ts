import { gql } from "@apollo/client";

export const countriesQuery = gql`
  query {
    countries {
      code
      name
      native
      emoji
    }
  }
`;
