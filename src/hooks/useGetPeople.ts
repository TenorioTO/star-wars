import { useQuery, UseQueryResult } from "react-query";
import { PeopleResponse } from "../shared/interfaces/people";

export const useGetPeople = (
  pageUrl?: string
): UseQueryResult<PeopleResponse> => {
  return useQuery(
    ["allPeople", pageUrl],
    () => fetch(`${pageUrl}`).then((response) => response.json()),
    { refetchOnMount: false, enabled: !!pageUrl }
  );
};
