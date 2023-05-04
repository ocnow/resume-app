import { useState } from "react";
import DragDropFiles from "./DragDrop";
export default function Content() {
  const [files, setFiles] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      
      <DragDropFiles />
    </div>
  );
}
