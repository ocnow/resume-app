import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import Sidebar from '../SideBar'
import Homepage from "./DashContent";
const Dashboard = () => {
  return (
    <div className="flex w-full h-full">      
      <Sidebar activePage="Dashboard" />      
      <Homepage />    
    </div>);
};
export default Dashboard;