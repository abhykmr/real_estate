import React from "react";

const LeaderboardCard = () => {
  const data = [
    { name: "Property 1", amount: "Rs 45 lakhs" },
    { name: "Property 2", amount: "Rs 65 lakhs" },
    { name: "Property 3", amount: "Rs 80 lakhs" },
    { name: "Property 4", amount: "Rs 1.2 Crores" },
  ];

  return (
    <div className="p-4 bg-white text-black rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Leaderboard this year</h2>
      <ul>
        {data.map((item) => (
          <li
            key={item.name}
            className="flex justify-between py-2 border-b border-gray-200 last:border-0"
          >
            <span>{item.name}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardCard;
