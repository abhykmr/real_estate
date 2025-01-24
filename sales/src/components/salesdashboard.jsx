import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesDashboard = () => {
  // Example data for the chart
  const chartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Sales (in $)",
        data: [8, 12, 18, 10, 15, 22, 28],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { ticks: { beginAtZero: true } },
    },
  };

  return (
    <div className="flex flex-col bg-white text-gray-800 h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-3xl font-bold">Sales Dashboard</div>
        <div className="text-gray-600">16:45</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Team Sales Card */}
        <div className="bg-gray-100 rounded-lg p-4 flex-1 hover:shadow-lg transition-shadow duration-200">
          <div className="text-2xl font-semibold">Team Sales</div>
          <div className="text-4xl font-bold mt-2">$473.2k</div>
          <div className="text-gray-600">This Year</div>
          <div className="text-xl font-semibold mt-4">Deals Closed</div>
          <div className="text-lg font-medium mt-1">128 Total Deals</div>
          <div className="text-lg font-medium mt-1">Average Property Value: $375k</div>
          <div className="flex items-center text-green-500 mt-4">
            <span className="mr-2">+30.2k</span>
            <span>vs last week</span>
          </div>
        </div>

        {/* Leaderboard and Weekly Sales */}
        <div className="flex flex-col md:flex-row flex-1 gap-4">
          {/* Leaderboard */}
          <div className="bg-gray-100 rounded-lg p-4 flex-1 hover:shadow-lg transition-shadow duration-200">
            <div className="text-xl font-semibold">Leaderboard This Year</div>
            <ul className="mt-2">
              <li className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="/profile-paul.jpg"
                    alt="Paul"
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span>Paul 🧔</span>
                </div>
                <span>$145k</span>
              </li>
              <li className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="/profile-sam.jpg"
                    alt="Sam"
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span>Sam 👩‍💻</span>
                </div>
                <span>$133.4k</span>
              </li>
              <li className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="/profile-nick.jpg"
                    alt="Nick"
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span>Nick 👨‍💼</span>
                </div>
                <span>$101k</span>
              </li>
              <li className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="/profile-dale.jpg"
                    alt="Dale"
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span>Dale 🕶️</span>
                </div>
                <span>$93.8k</span>
              </li>
            </ul>
          </div>

          {/* Weekly Sales */}
          <div className="bg-gray-100 rounded-lg p-4 flex-1 hover:shadow-lg transition-shadow duration-200">
            <div className="text-xl font-semibold">Weekly Sales</div>
            <div className="text-gray-600 mt-2">$50k target</div>
            <div className="mt-4 h-36">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          {
            name: "Dale",
            region: "North East",
            deals: "20",
            topProperty: "Luxury Villas",
            sales: "$93.8k",
          },
          {
            name: "Nick",
            region: "Mid-West",
            deals: "35",
            topProperty: "Commercial Spaces",
            sales: "$101k",
          },
          {
            name: "Paul",
            region: "West",
            deals: "50",
            topProperty: "High-End Apartments",
            sales: "$145k",
          },
          {
            name: "Sam",
            region: "South",
            deals: "40",
            topProperty: "Beachfront Properties",
            sales: "$133.4k",
          },
        ].map((agent, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={`/profile-${agent.name.toLowerCase()}.jpg`}
              alt={agent.name}
              className="mx-auto rounded-full h-20 w-20 mb-4"
            />
            <div className="text-xl font-semibold">{agent.name}</div>
            <div className="text-gray-600">{agent.region}</div>
            <div className="text-lg mt-2">Deals Closed: {agent.deals}</div>
            <div className="text-lg">Top Property: {agent.topProperty}</div>
            <div className="text-2xl font-bold mt-2">{agent.sales}</div>
            <div className="text-gray-600">This Year</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-600 text-sm">
        Sales team leaderboard powered by Geckoboard
      </footer>
    </div>
  );
};

export default SalesDashboard;
