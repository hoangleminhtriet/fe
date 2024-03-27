import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { Col, Image, Row } from "antd";
import "./package.css";
import { useDispatch, useSelector } from "react-redux";
import { selectService } from "../../redux/features/bookingSlice";
import { useParams } from "react-router-dom";
import { color } from "@chakra-ui/react";
export const ChooseServices = () => {
  const params = useParams();
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();
  const selectedServices = useSelector((store) => store.booking.services);
  const fetchServices = async () => {
    const response = await api.get(`/service/getService/host/${params.id}`);
    setServices(response.data);
    console.log(response);
  };

  const handleSelectService = (item) => {
    console.log(item);
    dispatch(selectService(item));
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="services">
      <Row gutter={[12, 12]}>
        {services
          .filter((item) => !item.isDeleted)
          .map((item) => (
            <Col
              span={4}
              onClick={() => {
                handleSelectService(item);
              }}
            >
              <Service data={item} isSelected={selectedServices?.map((item) => item.id).includes(item.id)} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

const Service = ({ isSelected, data }) => {
  return (
    <div className={`service-item-order ${isSelected ? "select" : ""}`}>
      <img src={data.picture} />
      <p>{data.serviceName}</p>
      <p>
        <strong style={{ color: "red" }}>{formatCurrency(data.price)} </strong>
      </p>
    </div>
  );
};

export default ChooseServices;
