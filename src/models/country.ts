export interface CountryListItem {
  code: string;
  name: string;
  native: string;
  emoji: string;
}

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
