import React from "react";
import { Card, Tabs, Tag } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined } from '@ant-design/icons';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./History.scss";

const { TabPane } = Tabs;

const History = () => {
  const roomHistory = [
    {
      date: "10/04/2025",
      building: "A1",
      room: "A1.01",
      time: "Tiết 1-3",
      status: "Đang sử dụng",
      purpose: "Họp nhóm"
    },
    {
      date: "09/04/2025",
      building: "B1",
      room: "B1.02",
      time: "Tiết 4-6",
      status: "Đang chờ xử lý",
      purpose: "Thảo luận"
    },
    {
      date: "08/04/2025",
      building: "A2",
      room: "A2.03",
      time: "Tiết 7-9",
      status: "Đã hoàn thành",
      purpose: "Học nhóm"
    }
  ];

  const equipmentHistory = [
    {
      date: "10/04/2025",
      equipment: "Microphone",
      quantity: 2,
      time: "Tiết 1-3",
      status: "Đã hoàn thành",
      purpose: "Thuyết trình"
    },
    {
      date: "09/04/2025",
      equipment: "Projector",
      quantity: 1,
      time: "Tiết 4-6",
      status: "Đang chờ xử lý",
      purpose: "Trình chiếu"
    },
    {
      date: "08/04/2025",
      equipment: "Laptop",
      quantity: 1,
      time: "Tiết 7-9",
      status: "Đang sử dụng",
      purpose: "Làm việc nhóm"
    }
  ];

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

  const renderHistoryItem = (item) => (
    <div className="history__item">
      <div className="history__item-header">
        <div className="history__item-date">{item.date}</div>
        {getStatusTag(item.status)}
      </div>
      <div className="history__item-details">
        <div className="history__item-info">
          {item.building && (
            <>
              <p>Tòa nhà: {item.building}</p>
              <p>Phòng: {item.room}</p>
            </>
          )}
          {item.equipment && (
            <p>Thiết bị: {item.equipment} ({item.quantity})</p>
          )}
          <p>Thời gian: {item.time}</p>
        </div>
        <div className="history__item-purpose">
          <p>Mục đích: {item.purpose}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="history">
      <Header />
      <div className="history__content">
        <Card className="history__card">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Lịch sử phòng" key="1">
              <div className="history__list">
                {roomHistory.map((item, index) => (
                  <React.Fragment key={index}>
                    {renderHistoryItem(item)}
                  </React.Fragment>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Lịch sử thiết bị" key="2">
              <div className="history__list">
                {equipmentHistory.map((item, index) => (
                  <React.Fragment key={index}>
                    {renderHistoryItem(item)}
                  </React.Fragment>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default History; 