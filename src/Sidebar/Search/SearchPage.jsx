import Sidebar from "../SideBar";
import Content from "./Content";
const SearchPage = () => {
  return (
    <div className="flex w-full h-full">
      
      <Sidebar activePage="Search" /> <Content />
    </div>
  );
};
export default SearchPage;
