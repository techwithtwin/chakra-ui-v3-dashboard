import { Sidebar, TopNav } from "@/components/admin";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "auto 1fr" }}
      gap={6}
      h="100vh"
      bg="#F4F6FA"
    >
      <GridItem
        p="1.5rem"
        overflow="hidden"
        bg="white"
        hideBelow="md"
        boxShadow="0px 12px 23px 0px rgba(112, 112, 112, 0.04)"
      >
        <Sidebar />
      </GridItem>
      <GridItem p="1.5rem" spaceY="2rem" overflowY="auto" scrollbar="hidden">
        <TopNav />
        <Box as="main">{children}</Box>
      </GridItem>
    </Grid>
  );
};

export default AdminLayout;
