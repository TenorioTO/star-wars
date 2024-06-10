import { UseQueryResult, useQuery } from "react-query";
import { SpeciesResponse } from "../shared/interfaces/species";

export const useGetAllSpecies = (): UseQueryResult<SpeciesResponse> => {
  const url = "https://swapi.dev/api/species";
  return useQuery(["species", url], () =>
    fetch(url).then((response) => response.json())
  );
};
