"use client";
import {
  Box,
  Button,
  Flex,
  Stack,
  StackSeparator,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const AdminSidebar = () => {
  const pathname = usePathname();

  const isActiveTab = (path: string): boolean => {
    return pathname === path;
  };
  return (
    <Stack w="12rem" h="100%" separator={<StackSeparator />} gap="1rem">
      <Link href="/">
        <Box h="3rem" overflow="hidden" mb="2rem">
          <Image src="/logo.png" width={200} height={70} alt="Logo" />
        </Box>
      </Link>

      <Stack overflowY="auto" gap=".5rem" separator={<StackSeparator />}>
        {sidebarItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <Flex
              align="center"
              gap={2}
              p="1rem"
              borderRadius="xl"
              color={isActiveTab(item.href) ? "white" : "black"}
              bg={isActiveTab(item.href) ? "green" : "transparent"}
              _hover={{
                bg: "green",
                color: "white",
              }}
            >
              <Box asChild boxSize={6}>
                {item.icon}
              </Box>
              <Text fontSize="md" fontWeight="semibold">
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Stack>
      <Button mt="auto" colorPalette="red" size="lg">
        <IoLogOutSharp /> Logout
      </Button>
    </Stack>
  );
};

export default AdminSidebar;

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <MdDashboard />,
  },

  {
    label: "Settings",
    href: "/admin/settings",
    icon: <IoMdSettings />,
  },
];
