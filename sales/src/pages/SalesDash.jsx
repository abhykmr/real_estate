import React from 'react';
import OverviewCard from '../components/OverviewCard';
import ThisMonthCard from '../components/ThisMonthCard';
import Leaderboard from '../components/Leaderboard';
import RecentlySold from '../components/RecentlySold';


function SalesDash() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Row with two columns: Left = Overview + ThisMonth + Leaderboard, Right = RecentlySold */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT COLUMN (Overview, ThisMonth, Leaderboard) */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Top row for Overview + This Month side by side (on md+) */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <OverviewCard />
            </div>
            <div className="w-full md:w-1/2">
              <ThisMonthCard />
            </div>
          </div>
          
          {/* Leaderboard below the top row */}
          <Leaderboard />
        </div>

        {/* RIGHT COLUMN (RecentlySold takes 50% on md+) */}
        <div className="w-full md:w-1/2">
          <RecentlySold />
        </div>
      </div>

     
    </div>
  );
}

export default SalesDash;
