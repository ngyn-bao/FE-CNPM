import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button, Card, Tabs, Tag, Modal, Divider, Typography, Row, Col } from "antd";
import { 
  UserOutlined, 
  IdcardOutlined, 
  BankOutlined, 
  HomeOutlined, 
  HistoryOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  SyncOutlined,
  KeyOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  ClockCircleFilled,
  QrcodeOutlined,
  InfoCircleOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./UserInfo.scss";

const { Option } = Select;
const { Title, Text } = Typography;

const UserInfo = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const navigate = useNavigate();

  const recentRoomHistory = [
    {
      id: "BK-R001",
      date: "10/04/2025",
      building: "A1",
      room: "A1.01",
      time: "Tiết 1-3",
      timeActual: "7:00 - 9:30",
      status: "Đang sử dụng",
      password: "A101-2504",
      purpose: "Học nhóm môn Công nghệ phần mềm",
      participants: 4,
      bookedBy: "Nguyễn Văn A",
      bookedAt: "08/04/2023 15:30"
    },
    {
      id: "BK-R002",
      date: "09/04/2025",
      building: "B1",
      room: "B1.02",
      time: "Tiết 4-6",
      timeActual: "10:00 - 12:30",
      status: "Đang chờ xử lý",
      purpose: "Thảo luận đồ án",
      participants: 6,
      bookedBy: "Nguyễn Văn A",
      bookedAt: "07/04/2023 9:15"
    },
    {
      id: "BK-R003",
      date: "09/04/2025",
      building: "B1",
      room: "B1.02",
      time: "Tiết 4-6",
      timeActual: "10:00 - 12:30",
      status: "Đã hoàn thành",
      password: "B102-0904",
      purpose: "Ôn tập cuối kỳ",
      participants: 3,
      bookedBy: "Nguyễn Văn A",
      bookedAt: "05/04/2023 14:20"
    }
  ];

  const recentEquipmentHistory = [
    {
      id: "BK-E001",
      date: "10/04/2025",
      equipment: "Microphone",
      quantity: 2,
      time: "Tiết 1-3",
      timeActual: "7:00 - 9:30",
      status: "Đã hoàn thành",
      password: "MIC-1004",
      purpose: "Thuyết trình môn học",
      bookedBy: "Nguyễn Văn A",
      bookedAt: "08/04/2023 10:45"
    },
    {
      id: "BK-E002",
      date: "08/04/2025",
      equipment: "Projector",
      quantity: 1,
      time: "Tiết 7-9",
      timeActual: "13:00 - 15:30",
      status: "Đang chờ xử lý",
      purpose: "Trình chiếu bài giảng",
      bookedBy: "Nguyễn Văn A",
      bookedAt: "06/04/2023 11:20"
    }
  ];

  const onFinish = (values) => {
    console.log('Success:', values);
    setDisabled(true);
  };

  const getStatusTag = (status) => {
    switch (status) {
      case "Đã hoàn thành":
        return (
          <Tag 
            color="success"
            icon={<CheckCircleOutlined />}
          >
            {status}
          </Tag>
        );
      case "Đang chờ xử lý":
        return (
          <Tag 
            color="processing"
            icon={<ClockCircleOutlined />}
          >
            {status}
          </Tag>
        );
      case "Đang sử dụng":
        return (
          <Tag 
            color="warning"
            icon={<SyncOutlined spin />}
          >
            {status}
          </Tag>
        );
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const handleBookingClick = (item, type) => {
    setSelectedBooking({...item, type});
    setBookingModalVisible(true);
  };

  const renderHistoryItem = (item, type) => (
    <div 
      className="user-info__history-item" 
      onClick={() => handleBookingClick(item, type)}
    >
      <div className="user-info__history-date">{item.date}</div>
      <div className="user-info__history-details">
        {item.building && (
          <>
            <span className="user-info__history-building">{item.building}</span>
            <span className="user-info__history-room">{item.room}</span>
          </>
        )}
        {item.equipment && (
          <span className="user-info__history-equipment">
            {item.equipment} ({item.quantity})
          </span>
        )}
      </div>
      {getStatusTag(item.status)}
    </div>
  );

  const renderBookingDetails = () => {
    if (!selectedBooking) return null;
    
    const isRoom = selectedBooking.type === 'room';
    const isPending = selectedBooking.status === "Đang chờ xử lý";
    
    return (
      <div className="booking-details">
        <div className="booking-details__header">
          <Title level={4}>{isRoom ? 'Chi tiết đặt phòng' : 'Chi tiết mượn thiết bị'}</Title>
          <Tag className="booking-details__id">{selectedBooking.id}</Tag>
        </div>
        
        <Divider />
        
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <div className="booking-details__status">
              {getStatusTag(selectedBooking.status)}
            </div>
          </Col>
          
          {isRoom ? (
            <>
              <Col span={12}>
                <div className="booking-details__item">
                  <div className="booking-details__label">
                    <EnvironmentOutlined /> Phòng
                  </div>
                  <div className="booking-details__value">
                    {selectedBooking.building} - {selectedBooking.room}
                  </div>
                </div>
              </Col>
            </>
          ) : (
            <Col span={12}>
              <div className="booking-details__item">
                <div className="booking-details__label">
                  <ToolOutlined /> Thiết bị
                </div>
                <div className="booking-details__value">
                  {selectedBooking.equipment} (x{selectedBooking.quantity})
                </div>
              </div>
            </Col>
          )}
          
          <Col span={12}>
            <div className="booking-details__item">
              <div className="booking-details__label">
                <CalendarOutlined /> Ngày
              </div>
              <div className="booking-details__value">
                {selectedBooking.date}
              </div>
            </div>
          </Col>
          
          <Col span={12}>
            <div className="booking-details__item">
              <div className="booking-details__label">
                <ClockCircleFilled /> Thời gian
              </div>
              <div className="booking-details__value">
                {selectedBooking.time} ({selectedBooking.timeActual})
              </div>
            </div>
          </Col>
          
          <Col span={12}>
            <div className="booking-details__item">
              <div className="booking-details__label">
                <UserOutlined /> Người đặt
              </div>
              <div className="booking-details__value">
                {selectedBooking.bookedBy}
              </div>
            </div>
          </Col>
          
          <Col span={24}>
            <div className="booking-details__item">
              <div className="booking-details__label">
                <InfoCircleOutlined /> Mục đích
              </div>
              <div className="booking-details__value purpose">
                {selectedBooking.purpose}
              </div>
            </div>
          </Col>
          
          {!isPending && (
            <>
              <Col span={24}>
                <Divider orientation="left">Thông tin truy cập</Divider>
              </Col>
              
              <Col span={12}>
                <div className="booking-details__item">
                  <div className="booking-details__label">
                    <KeyOutlined /> Mật khẩu
                  </div>
                  <div className="booking-details__value password">
                    {selectedBooking.password}
                  </div>
                </div>
              </Col>
              
              <Col span={24}>
                <div className="booking-details__qr">
                  <div className="booking-details__qr-title">
                    <QrcodeOutlined /> QR Code Check-in/out
                  </div>
                  <div className="booking-details__qr-image">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`CHECKIN-${selectedBooking.id}`)}`}
                      alt="QR Code" 
                    />
                  </div>
                  <Text type="secondary">Sử dụng QR code này để check-in và check-out</Text>
                </div>
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  };

  return (
    <div className="user-info">
      <Header />
      <div className="user-info__content">
        <Card 
          title="Thông tin cá nhân" 
          className="user-info__card"
          headStyle={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            disabled={disabled}
            initialValues={{
              name: "Nguyễn Văn A",
              studentId: "2012345",
              faculty: "cntt",
              gender: "male",
              address: "KTX Khu A, ĐHQG TPHCM"
            }}
          >
            <Form.Item
              name="name"
              label="Họ và tên"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="studentId"
              label="Mã số sinh viên"
              rules={[{ required: true, message: 'Vui lòng nhập mã số sinh viên' }]}
            >
              <Input prefix={<IdcardOutlined />} />
            </Form.Item>

            <Form.Item
              name="faculty"
              label="Khoa"
              rules={[{ required: true, message: 'Vui lòng chọn khoa' }]}
            >
              <Select>
                <Option value="cntt">Công nghệ thông tin</Option>
                <Option value="dtvt">Điện tử viễn thông</Option>
                <Option value="khmt">Khoa học máy tính</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="gender"
              label="Giới tính"
              rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
            >
              <Select>
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="birthday"
              label="Ngày sinh"
              rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            >
              <Input prefix={<HomeOutlined />} />
            </Form.Item>

            {!disabled && (
              <Form.Item>
                <div className="user-info__actions">
                  <Button type="primary" htmlType="submit">
                    Xác nhận
                  </Button>
                  <Button onClick={() => setDisabled(true)}>
                    Hủy
                  </Button>
                </div>
              </Form.Item>
            )}
          </Form>

          {disabled && (
            <Button 
              type="primary" 
              onClick={() => setDisabled(false)}
              className="user-info__edit-button"
            >
              Chỉnh sửa thông tin
            </Button>
          )}
        </Card>

        <Card 
          title="Lịch sử đăng ký gần đây" 
          className="user-info__card user-info__history"
          headStyle={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
          extra={
            <Button 
              type="link" 
              icon={<HistoryOutlined />}
              onClick={() => navigate('/history')}
            >
              Xem chi tiết
            </Button>
          }
        >
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: '1',
                label: 'Phòng học',
                children: (
                  <div className="user-info__history-list">
                    {recentRoomHistory.length > 0 ? (
                      recentRoomHistory.map((item, index) => renderHistoryItem(item, 'room'))
                    ) : (
                      <p>Bạn chưa có lịch sử đăng ký phòng học</p>
                    )}
                  </div>
                ),
              },
              {
                key: '2',
                label: 'Thiết bị',
                children: (
                  <div className="user-info__history-list">
                    {recentEquipmentHistory.length > 0 ? (
                      recentEquipmentHistory.map((item, index) => renderHistoryItem(item, 'equipment'))
                    ) : (
                      <p>Bạn chưa có lịch sử đăng ký thiết bị</p>
                    )}
                  </div>
                ),
              }
            ]}
          />
        </Card>
      </div>

      <Modal
        open={bookingModalVisible}
        onCancel={() => setBookingModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setBookingModalVisible(false)}>
            Đóng
          </Button>
        ]}
        width={600}
        className="booking-details-modal"
        title={null}
      >
        {renderBookingDetails()}
      </Modal>
    </div>
  );
};

export default UserInfo; 