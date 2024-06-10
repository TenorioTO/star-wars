import { useQuery, UseQueryResult } from "react-query";
import { PeopleResponse } from "../shared/interfaces/people";

export const useGetAllPeople = (
  page?: string
): UseQueryResult<PeopleResponse> => {
  const url = page ? page : "https://swapi.dev/api/people";

  return useQuery(
    ["allPeople", page],
    () => fetch(`${url}`).then((response) => response.json()),
    { refetchOnMount: false }
  );
};
