import AppHeader from "../AppHeader";
import UploadPage from "./SearchPage";
export default function SearchIndex() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-300">
      
      <AppHeader /> 
      <UploadPage />
    </div>
  );
}
