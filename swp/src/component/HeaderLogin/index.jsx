/* eslint-disable react/prop-types */
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import "./index.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { useEffect } from "react";
import { Avatar, Dropdown, Row } from "antd";
import { reset } from "../../redux/features/bookingSlice";

const HeaderLogin = ({ toggleOverview, toggleDiscount, toggleService, toggleContact }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const menu = [
    {
      key: "1",
      label: (
        <div>
          <Link to={"/profileCus"}>Profile</Link>
        </div>
      ),
    },

    {
      key: "2",
      label: (
        <div
          onClick={() => {
            dispatch(reset());
            dispatch(logout());
          }}
        >
          Log out
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (!user) {
      navigate("/"); // Use navigate function for navigation
    }
  }, [user, navigate]);
  return (
    <BootstrapNavbar expand="lg" className="main-nav">
      <Container>
        <NavLink className="button-header" to="/customer">
          <img className="logo-nav" alt="" src={Logo} />
        </NavLink>

        <BootstrapNavbar.Toggle aria-controls="navbar" />
        <BootstrapNavbar.Collapse className="nav-header nav-mobile" id="navbar">
          <Nav>
            <Button className="button-header" onClick={toggleOverview}>
              Overview
            </Button>
            <Button className="button-header" onClick={toggleDiscount}>
              Discount
            </Button>

            <Button className="button-header">
              <Link style={{ textDecoration: "none" }} className="button-header" to="/food">
                Food
              </Link>
            </Button>

            <Button className="button-header" onClick={toggleService}>
              Service
            </Button>
            <Button className="button-header" onClick={toggleContact}>
              Contact
            </Button>
            <Dropdown menu={{ items: menu }} placement="bottomRight">
              <Row align={"middle"}>
                <Avatar
                  style={{
                    marginRight: 10,
                  }}
                  size={40}
                  src={user?.avatar}
                />
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {user?.fullname}
                </div>
              </Row>
            </Dropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default HeaderLogin;
