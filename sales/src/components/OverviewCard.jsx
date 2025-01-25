import React from 'react';

const OverviewCard = () => {
  return (
    <div className="flex flex-col w-full p-4 rounded shadow bg-white text-black">
      <h2 className="text-xl font-semibold mb-2">Overall</h2>
      <div className="flex items-center gap-8">
        <div>
          <p className="text-2xl font-bold">$32.6M</p>
          <p className="text-gray-600">Total sales</p>
        </div>
        <div>
          <p className="text-2xl font-bold">230</p>
          <p className="text-gray-600">Plots remaining</p>
        </div>
      </div>

      {/* Example progress bar */}
      <div className="mt-4">
        <div className="w-full h-2 bg-gray-200 rounded">
          <div className="h-2 bg-blue-500 rounded" style={{ width: '40%' }} />
        </div>
        <p className="text-sm text-gray-500 mt-1">40% of $80M goal</p>
      </div>
    </div>
  );
};

export default OverviewCard;
