import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { path } from "../common/path";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import UserInfo from "../pages/UserInfo/UserInfo";
import { Skeleton } from "antd";
import QuetQr from "../pages/QuetQr/QuetQr";
import RegisterHistory from "../pages/RegisterHistory/RegisterHistory";
import Admin from "../pages/Admin/Admin";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: path.userInfo,
          element: (
            <Suspense fallback={<Skeleton />}>
              <UserInfo />
            </Suspense>
          ),
        },
        {
          path: path.quetQr,
          element: (
            <Suspense fallback={<Skeleton />}>
              <QuetQr />
            </Suspense>
          ),
        },
        {
          path: path.lichSu,
          element: (
            <Suspense fallback={<Skeleton />}>
              <RegisterHistory />
            </Suspense>
          ),
        },
        {
          path: path.admin,
          element: <Admin />,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
