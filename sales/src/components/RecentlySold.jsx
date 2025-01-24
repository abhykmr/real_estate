import React from 'react';

const RecentlySold = () => {
  // Sample data: replicate the table in your screenshot
  const soldData = [
    { plot: 'Plot 301-A', agent: 'Megha', date: '27 Feb 2023', listPrice: '$240K', finalPrice: '$240K' },
    { plot: 'Plot 304-B', agent: 'Megha', date: '27 Feb 2023', listPrice: '$190K', finalPrice: '$185K' },
    { plot: 'Plot 203-A', agent: 'Dion',  date: '27 Feb 2023', listPrice: '$170K', finalPrice: '$150K' },
    { plot: 'Plot 805-A', agent: 'Lucy P', date: '26 Feb 2023', listPrice: '$290K', finalPrice: '$260K' },
    { plot: 'Plot 301-A', agent: 'Megha', date: '27 Feb 2023', listPrice: '$240K', finalPrice: '$240K' },
    { plot: 'Plot 304-B', agent: 'Megha', date: '27 Feb 2023', listPrice: '$190K', finalPrice: '$185K' },
    { plot: 'Plot 203-A', agent: 'Dion',  date: '27 Feb 2023', listPrice: '$170K', finalPrice: '$150K' },
    { plot: 'Plot 805-A', agent: 'Lucy P', date: '26 Feb 2023', listPrice: '$290K', finalPrice: '$260K' },
    { plot: 'Plot 301-A', agent: 'Megha', date: '27 Feb 2023', listPrice: '$240K', finalPrice: '$240K' },
    { plot: 'Plot 304-B', agent: 'Megha', date: '27 Feb 2023', listPrice: '$190K', finalPrice: '$185K' },
    { plot: 'Plot 203-A', agent: 'Dion',  date: '27 Feb 2023', listPrice: '$170K', finalPrice: '$150K' },
    { plot: 'Plot 805-A', agent: 'Lucy P', date: '26 Feb 2023', listPrice: '$290K', finalPrice: '$260K' },
    { plot: 'Plot 301-A', agent: 'Megha', date: '27 Feb 2023', listPrice: '$240K', finalPrice: '$240K' },
    { plot: 'Plot 304-B', agent: 'Megha', date: '27 Feb 2023', listPrice: '$190K', finalPrice: '$185K' },
    { plot: 'Plot 203-A', agent: 'Dion',  date: '27 Feb 2023', listPrice: '$170K', finalPrice: '$150K' },
    { plot: 'Plot 805-A', agent: 'Lucy P', date: '26 Feb 2023', listPrice: '$290K', finalPrice: '$260K' },
   
  ];

  return (
    <div className="w-full p-4 rounded shadow bg-white text-black">
      <h2 className="text-xl font-semibold mb-2">Recently sold</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2">Plot</th>
            <th className="py-2">Agent</th>
            <th className="py-2">Date</th>
            <th className="py-2">List price</th>
            <th className="py-2">Final price</th>
          </tr>
        </thead>
        <tbody>
          {soldData.map((row, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-2">{row.plot}</td>
              <td className="py-2">{row.agent}</td>
              <td className="py-2">{row.date}</td>
              <td className="py-2">{row.listPrice}</td>
              <td className="py-2">{row.finalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlySold;
