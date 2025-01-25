import React from 'react';

const ThisMonthCard = () => {
  return (
    <div className="flex flex-col w-full p-4 rounded shadow bg-white text-black">
      <h2 className="text-xl font-semibold mb-2">This month</h2>
      <div className="flex items-center gap-8">
        <div>
          <p className="text-2xl font-bold">46</p>
          <p className="text-gray-600">Plots sold this month</p>
        </div>
        <div>
          <p className="text-2xl font-bold">$9.3M</p>
          <p className="text-gray-600">In sales</p>
        </div>
      </div>
    </div>
  );
};

export default ThisMonthCard;
