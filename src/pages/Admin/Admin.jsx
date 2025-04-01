import { BarChart } from "@mui/x-charts";
import React from "react";

const Admin = () => {
  return (
    <div className="mx-20 mt-10 bg-white admin_section">
      <div className="admin_header py-4" style={{ backgroundColor: "#0a529c" }}>
        <h2 className="text-white uppercase font-semibold text-xl text-center">
          thống kê đăng ký
        </h2>
      </div>
      <div className="admin_body bg-white p-20">
        <div className="chart_1 mb-10">
          <label className="text-left text-lg font-semibold uppercase">
            Tần suất đăng ký chỗ
          </label>
          <div className="border-2 border-black rounded-lg">
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["bar A", "bar B", "bar C"],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [2, 5, 3],
                },
              ]}
              width={1200}
              height={300}
              colors={["red"]}
            />
          </div>
        </div>
        <div className="chart_2">
          <label className="text-left text-lg font-semibold uppercase">
            Tần suất đăng ký thiết bị
          </label>
          <div className="border-2 border-black rounded-lg">
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["bar A", "bar B", "bar C"],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [2, 5, 3],
                },
              ]}
              width={1200}
              height={300}
              colors={["red"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
