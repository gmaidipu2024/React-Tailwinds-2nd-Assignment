import React from "react";

function Comments() {
  return (
    <section className="bg-[#002228]  ">
      <div className=" grid grid-cols-1 justify-items-center items-center overflow-hidden content-center ">
        <div>
          <img src="./Group 9.svg"  className=" grid items-center w-20 py-6" />
        </div>
        <div>
          <p className="text-white text-center py-5 text-2xl ">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br/>
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="grid grid-cols-1 justify-items-center items-center">
          <span className="text-[#0FF1F6] py-1 text-center">John Doe</span>
          <p className="text-white py-4">
             Chief Strategy Officer @ Company
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Comments;
