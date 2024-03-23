import React, { useEffect, useState } from "react";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import api from "../../config/axios";
import { Link as RouterLink } from "react-router-dom";

const ChooseProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await api.get(`/profile/getHost`);
      // Filter out profiles where isDeleted is true
      const filteredProfiles = response.data.filter((profile) => !profile.deleted);
      setProfiles(filteredProfiles);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {profiles.map((profile, index) => (
          <Link key={index} to={`/booking/${profile.id}`}>
            <Card
              style={{
                width: 300,
                height: 150,
                margin: 20,
                transition: "box-shadow 0.3s",
                boxShadow: "none",
                borderRadius: 10,
              }}
              hoverable
              onClick={() => handleProfileSelect(profile)}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 10px lightblue")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Card.Meta
                avatar={<Avatar src={profile.avatar} size={90} style={{ marginRight: 20 }} />}
                title={<div style={{ marginBottom: 10 }}>{profile.fullName}</div>}
                description={profile.email}
              />
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ChooseProfile;
