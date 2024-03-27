import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./package.css";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { updatePackage } from "../../redux/features/bookingSlice";
import { useParams } from "react-router-dom";

export const ChoosePackage = () => {
  const params = useParams();
  const [packages, setPackages] = useState([]);
  const selectedPackages = useSelector((store) => store?.booking?.package);

  const fetchPackages = async () => {
    const response = await api.get(`/package/getPackages/${params.id}`);
    setPackages(response.data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      {packages
        .filter((item) => !item.deleted)
        .map((item) => (
          <Package data={item} isSelected={item?.id === selectedPackages?.id} />
        ))}
    </>
  );
};

const Package = ({ isSelected, data }) => {
  const dispatch = useDispatch();

  const handleSelectPackage = () => {
    dispatch(updatePackage(data));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  };

  return (
    <div className={`package ${isSelected ? "select" : ""}`} onClick={handleSelectPackage}>
      <Row>
        <Col span={5}>
          <Image width={200} src={data.picture} />
        </Col>
        <Col span={19}>
          <h1>{data.name}</h1>
          <p>
            <strong>Description:</strong> {data.description}
          </p>
          <p>
            <strong>Number of Guests:</strong> {data.capacity}
          </p>
          <ul>
            {data.services.map((item) => (
              <li>
                <strong> {item.serviceName} </strong>- Price: {formatCurrency(item.price)}
                <Col span={8}>
                  <Image width={150} height={150} src={item.picture} />
                </Col>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePackage;
