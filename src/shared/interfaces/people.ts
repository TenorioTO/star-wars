export type PeopleResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Array<People>;
};

export type People = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
  vehicles: string[];
  starships: string[];
  species: string[];
  films: string[];
};
