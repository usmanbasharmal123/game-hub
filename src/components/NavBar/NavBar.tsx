import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import ColorModeSwtich from "../ColorModeSwtich";
import SearchInput from "../SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" />
      <SearchInput />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
