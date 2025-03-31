import { ConfigProvider } from "antd";
import useRoutesCustom from "./hooks/useRoutesCustom";

function App() {
  const routes = useRoutesCustom();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              siderBg: "#fff",
            },
          },
        }}
      >
        <div>{routes}</div>
      </ConfigProvider>
    </>
  );
}

export default App;
