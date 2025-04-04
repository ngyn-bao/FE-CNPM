import React, { useState } from 'react';
import { Card, Row, Col, Typography, Tag, Space, Modal, Form, Input, Button, DatePicker, TimePicker } from 'antd';
import { 
  AudioOutlined, 
  VideoCameraOutlined, 
  SoundOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  CalendarOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import Header from '../../components/Header/Header';
import './Equipment.scss';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

// Mock data for equipment
const equipmentData = [
  {
    id: 1,
    name: 'Microphone',
    type: 'micro',
    total: 20,
    available: 15,
    icon: <AudioOutlined />,
    description: 'Wireless microphone for presentations and meetings'
  },
  {
    id: 2,
    name: 'Volume Control',
    type: 'volume',
    total: 15,
    available: 8,
    icon: <SoundOutlined />,
    description: 'Audio control system for room sound management'
  },
  {
    id: 3,
    name: 'Projector',
    type: 'projector',
    total: 10,
    available: 6,
    icon: <VideoCameraOutlined />,
    description: 'HD projector for presentations and video display'
  }
];

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showEquipmentDetails = (equipment) => {
    setSelectedEquipment(equipment);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleBorrow = (values) => {
    console.log('Borrow equipment:', values);
    // Here you would typically make an API call to process the borrowing
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="equipment">
      <Header />
      <div className="equipment__content">
        <div className="equipment__header">
          <Title level={1}>Equipment Borrowing</Title>
          <Text type="secondary">
            Check the availability of equipment for your study room
          </Text>
        </div>

        <Row gutter={[24, 24]} className="equipment__list">
          {equipmentData.map(item => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card 
                className="equipment__card"
                onClick={() => showEquipmentDetails(item)}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div className="equipment__card-header">
                    <div className="equipment__icon">
                      {item.icon}
                    </div>
                    <Title level={3}>{item.name}</Title>
                  </div>

                  <Text type="secondary">{item.description}</Text>

                  <div className="equipment__availability">
                    <Space>
                      <Tag color={item.available > 0 ? 'success' : 'error'}>
                        {item.available > 0 ? (
                          <CheckCircleOutlined /> 
                        ) : (
                          <CloseCircleOutlined />
                        )}
                        {item.available} Available
                      </Tag>
                      <Text type="secondary">of {item.total} total</Text>
                    </Space>
                  </div>

                  <div className="equipment__status">
                    {item.available > 0 ? (
                      <Text type="success">Available for borrowing</Text>
                    ) : (
                      <Text type="danger">Currently out of stock</Text>
                    )}
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title="Borrow Equipment"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={600}
        >
          {selectedEquipment && (
            <div className="equipment__modal">
              <div className="equipment__modal-info">
                <div className="equipment__modal-header">
                  <div className="equipment__icon">
                    {selectedEquipment.icon}
                  </div>
                  <Title level={3}>{selectedEquipment.name}</Title>
                </div>
                <Text type="secondary">{selectedEquipment.description}</Text>
                <div className="equipment__availability">
                  <Space>
                    <Tag color={selectedEquipment.available > 0 ? 'success' : 'error'}>
                      {selectedEquipment.available} Available
                    </Tag>
                    <Text type="secondary">of {selectedEquipment.total} total</Text>
                  </Space>
                </div>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleBorrow}
              >
                <Form.Item
                  name="date"
                  label="Date"
                  rules={[{ required: true, message: 'Please select the date' }]}
                >
                  <DatePicker 
                    style={{ width: '100%' }}
                    suffixIcon={<CalendarOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="time"
                  label="Time"
                  rules={[{ required: true, message: 'Please select the time' }]}
                >
                  <TimePicker.RangePicker 
                    style={{ width: '100%' }}
                    format="HH:mm"
                    suffixIcon={<ClockCircleOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="purpose"
                  label="Purpose"
                  rules={[{ required: true, message: 'Please enter the purpose' }]}
                >
                  <Input.TextArea 
                    rows={4} 
                    placeholder="Please describe the purpose of borrowing this equipment"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    block
                    disabled={selectedEquipment.available <= 0}
                  >
                    Borrow Equipment
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Equipment; 