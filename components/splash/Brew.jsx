import { Flex, Text, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  /* background-color: #2b2c34; */
  padding-bottom: 2rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  text-align: left;
  margin-bottom: 1rem;
  color: ${theme.colors.bodyHorrorGreen};
  text-shadow: ${theme.colors.bodyHorrorRed} 2px 5px;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.garamond};
  text-align: left;
  margin-bottom: 1rem;
`;

const StyledPopupButton = styled(Button)`
  font-family: ${theme.fonts.heading};
  background-color: ${theme.colors.bodyHorrorRed};
  color: black;
  font-size: 24px;
  font-weight: 500;
  border-radius: 0px;
  padding: 16px 36px;
  margin-top: 2rem;
  filter: drop-shadow(5px 5px ${theme.colors.bodyHorrorGreen});

  :hover {
    opacity: 0.85;
  }
`;

const StyledLink = styled.a`
  color: ${theme.colors.bodyHorrorRed};
  opacity: 1;
  :hover {
    opacity: 0.85;
  }
`;

export const Brew = () => {
  return (
    <StyledContainer
      px={{ lg: "8rem", md: "4rem", base: "2rem" }}
      mb={{ md: "5rem", base: "1rem" }}
    >
      <Flex w="100%" direction="column" justifyContent="space-between">
        <StyledHeading fontSize={{ xl: "54px", lg: "44px", base: "36px" }}>
          Brew a Batch
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
          Brood brews custom batches for communities, conferences, and other
          events.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
          Our team of beer experts work to concoct the perfect brew for you. Our
          master brewers capture the tastes and notes that encapsulate what you
          want to do with your brew. Our designers create a logo that
          communicates your brew&apos;s essence. Our developers create an NFT
          for your brew. Our writers pick the perfect words to describe the lore
          of your brew.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
          Collaborators include{" "}
          <StyledLink href="https://www.raidguild.org/">Raid Guild</StyledLink>
          {", "}
          <StyledLink href="https://decentdao.org/">Decent</StyledLink>
          {", "}
          <StyledLink href="https://greenpill.party/">
            GreenPill Podcast
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://www.sporkdao.org/">
            SporkDAO/ETHDenver
          </StyledLink>
          .
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
          Join us in fueling the fight against Moloch by brewing a batch for
          you!
        </StyledBodyText>
      </Flex>
      <a
        href="https://app.deform.cc/form/c55b412d-f036-4149-8351-ef8155d85432/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledPopupButton size="xl">Contact Us</StyledPopupButton>
      </a>
    </StyledContainer>
  );
};
