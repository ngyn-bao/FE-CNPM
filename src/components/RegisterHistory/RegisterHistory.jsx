import { Tabs } from "antd";
import React from "react";
import RegisteredItem from "../RegisteredItem/RegisteredItem";

const RegisterHistory = () => {
  const items = [
    { label: "Lịch sử đặt chỗ", key: 1, children: <RegisteredItem /> },
    { label: "Lịch sử đặt thiết bị", key: 2, children: <RegisteredItem /> },
  ];

  return (
    <div className="mx-20 mt-10 bg-white qr_section text-center">
      <div
        className="history_header py-4"
        style={{ backgroundColor: "#0a529c" }}
      >
        <h2 className="text-white uppercase font-semibold text-xl">
          lịch sử đăng ký
        </h2>
      </div>
      <div className="history_body relative bg-white px-60 py-20">
        <div className="border-2 border-t-0 border-black rounded-lg">
          <Tabs
            defaultActiveKey="1"
            type="card"
            size={"large"}
            style={{ marginBottom: 50 }}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterHistory;
