import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Breadcrumb } from "antd";
import React from "react";
import DataTable from "./dataTable";

const Order = () => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl" mb={5}>
          Orders
        </Text>
        <Box>{/* <AddButton /> */}</Box>
      </Flex>
      <DataTable></DataTable>
    </>
  );
};

export default Order;
