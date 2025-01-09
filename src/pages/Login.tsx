import { Button, Card, Form, Input, Row, Typography } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onFinish = async (values: { email: string; password: string }) => {
    const toastId = toast.loading("Logging in...");

    try {
      // Prepare the JSON payload for login
      const loginData = {
        email: values.email,
        password: values.password,
      };
      console.log(loginData);
      const res = await login(loginData).unwrap();
      console.log(res);
      const user = verifyToken(res.access) as TUser;
      dispatch(setUser({ user: user, token: res.access }));
      toast.success("Logged in successfully!", { id: toastId, duration: 2000 });
      navigate(`/job`);
    } catch (err) {
      toast.error("Invalid credentials or something went wrong.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Card
        style={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
          Login
        </Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            email: "test@gmail.com",
            password: "test",
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" size="large" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            style={{
              background: "#1890ff",
              borderColor: "#1890ff",
              borderRadius: 5,
            }}
          >
            Login
          </Button>
        </Form>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <span>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#1890ff" }}>
              Sign Up
            </Link>
          </span>
        </div>
      </Card>
    </Row>
  );
};

export default Login;
