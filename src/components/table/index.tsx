import React from "react";
import { useGetPeople } from "../../hooks/useGetPeople";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useGetPlanet } from "../../hooks/useGetPlanet";

export const SimpleTable = ({ name }: { name: string }) => {
  const peopleUrl = name
    ? `https://swapi.dev/api/people/?search=${name}`
    : undefined;
  const { data: peopeData, error } = useGetPeople(peopleUrl);
  const { data: planetData, error: planetError } = useGetPlanet(
    peopeData?.results[0].homeworld
  );

  //   handle people data error
  if (!peopeData || error) {
    return null;
  }

  const data = peopeData.results[0];

  //   handle planet data error
  if (!planetData || planetError) {
    return null;
  }

  const createdDate = new Date(data.created);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>{data.name} info</TableCaption>
        <Thead>
          <Tr>
            <Th>Attribute</Th>
            <Th>Detail</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Height</Td>
            <Td>{parseInt(data.height) / 100} meters</Td>
          </Tr>
          <Tr>
            <Td>Mass</Td>
            <Td>{data.mass} kg</Td>
          </Tr>
          <Tr>
            <Td>Create Data</Td>
            <Td>{data.created && format(createdDate, "dd-mm-yyyy")}</Td>
          </Tr>
          <Tr>
            <Td>Planet - Name</Td>
            <Td>{planetData.name}</Td>
          </Tr>
          <Tr>
            <Td>Planet - Terrain</Td>
            <Td>{planetData.terrain}</Td>
          </Tr>
          <Tr>
            <Td>Planet - Climate</Td>
            <Td>{planetData.climate}</Td>
          </Tr>
          <Tr>
            <Td>Planet - Population</Td>
            <Td>{planetData.population}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
