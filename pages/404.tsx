import { Button, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const NotFoundPage = () => {
  return (
    <VStack spacing={2} justify="center" h="100vh">
      <Heading>404 Not found</Heading>
      <Divider />
      <Text>Ta strona nie istnieje!</Text>
      <NextLink href="/" passHref>
        <Button colorScheme="gray" size="md">
          Wróc do strony głównej
        </Button>
      </NextLink>
    </VStack>
  );
};

export default NotFoundPage;
