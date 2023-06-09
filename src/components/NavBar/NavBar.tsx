import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import ColorModeSwtich from "../ColorModeSwtich";
import SearchInput from "../SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
