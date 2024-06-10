import React, { RefObject, useMemo } from "react";
import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Card } from "./Card";
import { useGetAllPeople } from "../../hooks/useGetAllPeople";
import { FIcon } from "../icon";
import { Spacing } from "../../shared/constants/spacing";
import { useGetAllSpecies } from "../../hooks/useGetAllSpecies";
import { randomColours } from "../../shared/helpers/randomColours";
import { ColorBySpecie } from "../../shared/interfaces/color";

export const CardsContainer = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLHeadingElement>;
}) => {
  const [pageUrl, setPage] = React.useState<string | undefined>();
  const { data, isLoading, error } = useGetAllPeople(pageUrl);
  const { data: speciesData } = useGetAllSpecies();

  const footerRef = React.useRef<HTMLDivElement>(null);

  // create a new colour map for each species
  const speciesColor: ColorBySpecie[] = useMemo(() => {
    if (speciesData?.results) {
      return speciesData.results.map((specie) => {
        const addColor = {
          name: specie.name,
          color: randomColours(),
        };
        return addColor;
      });
    }

    return [];
  }, [speciesData?.results]);

  const handleNext = () => {
    if (data?.next) {
      setPage(data.next);
    }
  };

  const handlePrev = () => {
    if (data?.previous) {
      setPage(data.previous);
    }
  };

  if (error) {
    return null;
  }

  if (isLoading) {
    return (
      <Box width={"300px"}>
        <Image
          m="auto"
          src="https://media.tenor.com/K4VZA4GtaTgAAAAi/t-shirogane-babyyodaline.gif"
        />
      </Box>
    );
  }

  return (
    <>
      <Grid
        gap={Spacing.SPACE_M}
        pb={Spacing.SPACE_M}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        backgroundColor={"#f2f2f2"}
        w={"100vw"}
        h={`calc(100vh - (${headerRef.current?.clientHeight}px + ${footerRef.current?.clientHeight}px))`}
        p={Spacing.SPACE_L}
      >
        {data?.results?.map((person, i) => (
          <Card
            key={i + person.name}
            name={person.name}
            specieColor={speciesColor}
            specieUrl={person.species[0]}
          />
        ))}
      </Grid>

      <Flex justifyContent={"center"} gap={Spacing.SPACE_S}>
        {data?.previous && (
          <Button
            colorScheme="white"
            leftIcon={<FIcon icon={faArrowLeft} />}
            onClick={handlePrev}
          >
            Prev
          </Button>
        )}
        {data?.next && (
          <Button
            colorScheme="white"
            rightIcon={<FIcon icon={faArrowRight} />}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Flex>
    </>
  );
};
