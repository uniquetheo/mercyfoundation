import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-dark-slate">
      <div className="container mx-auto px-4 md:px-0 py-10">
        <div className="flex w-full max-w-[600px] mx-auto justify-between">
          <div className="item w-[150px] flex flex-col gap-3 items-center bg-white p-4 rounded-2xl">
            <span className="text-3xl font-extrabold text-blue-800">8</span>
            <h3 className="font-bold">Volunteers</h3>
          </div>
          <div className="item min-w-[150px] flex flex-col gap-3 items-center bg-white p-4 rounded-2xl">
            <span className="text-3xl font-extrabold text-blue-800">35</span>
            <h3 className="font-bold">Schools Visited</h3>
          </div>
          <div className="item w-[150px] flex flex-col gap-3 items-center bg-white p-4 rounded-2xl">
            <span className="text-3xl font-extrabold text-blue-800">5</span>
            <h3 className="font-bold">Partners</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
