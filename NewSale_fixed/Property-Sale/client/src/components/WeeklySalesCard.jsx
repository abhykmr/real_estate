import React from "react";

const WeeklySalesCard = () => {
  return (
    <div className="p-4 bg-white text-black rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Weekly sales</h2>
      {/* Dummy placeholder for chart */}
      <div className="h-32 flex items-end">
        <div className="w-full h-1 bg-blue-500" />
      </div>
      <div className="mt-2 text-gray-600">
        <p>$0</p>
        <p>$50K</p>
        <p>$100K</p>
        <p className="text-xs">Jan &nbsp; Feb &nbsp; Mar</p>
      </div>
    </div>
  );
};

export default WeeklySalesCard;
