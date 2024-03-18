import React from "react";
import { Button, Col, Row, Statistic } from "antd";
import { JavaOutlined } from "@ant-design/icons";
import { Chart } from "../../component/chart";
import { icons } from "antd/es/image/PreviewGroup";
export const Report = () => {
  return (
    <>
      <Row gutter={18}>
        <Col span={6}>
          <Statistic title="Active Users" value={112893} prefix={<JavaOutlined />}/>
        </Col>
        <Col span={6}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        </Col>
        <Col span={6}>
          <Statistic title="vcl (CNY)" value={112893} precision={2} />
        </Col>
        <Col span={6}>
          <Statistic title="haha(CNY)" value={112893} precision={2} />
        </Col>
        
        <Chart />
      </Row>
    </>
  );
};
export default Report;
