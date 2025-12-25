import { Link } from "react-router-dom";
// import funtion from "../app/page";

export function TopBar() {
  return (
    <div className="bg-blue-400 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm ">
        <div className="flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="flex items-center gap-2 transition-colors">
            <span>Apply online</span>
          </a>
          <a href="#" className="flex items-center gap-2 transition-colors">
            <span>Student login</span>
          </a>
          <a href="#" className="flex items-center gap-2 transition-colors">
            <span>Request a call-back</span>
          </a>
        </div>

        <div className="flex gap-3 ">
          <a href="#" className="transition-opacity ">
            <span>📷</span>
          </a>
          <a href="#" className="transition-opacity ">
            <span>👤</span>
          </a>
          <a href="#" className="transition-opacity ">
            <span>📞</span>
          </a>
          <a href="#" className="transition-opacity ">
            <span>❤️</span>
          </a>
        </div>
      </div>
    </div>
  );
}
