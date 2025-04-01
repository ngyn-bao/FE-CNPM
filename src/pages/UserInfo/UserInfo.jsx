import React, { useState } from "react";
import InputCustom from "../../components/Input/InputCustom";

const UserInfo = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <div className="mx-20 mt-10 bg-white info_section text-center">
        <div
          className="info_header py-4"
          style={{ backgroundColor: "#0a529c" }}
        >
          <h2 className="text-white uppercase font-semibold text-xl">
            thông tin cá nhân
          </h2>
        </div>
        <div className="info_form m-5 p-14">
          <form className="">
            <div className="form space-y-5 mx-5 mb-5">
              <InputCustom
                labelContent={"Họ và tên"}
                id={"name"}
                name={"name"}
                value={""}
                classWrapper="mr-5"
                disabled={disabled}
              />
              <InputCustom
                labelContent={"Mã số"}
                id={"maSo"}
                name={"maSo"}
                value={""}
                classWrapper="mr-5"
                disabled={disabled}
              />
              <InputCustom
                labelContent={"Khoa"}
                id={"facility"}
                name={"facility"}
                value={""}
                classWrapper="mr-5"
                disabled={disabled}
              />
              <div
                className={`mr-5 ${
                  disabled == false ? "" : "cursor-not-allowed"
                }`}
              >
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 text-left uppercase"
                >
                  Giới tính
                </label>
                <select
                  name="gender"
                  // onChange={handleChangeInput}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    disabled == false ? "" : "cursor-not-allowed"
                  }`}
                  disabled={disabled}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div className="mr-5">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900 text-left uppercase"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="birthday"
                  format="DD-MM-YYYY"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    disabled == false ? "" : "cursor-not-allowed"
                  }`}
                  disabled={disabled}
                  // onChange={(event) => {
                  //   console.log(event.target.value);
                  //   const [year, month, day] = event.target.value.split("-");
                  //   const valueDate = `${day}-${month}-${year}`;
                  //   console.log(valueDate);
                  //   setValueUser({ ...valueUser, birthday: valueDate });
                  // }}
                />
              </div>
              <InputCustom
                labelContent={"Địa chỉ"}
                id={"addr"}
                name={"addr"}
                value={""}
                classWrapper="mr-5"
                disabled={disabled}
              />
            </div>
            <div
              className={`form_buttons flex items-center justify-center space-x-5 ${
                disabled == false ? "block" : "hidden"
              }`}
            >
              <button
                type="submit"
                className="
              py-2 px-5 rounded-md bg-green-500 text-white hover:text-green-500 hover:bg-white duration-300"
              >
                Xác nhận sửa
              </button>
              <button
                type="button"
                onClick={() => {
                  setDisabled(true);
                }}
                className="
              py-2 px-5 rounded-md bg-red-500 text-white hover:text-red-500 hover:bg-white duration-300"
              >
                Huỷ
              </button>
            </div>
          </form>
          <button
            className={`py-2 px-5 rounded-md bg-yellow-500 text-white hover:text-yellow-500 hover:bg-white duration-300 ${
              disabled == false ? "hidden" : ""
            }`}
            onClick={() => {
              setDisabled(false);
            }}
          >
            Sửa thông tin
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
