import React from "react";
import ClientButtons from "../components/ClientButtons.jsx";
import LeaderboardCard from "../components/ClientLeaderBoard.jsx";
import WeeklySalesCard from "../components/WeeklySalesCard";
import PersonCard from "../components/PersonCard";

function SalesTeamDashboard() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div
        className="grid grid-cols-5 gap-6"
        style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
      >
        {/* LEFT COLUMN (2fr) */}
        <div className="flex flex-col gap-6">
          <ClientButtons />
          <LeaderboardCard />
          <WeeklySalesCard />
        </div>

        {/* FOUR PERSON CARDS */}
        <PersonCard
          name="Dale"
          region="North East"
          imageUrl="https://static.vecteezy.com/system/resources/previews/046/586/912/non_2x/real-estate-agent-holding-a-miniature-palace-house-free-png.png"
          yearSales="$93.8k"
          yearProgress={31}
          weekSales="4.5k"
          weekCurrency="£"
          chartColor="bg-cyan-400"
        />
        <PersonCard
          name="Nick"
          region="Mid-West"
          imageUrl="https://static.vecteezy.com/system/resources/previews/046/586/912/non_2x/real-estate-agent-holding-a-miniature-palace-house-free-png.png"
          yearSales="$101k"
          yearProgress={33}
          weekSales="4k"
          weekCurrency="£"
          chartColor="bg-lime-400"
        />
        <PersonCard
          name="Paul"
          region="West"
          imageUrl="https://static.vecteezy.com/system/resources/previews/046/586/912/non_2x/real-estate-agent-holding-a-miniature-palace-house-free-png.png"
          yearSales="$145k"
          yearProgress={48}
          weekSales="19k"
          weekCurrency="$"
          chartColor="bg-emerald-400"
        />
        <PersonCard
          name="Sam"
          region="South"
          imageUrl="https://static.vecteezy.com/system/resources/previews/046/586/912/non_2x/real-estate-agent-holding-a-miniature-palace-house-free-png.png"
          yearSales="$133.4k"
          yearProgress={44}
          weekSales="25k"
          weekCurrency="$"
          chartColor="bg-teal-400"
        />
      </div>
    </div>
  );
}

export default SalesTeamDashboard;
