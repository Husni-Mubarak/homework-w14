import { Flex, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Flex justifyContent="flex-start" bg="" padding="20px">
        <HStack spacing="5">
          <Link href="/">HOME</Link>
          <Link href="/add">ADD</Link>
          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default Navbar;
