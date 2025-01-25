import React from "react";

const PersonCard = ({
  name,
  region,
  imageUrl,
  yearSales,
  yearProgress,
  weekSales,
  weekCurrency,
  chartColor
}) => {
  return (
    <div className="p-4 bg-white text-black rounded shadow flex flex-col items-center">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-4">{region}</p>
      {/* Person's photo */}
      <img
        src={imageUrl}
        alt={`${name}'s photo`}
        className="w-32 h-32 object-cover rounded mb-4"
      />

      {/* Yearly Sales */}
      <p className="text-2xl font-bold mb-1">{yearSales}</p>
      <p className="text-gray-600 mb-2">this year</p>
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-blue-500 rounded"
          style={{ width: `${yearProgress}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-1">
        {yearProgress}% of 300k goal
      </p>

      {/* Weekly Sales */}
      <p className="text-xl font-bold mt-4">
        {weekCurrency}
        {weekSales} <span className="text-sm text-gray-600">this week</span>
      </p>

      {/* Simple line chart placeholder */}
      <div className="w-full h-16 flex items-end mt-2">
        <div className={`w-full h-1 ${chartColor}`} />
      </div>
    </div>
  );
};

export default PersonCard;
