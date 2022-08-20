import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuBtn = () => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} colorScheme="pink">
        Otwórz menu
      </MenuButton>
      <MenuList>
        <NextLink href="/" passHref>
          <MenuItem as="a">Strona główna</MenuItem>
        </NextLink>
        <NextLink href="/collect-rubbish" passHref>
          <MenuItem as="a">Wywóz śmieci</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
};

export default MenuBtn;
