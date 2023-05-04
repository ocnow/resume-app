import { BsDownload } from "react-icons/bs";
export default function CardResult({ docName, downloadLink }) {
  return (
    <div className="w-full h-10 border border-gray-900 mt-3 shadow-md bg-gray-800 flex items-center p-4 transition duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-lg">
      <h1 className="ml-5 text-white">{docName}</h1>
      <a
        className="ml-auto mr-12 flex bg-sky-500 rounded-md p-1"
        href={downloadLink}
        download="resume.pdf"
      >
        <BsDownload className="mt-1" />
      </a>
    </div>
  );
}