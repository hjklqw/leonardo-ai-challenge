/** A small subset of data for a country, used for rendering list items. */
export interface CountryListItem {
  code: string;
  name: string;
  native: string;
  emoji: string;
}

/** Full data for a country. */
export interface Country {
  name: string;
  native: string;
  capital: string;
  continent: {
    name: string;
  };
  currencies: string[];
  languages: {
    name: string;
    native: string;
  }[];
  states: {
    name: string;
  }[];
  subdivisions: {
    name: string;
  }[];
}
