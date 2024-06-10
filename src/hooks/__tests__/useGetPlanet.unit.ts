import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";
import { useGetPlanet } from "../useGetPlanet";

jest.mock("react-query");

test("useGetPlanet performs the query and returns data", async () => {
  const data = { id: 1, name: "Tatooine" };

  (useQuery as jest.Mock).mockReturnValue({
    isLoading: false,
    error: null,
    data,
    isFetching: false,
    isSuccess: true,
  });

  const { result } = renderHook(() =>
    useGetPlanet("https://swapi.dev/api/planets/1/")
  );

  expect(result.current.isLoading).toBe(false);
  expect(result.current.error).toBe(null);
  expect(result.current.data).toEqual(data);
  expect(result.current.isFetching).toBe(false);
  expect(result.current.isSuccess).toBe(true);
});
