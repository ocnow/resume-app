import { useRef, useState } from "react";
import CardResult from "./CardResult";
import { useQuery } from "@tanstack/react-query";
import { search } from "../api/uploadApi";

export default function Content() {
  const [BC, setBC] = useState("");
  const [keyword, setKeyword] = useState("");
  const keywordref = useRef(null);
  const [listData, setListData] = useState(null);
  const { isLoading, error, refetch, fetchStatus } = useQuery(
    ["search", keyword],
    () => search(keyword,BC),
    {
      onSuccess: (data) => {
        console.log(`we got the data ${data}`);
        console.log(JSON.parse(data));
        setListData(JSON.parse(data));
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
        <div className="flex justify-center items-center w-full">
          <div className="flex p-3 ml-10">
            <label
              htmlFor="countries"
              className="text-base mr-2 mt-1 text-gray-900 dark:text-white"
            >
              Business Center
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block h-8 p-1"
              onChange={handleBCSelect} defaultValue=""
            >
              <option value="">Choose a business center</option>
              <option value="TC1">TC1</option>
              <option value="TC2">TC2</option>
              <option value="TC3">TC3</option>
              <option value="TC4">TC4</option>
            </select>
          </div>


          <div className="flex mr-10 p-3">
            <label className="mr-4 mt-1">Context Search</label>
            <input type="text" className="h-8 rounded-md px-2" ref={keywordref} placeholder="Keywords.."></input>
            {/* <input
              type="text"
              placeholder="Context Search ...."
              className="rounded-md py-0 h-7 mt-2"
              ref={keywordref}
            /> */}
            <button
              className="border bg-sky-600 ml-4 px-4 text-white rounded-md hover:bg-sky-800"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full p-5">
        {listData === null && <h1>This is loading......</h1>}
        {listData !== null && listData.map((item,index)=>{
          return <CardResult docName={item.name} downloadLink={item.downloadUrl} key={item.id}/>
        }) }
      </div>
    </div>
  );
}
