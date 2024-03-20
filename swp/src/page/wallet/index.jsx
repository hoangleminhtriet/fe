import React, { useEffect, useState } from "react";
import { Button, Table, Tag } from "antd";
import "./index.scss";
import api from "../../config/axios";
import { formatDistance } from "date-fns";
import { useSelector } from "react-redux";

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const Wallet = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [wallet, setWallet] = useState();
  const [transaction, setTransaction] = useState([]);
  const user = useSelector((store) => store.user);
  function formatCurrency(number) {
    // Check if the input is not a number or not a finite number
    if (isNaN(number) || !isFinite(number)) {
      return "Invalid input";
    }

    // Convert the number to a string and split it by thousands separator
    const parts = number.toString().split(".");

    // Extract the integer part and format it with commas
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Concatenate the integer part with the 'VND' suffix
    return formattedInteger + " VND";
  }
  const columns = [
    {
      title: "createAt",
      dataIndex: "createAt",
      render: (value) => formatDistance(new Date(value), new Date(), { addSuffix: true }),
    },
    {
      title: "Total",
      dataIndex: "money",
      render: (value, record) => {
        if (record.to && record.to.account && record.to.account.id == user.id) {
          return <Tag color="green">{`+${formatCurrency(value)}`}</Tag>;
        } else {
          return <Tag color="red">{`-${formatCurrency(value)}`}</Tag>;
        }
      },
    },
  ];

  const fetchWallet = async () => {
    const response = await api.get("/wallet");
    setWallet(response.data);
  };
  const fetchTransaction = async () => {
    const response = await api.get("/transaction");
    setTransaction(response.data);
  };

  useEffect(() => {
    fetchWallet();
    fetchTransaction();
  }, []);

  return (
    <>
      <div className="transaction">
        <div className="transaction-left">
          <h1>Balance Alerts</h1>
          <h2>{formatCurrency(wallet?.total)}</h2>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={transaction.sort((item1, item2) => new Date(item2.createAt) - new Date(item1.createAt))}
      />
    </>
  );
};
export default Wallet;
