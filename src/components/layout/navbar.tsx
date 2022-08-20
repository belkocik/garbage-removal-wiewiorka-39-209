import { HStack, Box, Container } from "@chakra-ui/react";
import ThemeButton from "@/components/theme-button";
import MenuBtn from "@/components/menu-button";

const Navbar = () => {
  return (
    <Box
      zIndex={100}
      as="header"
      display="inline-block"
      position="fixed"
      w="100%"
      sx={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Box w="100%" left={0} top={0}>
        <Container maxW="8xl">
          <HStack w="100%" justify="space-between" p={4}>
            <ThemeButton />
            <MenuBtn />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
