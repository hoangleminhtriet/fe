import { Button, Checkbox, Flex, Form, Input } from "antd";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/axios";
import { Provider, useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

//import { provider } from "./config/firebase";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await api.post("/authentication/login", values);
      console.log(response);
      dispatch(login(response.data));
      toast.success("Login successfully");
      if (response.data.role == "CUSTOMER") {
        navigate("/customer");
      } else if (response.data.role == "HOST") {
        navigate("/dashboard");
      } else if (response.data.role == "ADMIN") {
        navigate("/dashboard");
      }

      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data);
    }
  };

  const loginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();
        const response = await api.post("/authentication/logingg", {
          token: token,
        });
        dispatch(login(response.data));
        toast.success("Login successfully");
        if (response.data.role == "CUSTOMER") {
          navigate("/customer");
        } else if (response.data.role == "HOST") {
          navigate("/dashboard");
        } else if (response.data.role == "ADMIN") {
          navigate("/dashboard");
        }
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="backgound">
      <div className="backgound-img">
        <img
          src="https://images.unsplash.com/photo-1517398741578-fc1e1a3c6c1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="form-box">
        <h1 style={{ color: "black" }}>Sign in</h1>
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={
            {
              //maxWidth: 600,
            }
          }
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox className="p1">Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <p className="p1">
              Don't have account? <Link to={"/register"}>Sign up</Link>
            </p>
            <div className="p1">
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </div>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div style={{ marginRight: "50%", width: "11em" }}>
              <Button onClick={loginGoogle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <img
                    width={20}
                    src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?rs=1&pid=ImgDetMain"
                    alt=""
                  />
                  Login with google
                </div>
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>

    // </div>
  );
};
export default Login;
