import { renderHook } from "@testing-library/react-hooks";
import { useQuery } from "react-query";
import { useGetAllSpecies } from "../useGetAllSpecies";

jest.mock("react-query");

test("useGetAllSpecies performs the query and returns data", async () => {
  const data = [
    { id: 1, name: "Human" },
    { id: 2, name: "Droid" },
  ];

  (useQuery as jest.Mock).mockReturnValue({
    isLoading: false,
    error: null,
    data,
    isFetching: false,
    isSuccess: true,
  });

  const { result } = renderHook(() => useGetAllSpecies());

  expect(result.current.isLoading).toBe(false);
  expect(result.current.error).toBe(null);
  expect(result.current.data).toEqual(data);
  expect(result.current.isFetching).toBe(false);
  expect(result.current.isSuccess).toBe(true);
});
