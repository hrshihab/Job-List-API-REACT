/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllJobsQuery } from "../redux/features/admin/joblist.api"; // Adjust path
import { Card, List, Typography, Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const JobList = () => {
  const { data: jobs, isLoading, error } = useGetAllJobsQuery(undefined);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token logic
    sessionStorage.clear();
    navigate("/login");
  };

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Loading jobs...</Text>
      </div>
    );
  if (error)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text type="danger">Failed to fetch jobs.</Text>
      </div>
    );

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: "#1890ff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Title level={3} style={{ color: "#fff", margin: 0 }}>
          Job List
        </Title>
        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ borderRadius: "8px" }}
        >
          Logout
        </Button>
      </Header>

      {/* Content */}
      <Content style={{ padding: "20px 50px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={jobs}
            renderItem={(job: any) => (
              <List.Item>
                <Card
                  title={job.title}
                  bordered={false}
                  hoverable
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "#ffffff",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  bodyStyle={{ padding: "20px 24px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.15)";
                  }}
                >
                  <p>
                    <Text strong>Description:</Text> {job.description}
                  </p>
                  <p>
                    <Text strong>Created By:</Text> {job.createdBy}
                  </p>
                  <p>
                    <Text strong>Created At:</Text>{" "}
                    {new Date(job.createdAt).toLocaleString()}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default JobList;
