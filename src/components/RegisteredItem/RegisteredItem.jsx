import React from "react";

const RegisteredItem = () => {
  const registeredRooms = [
    { date: "01/01/2025", toaNha: "H6", tiet: 2 },
    { date: "01/01/2025", toaNha: "H6", tiet: 2 },
  ];
  return registeredRooms.map((item, index) => {
    const { date, toaNha, tiet } = item;
    return (
      <div className="my-2">
        <div className="flex items-center justify-around text-lg font-medium uppercase border-2 border-black">
          <div className="date">Ngày: {date}</div>
          <div className="toa_nha">{toaNha}</div>
          <div className="tiet">Tiết {tiet}</div>
        </div>
      </div>
    );
  });
};

export default RegisteredItem;
