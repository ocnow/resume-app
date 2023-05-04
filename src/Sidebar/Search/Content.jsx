import { useRef, useState } from "react";
import CardResult from "./CardResult";
import { useQuery } from "@tanstack/react-query";
import { search } from "../api/uploadApi";
import { data } from "autoprefixer";
export default function Content() {
  const [BC, setBC] = useState("");
  const [keyword, setKeyword] = useState("");
  const keywordref = useRef(null);
  const [listData, setListData] = useState(null);
  const { isLoading, error, refetch, fetchStatus } = useQuery(
    ["search", keyword],
    () => search(keyword),
    {
      onSuccess: (data) => {
        console.log(`we got the data ${data}`);
        setListData(data);
      },
    }
  );
  const searchParams = [
    {
      HR: [
        {
          name: "Experience",
          options: ["<5", "<10", ">10"],
        },
        {
          name: "Technology",
          options: ["Data", "Backend", "Frontend"],
        },
        {
          name: "Role",
          options: ["BA3", "BA4", "BA5"],
        },
      ],
    },
  ];
  const handleBCSelect = function (e) {
    console.log("this is handling the BC select");
    console.log(`selected BC: ${e.target.value}`);
    setBC(e.target.value);
  };
  const handleSubmit = function () {
    const val = keywordref.current.value;
    console.log(`valu submitted ${val}`);
    setKeyword(val);
    refetch();
  };
  return (
    <div className="flex flex-col w-full h-full">
      
      <div className="border border-gray-900 shadow-md flex flex-col">
        
        <div className="flex justify-around w-full  p-3">
          
          <div className="flex p-3 mr-auto">
            
            <label
              for="countries"
              className="text-sm  text-gray-900 dark:text-white mr-2"
            >
              Business Center
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block "
              onChange={handleBCSelect}
            >
              
              <option selected>Choose a business center</option>
              <option value="HR">Human Resources</option>
              <option value="OB">Onboarding</option>
              <option value="RG">Regulatory</option>
              <option value="BC">Barclaycard</option>
            </select>
          </div>
          {/* {
                    searchParams.map((item, index) => {
                    return  <div className="flexp-3">                                <label for="countries" className="text-sm  text-gray-900 dark:text-white mr-2">{item.name}</label>                                <select defaultValue="choose" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block ">                                    <option key="choose" value="choose">Choose a {item.name}</option>                                    {item.options.map((it,ind) => {
                                        return <option key={it} value={it}>{it}</option>                                    })}
                                </select>                        </div>                    })
                } */}
          {BC !== "HR" ? (
            <></>
          ) : (
            <>
              <div className="flex p-3 mr-auto">
                
                <label
                  for="countries"
                  className="text-sm  text-gray-900 dark:text-white mr-2"
                >
                  Experience
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block "
                >
                  
                  <option selected>Choose Exp Level</option>
                  <option value="US">0</option> <option value="CA">1</option>
                  <option value="FR">2</option> <option value="DE">3</option>
                </select>
              </div>
              <div className="flex p-3 mr-auto">
                
                <label
                  for="countries"
                  className="text-sm  text-gray-900 dark:text-white mr-2"
                >
                  Technology
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block "
                >
                  
                  <option selected>Choose a technology</option>
                  <option value="US">Human Resources</option>
                  <option value="CA">Onboarding</option>
                  <option value="FR">Regulatory</option>
                  <option value="DE">Barclaycard</option>
                </select>
              </div>
              <div className="flex p-3 mr-auto">
                
                <label
                  for="countries"
                  className="text-sm  text-gray-900 dark:text-white mr-2"
                >
                  Role
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block "
                >
                  
                  <option selected>Choose Role</option>
                  <option value="US">BA3</option>
                  <option value="CA">BA4</option>
                  <option value="FR">BA5</option>
                  <option value="DE">BA6</option>
                </select>
              </div>
            </>
          )}
        </div>
        <div className="flex p-3 ml-12">
          
          <h1 className="mr-3 text-base">Context Search</h1>
          <input
            type="text"
            placeholder="Context Search ...."
            className="border-2 rounded-md w-4/5 px-3"
            ref={keywordref}
          />
          <button
            className="ml-3 border bg-sky-600 p-2 rounded-md hover:bg-sky-800"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full p-5">
        
        {listData === null && <h1>This is loading......</h1>}
        {listData !== null &&
          listData.map((element, index) => {
            return (
              <CardResult docName={element.name} downloadLink={element.url} />
            );
          })}
        {/* <CardResult />            <CardResult />            <CardResult />            <CardResult />            <CardResult /> */}
      </div>
    </div>
  );
}
