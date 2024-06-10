import { UseQueryResult, useQuery } from "react-query";
import { Planet } from "../shared/interfaces/planet";

export const useGetPlanet = (url?: string): UseQueryResult<Planet> => {
  return useQuery(
    ["planet", url],
    () => fetch(`${url}`).then((response) => response.json()),
    { refetchOnMount: false, enabled: !!url }
  );
};
