import { Avatar, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TopNav = () => {
  return (
    <Flex
      align="center"
      boxShadow="0px 12px 23px 0px rgba(112, 112, 112, 0.04)"
      justify="space-between"
      px="2rem"
      py=".8rem"
      bg="white"
      borderRadius="xl"
    >
      <Heading>TEACON Admin</Heading>
      <Flex align="center" gap={2}>
        <Avatar.Root>
          <Avatar.Fallback name="Admin" />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontSize="md" fontWeight="semibold">
            D114 Admin
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default TopNav;
