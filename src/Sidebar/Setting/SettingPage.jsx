import Sidebar from "../SideBar";
import Content from "./Content";
const SettingPage = () => {
  return (
    <div className="flex w-full h-full">
      
      <Sidebar activePage="Settings" /> <Content />
    </div>
  );
};
export default SettingPage;
