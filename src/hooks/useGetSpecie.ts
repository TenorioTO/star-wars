import { UseQueryResult, useQuery } from "react-query";
import { Species } from "../shared/interfaces/species";

export const useGetSpecie = (url?: string): UseQueryResult<Species> => {
  return useQuery(
    ["species", url],
    () => fetch(`${url}`).then((response) => response.json()),
    {
      enabled: !!url,
    }
  );
};
