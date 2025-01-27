import React from "react";

const IClientFilter = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col items-center pt-8">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="w-72 p-2 bg-white text-black border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Filters Section */}
      <div className="flex w-72 flex-col gap-4">
        <div className="flex flex-col items-start">
          <label htmlFor="select-month" className="mb-2 font-semibold">
            Select Month:
          </label>
          <select
            id="select-month"
            className="p-2 bg-white text-black border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="past-month">Past Month</option>
            <option value="past-3-months">Past 3 Months</option>
            <option value="past-6-months">Past 6 Months</option>
            <option value="past-year">Past 1 Year</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="select-location" className="mb-2 font-semibold">
            Select Location:
          </label>
          <select
            id="select-location"
            className="p-2 bg-white text-black border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="delhi">Delhi</option>
            <option value="bahadurgarh">Bahadurgarh</option>
            <option value="gurugram">Gurugram</option>
            <option value="rohtak">Rohtak</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default IClientFilter;
