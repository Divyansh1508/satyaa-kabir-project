import React from "react";

function Fotter() {
  return (
    <footer className="bg-blue-700 text-white mt-10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 mb-7">
          <div>
            <h3 className="font-bold text-xl mb-4">Checkout Link</h3>
            <ul className="space-y-2 text-xl">
              <li>
                <a className="transition-all ">Refer & earn</a>
              </li>
              <li>
                <a className="transition-all ">medical learning</a>
              </li>
              <li>
                <a className="transition-all ">admission process</a>
              </li>
              <li>
                <a className="transition-all ">NEET Exam</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 ">Keep connected</h3>
            <div className="space-y-3 text-sm ">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  adipisci.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
