import React, { useEffect, useState } from "react";
import { Avatar, List } from "antd";
import { Link } from "react-router-dom"; // Import Link for navigation
import api from "../../config/axios";
import { Link as RouterLink } from "react-router-dom";

const ChooseProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null); // New state to store selected profile

  const fetchProfiles = async () => {
    try {
      const response = await api.get(`/profile/getHost`);
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile); // Set the selected profile
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 50,
          fontWeight: 1000,
        }}
      >
        List Party Host
      </h1>

      <Link
        as={RouterLink}
        to="/customer"
        style={{
          color: "red",
          fontSize: 15,
          fontWeight: 1000,
          padding: 30,
        }}
      >
        Back to home &gt;
      </Link>

      <List
        itemLayout="horizontal"
        dataSource={profiles}
        renderItem={(profile, index) => (
          <Link to={`/booking/${profile.id}`}>
            <List.Item onClick={() => handleProfileSelect(profile)}>
              <List.Item.Meta
                avatar={<Avatar src={profile.avatar} />}
                title={<a>{profile.fullName}</a>}
                description={<a>{profile.email}</a>}
              />
            </List.Item>
          </Link>
        )}
      />
    </>
  );
};

export default ChooseProfile;
