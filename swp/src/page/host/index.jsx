import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";

export const ChooseProfile = () => {
  const [profile, setProfile] = useState([]);
  const selectedProfile = useSelector((store) => store?.user?.id);

  const fetchProfile = async () => {
    const response = await api.get(`profile/getProfile`);
    setProfile(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      {profile.map((packages) => (
        <Profile data={packages} isSelected={packages.id === selectedProfile?.id} dispatch={dispatch} />
      ))}
    </>
  );
};

const Profile = ({ isSelected, data }) => {
  const dispatch = useDispatch();

  const handleSelectProfle = () => {
    dispatch(updateProfle(data));
  };

  return (
    <div className={`profle ${isSelected ? "select" : ""}`} onClick={handleSelectProfle}>
      <Row>
        <Col span={5}>
          <Image width={200} src={data.avatar} />
        </Col>
        <Col span={19}>
          <h1>{data.id}</h1>
          <p>{data.fullname}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ChooseProfile;
