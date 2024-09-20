import { useRouter } from "next/router";

import { Footer } from "../../shared/Footer";
import { Center, Flex, theme } from "@chakra-ui/react";
import Drinks from "../../utils/drinks.json";
import BeerInfo from "../../components/drink/BeerInfo";
import LogoHeader from "../../components/drink/LogoHeader";
import Lore from "../../components/drink/Lore";
import Label from "../../components/drink/Label";
import Badge from "../../components/drink/Badge";
import Steps from "../../components/drink/Steps";

export default function DrinkPage() {
  const router = useRouter();
  const { drink } = router.query;

  const copy = Drinks[drink as string];
  // TODO route to 404 or home
  if (!copy) {
    return <Center>Whoops...</Center>;
  }

  return (
    <Flex direction="column">
      <LogoHeader
        path={`/assets/drink/${drink}/logo.${
          drink === "seoulbound" ? "png" : "svg"
        }`}
      />
      <BeerInfo copy={copy} />
      <Badge path={`/assets/drink/${drink}/badge.svg`} />
      <Lore
        first={copy.lore.first}
        second={copy.lore.second}
        third={copy.lore.third}
        fourth={copy.lore.fourth}
      />
      <Label path={`/assets/drink/${drink}/label.svg`} />
      <Footer />
    </Flex>
  );
}
