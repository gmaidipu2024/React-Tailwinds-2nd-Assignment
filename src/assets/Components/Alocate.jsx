import { Button } from "@nextui-org/react";
import React from "react";

function Alocate() {
  return (
    <section className="bg-[url(../BG2.svg)] w-50% bg-cover bg-no-repeat overflow-hidden md:px-10 py-5">
      <div className="w-full md:w-[50%] px-10 mb-5 ">
        <p className=" text-2xl py-4 text-white">
          Allocate effort where your reps <br /> make an inpact.
        </p>
        <h2 className="font-bold text-[#0FF1F6] text-sm md:text-xl py-2 leading-tight">
          Let us handle the rest.
        </h2>
        <p className=" leading-6 text-white text-sm md:text-xl py-5 mb-5">
          Keep your reps “in the air” -- out in the field and on the phone{" "}
          <br />
          where they can build relationships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="content-center">
          <img src="../32%.svg" alt="" />
          <p className="text-white py-3">Improvement in <br/>Open Rates</p>
        </div>
        <div>
          <img src="../75%.svg" alt="" />
          <p className="text-white py-3">Improvement in <br/>Open Rates</p>
        </div>
        <div>
          <img src="../35%.svg" alt="" />
          <p className="text-white py-3">Improvement in <br/>Open Rates</p>
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Alocate;
