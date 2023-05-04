import Sidebar from "../SideBar";
import Content from "./Content";
const UploadPage = () => {
  return (
    <div className="flex w-full h-full">
      
      <Sidebar activePage="Upload" /> <Content />
    </div>
  );
};
export default UploadPage;
