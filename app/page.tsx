import { Button, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Flex h="100vh" w="100vw" align="center" justify="center">
      <Stack align="center">
        <Link href="/admin">
          <Button colorPalette="red" size="xl">
            Chakra admin Dashboard Click to visit
          </Button>
        </Link>
        <a href="https://github.com/techwithtwin" target="_blank">
          <Button>
            © TechWithTwin <FaGithub />
          </Button>
        </a>
      </Stack>
    </Flex>
  );
}
