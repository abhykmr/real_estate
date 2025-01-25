import React from "react";

const TeamSalesCard = () => {
  return (
    <div className="p-4 bg-white text-black rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Team sales</h2>
      <div className="flex items-center gap-8 mb-4">
        <div>
          <p className="text-3xl font-bold">$473.2K</p>
          <p className="text-gray-600">this year</p>
        </div>
        <div>
          <p className="text-3xl font-bold">$52.5K</p>
          <p className="text-gray-600">this week</p>
        </div>
      </div>

      {/* Progress / Trend */}
      <div className="mb-2 text-green-600 font-medium">
        ▲ $30.2k v last week
      </div>
      <div className="w-full h-2 bg-gray-200 rounded mt-2">
        <div className="h-2 bg-blue-500 rounded" style={{ width: "39%" }} />
      </div>
      <p className="text-sm text-gray-500 mt-1">39% of $1.2M goal</p>
    </div>
  );
};

export default TeamSalesCard;
