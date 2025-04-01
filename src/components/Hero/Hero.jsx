import React from 'react';
import { Button, Card, Row, Col, Statistic } from 'antd';
import { CalendarOutlined, SearchOutlined, ToolOutlined, ClockCircleOutlined, TeamOutlined } from '@ant-design/icons';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Smart Learning Space Management System
        </h1>
        <p className="hero__description">
          Efficiently manage and book study spaces at HCMUT. Access modern facilities,
          equipment, and create the perfect environment for your learning journey.
        </p>
      </div>

      <Row gutter={[24, 24]} className="hero__actions">
        <Col xs={24} sm={12} md={8}>
          <Card className="hero__action-card">
            <Button type="primary" size="large" block icon={<CalendarOutlined />}>
              Book a Room
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="hero__action-card">
            <Button size="large" block icon={<SearchOutlined />}>
              Check Availability
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="hero__action-card">
            <Button size="large" block icon={<ToolOutlined />}>
              Equipment Reservation
            </Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="hero__stats">
        <Col xs={24} sm={12} md={6}>
          <Card className="hero__stat-card">
            <Statistic
              title="Available Rooms"
              value={12}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="hero__stat-card">
            <Statistic
              title="Current Users"
              value={156}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="hero__stat-card">
            <Statistic
              title="Peak Hours"
              value="9AM - 5PM"
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="hero__stat-card">
            <Statistic
              title="Equipment Available"
              value={45}
              prefix={<ToolOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Hero; 