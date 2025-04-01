import React from "react";

const RegisteredItem = ({ item }) => {
  return item.map((item, index) => {
    const { date, toaNha, tiet, ghiChu } = item;
    return (
      <div className="my-2">
        <div className="flex items-center justify-around text-lg font-medium uppercase border-2 border-black bg-slate-400">
          <div className="date">Ngày: {date}</div>
          <div className="toa_nha">{toaNha}</div>
          <div className="tiet">Tiết {tiet}</div>
          <div className={`${ghiChu ? "ghiChu" : "ghiChu hidden"}`}>
            {ghiChu ?? ""}
          </div>
        </div>
      </div>
    );
  });
};

export default RegisteredItem;
