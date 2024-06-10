import React, { useMemo } from "react";
import {
  Card as ChakraCard,
  CardBody,
  Image,
  Heading,
  useDisclosure,
  VStack,
  Box,
} from "@chakra-ui/react";

import { ColorBySpecie } from "../../shared/interfaces/color";
import { useGetSpecie } from "../../hooks/useGetSpecie";
import { getContrast70 } from "../../shared/helpers/getContrast50";
import { Modal } from "../modal";
import { SimpleTable } from "../table";
import { Spacing } from "../../shared/constants/spacing";

interface CardProps {
  name: string;
  specieColor: ColorBySpecie[];
  specieUrl: string;
}

export const Card = ({ name, specieUrl, specieColor }: CardProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: speciesData } = useGetSpecie(specieUrl);

  const bgColor = useMemo(() => {
    if (speciesData && specieColor) {
      return (
        specieColor.find((specie) => specie.name === speciesData.name)?.color ||
        undefined
      );
    }
    return undefined;
  }, [speciesData?.name, specieColor]);

  return (
    <>
      <ChakraCard
        w="15rem"
        backgroundColor={bgColor}
        sx={{
          _hover: {
            transform: "scale(1.05)",
            transition: "transform 0.2s",
          },
        }}
        onClick={onOpen}
        data-testid="card-${name}"
      >
        <CardBody>
          <VStack justifyContent={"center"}>
            <Box pb={Spacing.SPACE_S} h="3.2rem" textAlign={"center"}>
              <Heading size="md" color={getContrast70(bgColor)}>
                {name}
              </Heading>
            </Box>
            <Box as="span">
              <Image
                src={`https://picsum.photos/seed/${name}/200/300`}
                alt={name}
              />
            </Box>
          </VStack>
        </CardBody>
      </ChakraCard>

      <Modal title={name} isOpen={isOpen} onClose={onClose}>
        <SimpleTable name={name} />
      </Modal>
    </>
  );
};
