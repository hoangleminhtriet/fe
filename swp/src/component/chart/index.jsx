import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import api from "../../config/axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart of revenue and customer statistics by month",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export function Chart() {
  const [dashboard, setDashboard] = useState();
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "revenue",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: " customers",
        data: labels.map(() => Math.floor(Math.random() * 100) + 1),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const fetchData = async () => {
    const response = await api.get("/dashboard/admin/detail");
    setDashboard(response.data);
    setData({
      labels,
      datasets: [
        {
          label: "revenue",
          data: response.data.monthlyOrder,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: " customers",
          data: response.data.monthlyRevenue,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    });
    console.log({
      labels,
      datasets: [
        {
          label: "revenue",
          data: response.data.monthlyOrder,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: " customers",
          data: response.data.monthlyRevenue,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Line options={options} data={data} />;
}
