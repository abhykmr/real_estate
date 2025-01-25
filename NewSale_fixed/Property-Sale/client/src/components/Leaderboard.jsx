import React from 'react';

const Leaderboard = () => {
  // Sample data: replicate the “Sales” and “No. of plots sold” columns
  const salesData = [
    { agent: 'Megha', value: '$1.9M' },
    { agent: 'Lucy S', value: '$1.6M' },
    { agent: 'Amir', value: '$1.5M' },
    { agent: 'Ed', value: '$1.1M' },
    { agent: 'Lucy P', value: '$910K' },
    { agent: 'Dion', value: '$880K' },
    { agent: 'Robin', value: '$850.5K' },
    { agent: 'Faye', value: '$650K' },
  ];

  const plotsSoldData = [
    { agent: 'Megha', count: 9 },
    { agent: 'Lucy S', count: 7 },
    { agent: 'Amir', count: 7 },
    { agent: 'Ed', count: 6 },
    { agent: 'Robin', count: 5 },
    { agent: 'Lucy P', count: 5 },
    { agent: 'Dion', count: 4 },
    { agent: 'Faye', count: 3 },
  ];

  return (
    <div className="w-full p-4 rounded shadow bg-white text-black">
      <h2 className="text-xl font-semibold mb-4">February Leaderboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Sales column */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sales</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2">Agent</th>
                <th className="py-2">Sales</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((item) => (
                <tr key={item.agent} className="border-b border-gray-100">
                  <td className="py-2">{item.agent}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* No. of plots sold column */}
        <div>
          <h3 className="text-lg font-semibold mb-2">No. of plots sold</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2">Agent</th>
                <th className="py-2">Plots Sold</th>
              </tr>
            </thead>
            <tbody>
              {plotsSoldData.map((item) => (
                <tr key={item.agent} className="border-b border-gray-100">
                  <td className="py-2">{item.agent}</td>
                  <td className="py-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
