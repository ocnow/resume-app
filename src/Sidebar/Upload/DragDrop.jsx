import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { uploadDoc } from "../api/uploadApi";
import Toast from "./toast";
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const searchRef = useRef();
  var BUSP = null;
  var [data1,setData1] = useState(null);
  const { data, isLoading, fetchStatus, error, refetch } = useQuery(
    ["upload", files],
    () => uploadDoc(files, BUSP),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log("File upload successfully");
        console.log(`data is ${data}`);
        setData1(data);
      },
    }
  );

  console.log(`data1 is ${data1}`);

  
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    setData1(null);
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };
  // send files to the server // learn from my other video
  const handleUpload = () => {
    data1 = null;
    BUSP = searchRef.current.value;
    console.log(`selected BUSP ${BUSP}`);
    refetch();
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };
  return (
    <div className="w-full h-full flex flex-col justify-items-start items-center bg-white ">

      <div
        id="dropzone"
        className="h-1/4 w-3/4 flex flex-col justify-center items-center border-2 border-dotted border-gray-800 bg-gray-200 mt-10 shadow-md"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >

        <div className="flex flex-col justify-center items-center">

          <MdCloudUpload className="mr-2 text-blue-700 text-7xl" />
          <button
            className="text-white bg-sky-600 rounded-sm border border-black px-8 py-1"
            onClick={() => {setData1(null); inputRef.current.click();}}
          >
            <label className="cursor-pointer">Choose file to Upload</label>
          </button>
          <h1 className="mr-1 text-gray-400">or Drag and Drop</h1>
          <input
            type="file"
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept=".pdf, .docx,doc"
            ref={inputRef}
          />
        </div>
        {files && (
          <div>
            {Array.from(files).map((file, idx) => (
              <li key={idx} className="list-none">
                File Selected : {file.name}
              </li>
            ))}
          </div>
        )}
      </div>
      <div class="flex mt-5">

        <label for="username" class="block text-base mb-2 mr-2">
          Business Process
        </label>
        <select
          id="underline_select"
          class="border-2 border-black rounded-md px-2 py-1 text-black-primary placeholder:text-slate-400 "
          placeholder="Country choice" ref={searchRef} defaultValue={"default"}
        >

          <option value="default">
            Choose a Business Process
          </option>
          <option value="US">TC1</option> <option value="CA">TC2</option>
          <option value="FR">TC3</option> <option value="DE">TC4</option>
        </select>
      </div>
      
      <div className="flex">
      <button
        className="py-1 px-3 font-bold mt-4 bg-sky-500 rounded-md border w-auto text-white"
        onClick={handleUpload}
      >
        Submit
      </button>
      
      </div>

      { fetchStatus !== "idle" && data === null && <div wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 class="text-center text-white text-xl font-semibold">Uploading...</h2>
        <p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>}

      {data1 && <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded " role="alert">
        
        <span class="block sm:inline fix">File uploaded successfully!</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         
        </span>
      </div>
      }

    </div>
  );
};
export default DragDropFiles;
