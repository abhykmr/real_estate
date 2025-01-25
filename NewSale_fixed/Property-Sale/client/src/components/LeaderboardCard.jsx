import React from "react";

const LeaderboardCard = () => {
  const data = [
    { name: "Paul", amount: "$145K" },
    { name: "Sam", amount: "$133.4K" },
    { name: "Nick", amount: "$101K" },
    { name: "Dale", amount: "$93.8K" },
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
