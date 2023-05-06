import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      {" "}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Orderby:Relevance
        </MenuButton>
        <MenuList>
          {/* {data.map((platform) => ( */}
          <MenuItem>
            {/* //   onClick={() => onSelectPlatform(platform)}
            //   key={platform.id}
            // >
            //   {platform.name} */}
            Relevance
          </MenuItem>
          {/* ))} */}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
