import { Center, Image } from "@chakra-ui/react";

const Badge = ({ path }) => {
  return (
    <Center py={"1rem"} w={"100%"}>
      <Image src={path} boxSize={"sm"} alt="drink badge" />
    </Center>
  );
};

export default Badge;
