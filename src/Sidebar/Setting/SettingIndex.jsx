import AppHeader from "../AppHeader";
import SettingPage from "./SettingPage";
export default function SettingIndex() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-300">
      
      <AppHeader /> <SettingPage />
    </div>
  );
}
