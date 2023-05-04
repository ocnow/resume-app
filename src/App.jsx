import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideApp from "./Sidebar/Dashboard/page";
import UploadIndex from "./Sidebar/Upload/UploadIndex";
import SearchIndex from "./Sidebar/Search/SearchIndex";
import SettingIndex from "./Sidebar/Setting/SettingIndex";
import LoginComp from "./components/Login"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0);
  return (
    <div id="appdiv" className="w-screen h-screen">
      
      <QueryClientProvider client={queryClient}>
        
        <BrowserRouter>
          
          <Routes>
            
            {/* <Route path='/uploadResume' element={<ResumeUploadComp />} />                       <Route path='/selectAction'  element={<EntryComp />}/> */}
            <Route path='/login'  element={<LoginComp />}/> 
            <Route path="/dashboard" element={<SideApp />} />
            <Route path="/upload" element={<UploadIndex />} />
            <Route path="/search" element={<SearchIndex />} />
            <Route path="/settings" element={<SettingIndex />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
export default App;
