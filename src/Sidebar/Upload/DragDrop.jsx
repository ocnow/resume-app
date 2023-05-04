import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { uploadDoc } from "../api/uploadApi";
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const { data, isLoading, fetchStatus, error, refetch } = useQuery(
    ["upload", files],
    () => uploadDoc(files),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log("File upload successfully");
      },
    }
  );
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };
  // send files to the server // learn from my other video
  const handleUpload = () => {
    refetch();
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };
  return (
    <div className="w-full h-full flex flex-col justify-items-start items-center bg-white">
      
      <div
        id="dropzone"
        className="h-1/4 w-3/4 flex flex-col justify-center items-center border-2 border-dotted border-gray-800 bg-gray-200 mt-10 shadow-md"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        
        <div className="flex flex-col justify-center items-center">
          
          <MdCloudUpload className="mr-2 text-blue-700 text-7xl" />
          <button
            className="text-white bg-sky-600 rounded-sm border border-black px-8 py-1"
            onClick={() => inputRef.current.click()}
          >
            <label className="cursor-pointer">Choose files to Upload</label>
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
          placeholder="Country choice"
        >
          
          <option disabled selected>
            Choose a Business Process
          </option>
          <option value="US">TC1</option> <option value="CA">TC2</option>
          <option value="FR">TC3</option> <option value="DE">TC4</option>
        </select>
      </div>
      <button
        className="py-1 px-2 mt-4 bg-sky-500 rounded-md border w-auto"
        onClick={handleUpload}
      >
        Submit
      </button>
    </div>
  );
};
export default DragDropFiles;
