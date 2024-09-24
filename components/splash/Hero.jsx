import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { theme } from "../../styles/theme";
import Image from "next/image";

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeroText = styled(Text)`
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  text-align: center;
  margin-bottom: 2rem;
  color: ${theme.colors.bodyHorrorGreen};
  text-shadow: ${theme.colors.bodyHorrorRed} 2px 5px;
`;
const StyledSloganText = styled(Text)`
  font-family: ${theme.fonts.garamond};
  text-align: center;
  max-width: 85%;
`;
const StyledSloganTextUpper = styled(Text)`
  font-family: ${theme.fonts.garamond};
  text-align: center;
  max-width: 85%;
  text-transform: uppercase;
`;

export const Hero = () => {
  return (
    <StyledFlex
      px={{ lg: "5rem", md: "3rem", base: "1rem" }}
      py={{ md: "5rem", base: "3rem" }}
    >
      <StyledSloganTextUpper
        fontSize={{ lg: "32px", base: "18px" }}
        mb={{ base: "1rem", md: "3rem" }}
        fontWeight="700"
      >
        Beer for Slayers of Moloch
      </StyledSloganTextUpper>
      <Image
        src="/BROOD-LOGO-SVG.svg"
        alt="BROOD"
        width="500px"
        height="325px"
      />
      <StyledSloganTextUpper
        fontSize={{ lg: "24px", base: "18px" }}
        mt="3rem"
        mb="1rem"
      >
        RAIDGUILD&apos;s
      </StyledSloganTextUpper>
      <StyledHeroText
        fontSize={{ lg: "150px", md: "100px", base: "80px" }}
        lineHeight={{ lg: "150px", md: "100px", base: "80px" }}
      >
        BROOD
      </StyledHeroText>
      <StyledSloganText
        fontSize={{ lg: "28px", base: "18px" }}
        fontWeight="700"
      >
        Pooling our Web3 powers to conspire against Moloch in taverns around the
        world.
      </StyledSloganText>
      {/* <StyledSloganText fontSize={{ lg: "28px", base: "18px" }}>
        When the whacked hops takes a coffee break, a hops ceases to exist.
      </StyledSloganText> */}
      <br />
    </StyledFlex>
  );
};
