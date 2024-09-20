import {
  Link,
  Image,
  Center,
  VStack,
  HStack,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

import { MEDIA_FILES } from "../../utils/constants";

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
  color: ${theme.colors.bodyHorrorGreen};
`;

const LogoHeader = ({ path }) => {
  return (
    <VStack w={"100%"} py={"1em"}>
      <HStack w={"80%"}>
        <NextLink href="/" passHref>
          <StyledLink>
            <Heading>BROOD.BEER</Heading>
          </StyledLink>
        </NextLink>
        <Spacer />
        <HStack justifyContent={"flex-end"} gap={2}>
          <Link href="https://discord.gg/XKGM8u8XTQ" isExternal>
            <Image
              src={MEDIA_FILES.icons.discord}
              alt="discord"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
          <Link href="https://twitter.com/RaidBrood" isExternal>
            <Image
              src={MEDIA_FILES.icons.twitter}
              alt="twitter"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
        </HStack>
      </HStack>

      <Center>
        <Image src={path} objectFit="contain" boxSize={"md"} alt="drink logo" />
      </Center>
    </VStack>
  );
};

export default LogoHeader;
