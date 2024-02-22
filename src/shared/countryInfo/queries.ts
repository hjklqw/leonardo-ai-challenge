import { gql } from "@apollo/client";

export const singleCountryQuery = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      continent {
        name
      }
      currencies
      languages {
        name
        native
      }
      states {
        name
      }
      subdivisions {
        name
      }
    }
  }
`;
