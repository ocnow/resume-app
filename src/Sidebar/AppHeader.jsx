import UserIcon from "./mini-comps/user-icon";
import BarclaysLogo from "./images/logo.svg";
export default function AppHeader() {
  return (
    <div className="flex justify-between items-center h-12 w-full bg-sky-800 border-b-4 border-blue-950">
      
      <div>
        <img
          className="ml-2"
          src={BarclaysLogo}
          width="155"
          height="25"
          alt="API Tooling HUB"
        />
      </div>
      <div className="text-white font-bold text-3xl font-serif">
        <label>SMART SEARCH</label>
      </div>
      <div>
        
        <UserIcon className="mr-3" />
      </div>
    </div>
  );
}
