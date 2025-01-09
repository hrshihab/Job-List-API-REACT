import { Button, Card, Form, Input, Row, Typography } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";

const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();

  const onFinish = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    const toastId = toast.loading("Registering...");

    try {
      // Prepare the JSON payload for registration
      const registerData = {
        username: values.username,
        email: values.email,
        password: values.password,
        role: "admin", // Default role
      };
      console.log(registerData);
      await registerUser(registerData).unwrap();
      toast.success("Registration successful! Redirecting to login...", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong during registration.", {
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
          Register
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="Enter your username" size="large" />
          </Form.Item>
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
            Register
          </Button>
        </Form>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <span>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1890ff" }}>
              Log in here
            </Link>
          </span>
        </div>
      </Card>
    </Row>
  );
};

export default Register;
