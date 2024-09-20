import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type LoreProps = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

const Lore = ({ first, second, third, fourth }: LoreProps) => {
  return (
    <Center w={"100%"}>
      <VStack maxW={"750px"} py={"1rem"}>
        <Heading textAlign={"left"} color={theme.colors.bodyHorrorGreen}>
          Lore
        </Heading>
        <Box w={"75%"} fontSize="24px">
          <Text w={"100%"}>{first}</Text>
          <br />
          <Text w={"100%"}>{second}</Text>
          <br />
          <Text w={"100%"}>{third}</Text>
          <br />
          <Text w={"100%"}>{fourth}</Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Lore;
