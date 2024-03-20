import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

import { format, formatDistance } from "date-fns";
import api from "../../config/axios";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [rerenderKey, setRerenderKey] = useState(0);
  const forceRerender = () => {
    setRerenderKey(rerenderKey + 1);
  };
  const columns = [
    {
      title: "Customer",
      dataIndex: "Customer",
      key: "Customer",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "packageName",
    },

    {
      title: "Total price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Order date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Status",
      key: "orderStatus",
      dataIndex: "status",
      render: (_, record) => {
        let color = "green";
        if (record.status === "cancel") {
          color = "volcano";
        }
        if (record.status === "deposit") {
          color = "processing";
        }

        return (
          <Tag color={color} key={`status-${record.id}-${record.status}`}>
            {record.status?.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              handleAccept(record.id);
            }}
          >
            Finish
          </Button>
          <Button
            onClick={() => {
              handleRefuse(record.id);
            }}
          >
            Refuse
          </Button>
        </Space>
      ),
    },
  ];

  const handleRefuse = async () => {
    const response = await api.patch("/api/order/refuse");
    console.table(response.data);
    fetchData();
  };

  const handleAccept = async () => {
    const response = await api.patch("/api/order/accept");
    console.table(response.data);
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/api/order/orders");
      console.table(response.data);
      const responseData = response.data;
      setData(
        responseData
          .sort((item1, item2) => new Date(item2.createAt) - new Date(item1.createAt))
          .map((item) => {
            console.log(item.orderDate);
            return {
              id: item.id,
              Customer: item.account.fullName,
              phone: item.account.phoneNumber,
              //package: item.packageEntity.name,
              totalPrice: item.total,
              orderDate: formatDistance(new Date(item.createAt), new Date(), { addSuffix: true }),
              status: item.status,
            };
          })
      );
    };
    fetchData();
  }, [rerenderKey, setRerenderKey]);
  return <Table columns={columns} dataSource={data} />;
};
export default DataTable;
