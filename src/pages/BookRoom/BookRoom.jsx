import React, { useState } from 'react';
import { 
  Row, 
  Col, 
  Card, 
  Form, 
  Input, 
  Select, 
  DatePicker, 
  TimePicker, 
  Button, 
  Modal, 
  Checkbox, 
  Space, 
  Tag,
  message,
  Divider,
  Tooltip
} from 'antd';
import { 
  SearchOutlined, 
  CalendarOutlined, 
  ClockCircleOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './BookRoom.scss';

const { Option } = Select;
const { RangePicker } = TimePicker;

// Mock data for demonstration
const mockRooms = [
  {
    id: 1,
    location: 'LTK',
    name: 'Room A1.01',
    building: 'A1',
    roomType: 'grp',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer'],
    image: 'https://via.placeholder.com/300x200?text=Room+A1.01'
  },
  {
    id: 2,
    location: 'LTK',
    name: 'Room A1.02',
    building: 'A1',
    roomType: 'idv',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC'],
    image: 'https://via.placeholder.com/300x200?text=Room+A1.02'
  },
  {
    id: 3,
    location: 'LTK',
    name: 'Room A1.03',
    building: 'A1',
    roomType: 'idv',
    status: 'occupied',
    equipment: ['Whiteboard', 'AC'],
    image: 'https://via.placeholder.com/300x200?text=Room+A1.03'
  },
  {
    id: 4,
    location: 'LTK',
    name: 'Room A1.04',
    building: 'A1',
    roomType: 'grp',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer', 'Interactive Screen'],
    image: 'https://via.placeholder.com/300x200?text=Room+A1.04'
  },
  {
    id: 5,
    location: 'LTK',
    name: 'Room A1.05',
    building: 'A1',
    roomType: 'grp',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer'],
    image: 'https://via.placeholder.com/300x200?text=Room+A1.05'
  },
  {
    id: 6,
    location: 'DA',
    name: 'Room A2.01',
    building: 'A2',
    roomType: 'idv',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC'],
    image: 'https://via.placeholder.com/300x200?text=Room+A2.01'
  },
  {
    id: 7,
    location: 'DA',
    name: 'Room A2.02',
    building: 'A2',
    roomType: 'grp',
    status: 'occupied',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer'],
    image: 'https://via.placeholder.com/300x200?text=Room+A2.02'
  },
  {
    id: 8,
    location: 'DA',
    name: 'Room A2.03',
    building: 'A2',
    roomType: 'idv',
    status: 'available',
    equipment: ['Whiteboard', 'AC'],
    image: 'https://via.placeholder.com/300x200?text=Room+A2.03'
  },
  {
    id: 9,
    location: 'LTK',
    name: 'Room B1.01',
    building: 'B1',
    roomType: 'grp',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer', 'Interactive Screen'],
    image: 'https://via.placeholder.com/300x200?text=Room+B1.01'
  },
  {
    id: 10,
    location: 'LTK',
    name: 'Room B1.02',
    building: 'B1',
    roomType: 'idv',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC'],
    image: 'https://via.placeholder.com/300x200?text=Room+B1.02'
  },
  {
    id: 11,
    location: 'DA',
    name: 'Room B1.03',
    building: 'B1',
    roomType: 'grp',
    status: 'occupied',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer'],
    image: 'https://via.placeholder.com/300x200?text=Room+B1.03'
  },
  {
    id: 12,
    location: 'DA',
    name: 'Room B1.04',
    building: 'B1',
    roomType: 'grp',
    status: 'available',
    equipment: ['Projector', 'Whiteboard', 'AC', 'Computer', 'Interactive Screen'],
    image: 'https://via.placeholder.com/300x200?text=Room+B1.04'
  }
];

const BookRoom = () => {
  const [form] = Form.useForm();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState(mockRooms);
  const [bookingForm] = Form.useForm();

  const handleSearch = (values) => {
    // In a real application, this would call an API
    const filteredRooms = mockRooms.filter(room => {
      const matchesLocation = !values.location || room.location === values.location;
      const matchesBuilding = !values.building || room.building === values.building;
      const matchesRoomType = !values.roomType || room.roomType === values.roomType;
      const matchesEquipment = !values.equipment || 
        values.equipment.every(eq => room.equipment.includes(eq));
      return matchesLocation && matchesBuilding && matchesRoomType && matchesEquipment;
    });
    setSearchResults(filteredRooms);
  };

  const handleBookRoom = (values) => {
    // In a real application, this would call an API
    message.success('Room booked successfully!');
    setIsModalVisible(false);
    form.resetFields();
  };

  const showRoomDetails = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
    // Reset and set initial values for the booking form
    bookingForm.resetFields();
    if (room.roomType === 'idv') {
      bookingForm.setFieldsValue({ participants: 1 });
    }
  };

  return (
    <div className="book-room">
      <Header />
      <div className="book-room__content">
        <div className="book-room__header">
          <h1>Book a Study Room</h1>
          <p>Find and book available study rooms for your group</p>
        </div>

        <Card className="book-room__filters">
          <Form
            form={form}
            onFinish={handleSearch}
            layout="vertical"
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Form.Item name="location" label="Location">
                  <Select placeholder="Select location" allowClear>
                    <Option value="LTK">Ly Thuong Kiet</Option>
                    <Option value="DA">Di An</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item name="building" label="Building">
                  <Select placeholder="Select building" allowClear>
                    <Option value="A1">Building A1</Option>
                    <Option value="A2">Building A2</Option>
                    <Option value="B1">Building B1</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item name="roomType" label="Room type">
                  <Select placeholder="Select type" allowClear>
                    <Option value="idv">Individual</Option>
                    <Option value="grp">Group</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item name="equipment" label="Required Equipment">
                  <Select mode="multiple" placeholder="Select equipment" allowClear>
                    <Option value="Projector">Projector</Option>
                    <Option value="Whiteboard">Whiteboard</Option>
                    <Option value="AC">Air Conditioner</Option>
                    <Option value="Computer">Computer</Option>
                    <Option value="Interactive Screen">Interactive Screen</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon={<SearchOutlined />}
                    block
                  >
                    Search Rooms
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <div className="book-room__results">
          <Row gutter={[16, 16]}>
            {searchResults.map(room => (
              <Col xs={24} sm={12} md={8} key={room.id}>
                <Card 
                  className="book-room__card"
                  cover={<img alt={room.name} src={room.image} />}
                  onClick={() => showRoomDetails(room)}
                >
                  <div className="book-room__card-content">
                    <div className="book-room__card-header">
                      <h3>{room.name}</h3>
                      <Tag color={room.status === 'available' ? 'success' : 'error'}>
                        {room.status === 'available' ? 'Available' : 'In-use'}
                      </Tag>
                    </div>
                    
                    <div className="book-room__card-details">
                      <p><UserOutlined /> Type: {room.roomType === 'idv' ? 'Individual' : 'Group'}</p>
                      <p>Location: {room.location === 'LTK' ? 'Ly Thuong Kiet' : 'Di An'}</p>
                      <p>Building {room.building}</p>
                      <div className="book-room__equipment">
                        {room.equipment.map((eq, index) => (
                          <Tag key={index}>{eq}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Modal
          title="Book Room"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={800}
        >
          {selectedRoom && (
            <div className="book-room__modal">
              <div className="book-room__modal-header">
                <img src={selectedRoom.image} alt={selectedRoom.name} />
                <div className="book-room__modal-info">
                  <h2>{selectedRoom.name}</h2>
                  <p>Location: {selectedRoom.location === 'LTK' ? 'Ly Thuong Kiet' : 'Di An'}</p>
                  <p>Building {selectedRoom.building}</p>
                  <div className="book-room__equipment">
                    {selectedRoom.equipment.map((eq, index) => (
                      <Tag key={index}>{eq}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />

              <Form
                form={bookingForm}
                layout="vertical"
                onFinish={handleBookRoom}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="date"
                      label="Date"
                      rules={[{ required: true, message: 'Please select a date' }]}
                    >
                      <DatePicker 
                        style={{ width: '100%' }}
                        suffixIcon={<CalendarOutlined />}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="time"
                      label="Time Slot"
                      rules={[{ required: true, message: 'Please select a time slot' }]}
                    >
                      <RangePicker 
                        style={{ width: '100%' }}
                        format="HH:mm"
                        suffixIcon={<ClockCircleOutlined />}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="purpose"
                  label="Purpose"
                  rules={[{ required: true, message: 'Please enter the purpose' }]}
                >
                  <Input.TextArea rows={3} placeholder="Enter the purpose of your booking" />
                </Form.Item>

                <Form.Item
                  name="participants"
                  label="Number of Participants"
                  rules={[{ required: true, message: 'Please enter the number of participants' }]}
                >
                  <Input 
                    type="number" 
                    min={1} 
                    max={selectedRoom.roomType === 'grp' ? 30 : 1}
                    disabled={selectedRoom.roomType === 'idv'}
                    value={selectedRoom.roomType === 'idv' ? 1 : undefined}
                  />
                </Form.Item>

            

                <Form.Item
                  name="notes"
                  label="Additional Notes"
                >
                  <Input.TextArea rows={3} placeholder="Any special requirements or notes" />
                </Form.Item>

                <div className="book-room__modal-footer">
                  <Tooltip title="You can cancel your booking up to 1 hour before the scheduled time">
                    <p className="book-room__cancellation-policy">
                      <InfoCircleOutlined /> Cancellation Policy
                    </p>
                  </Tooltip>
                  <Button type="primary" htmlType="submit" block>
                    Book Now
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default BookRoom; 