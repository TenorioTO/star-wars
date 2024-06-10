import { People, PeopleResponse } from "./people";

export type SpeciesResponse = Pick<
  PeopleResponse,
  "count" | "next" | "previous"
> & {
  results: Array<Species>;
};

export type Species = Pick<
  People,
  | "name"
  | "skin_color"
  | "eye_color"
  | "edited"
  | "created"
  | "url"
  | "homeworld"
  | "films"
  | "hair_color"
> & {
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  language: string;
  people: string[];
};
