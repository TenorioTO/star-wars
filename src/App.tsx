import React, { useRef } from "react";
import { Box, Image, VStack } from "@chakra-ui/react";
import { CardsContainer } from "./components/cards";
import { Spacing } from "./shared/constants/spacing";

function App() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  return (
    <VStack p={Spacing.SPACE_M} gap={Spacing.SPACE_M}>
      <Box ref={headerRef}>
        <Image
          w={200}
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
        />
      </Box>

      <CardsContainer headerRef={headerRef} />
    </VStack>
  );
}

export default App;
