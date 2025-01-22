import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const statusAnalysisData = [
//   { label: 'Q1', value: 40 },
//   { label: 'Q2', value: 60 },
//   { label: 'Q3', value: 75 },
//   { label: 'Q4', value: 90 },
// ];

// const StatusAnalysisChart = () => (
//   <ResponsiveContainer width="100%" height={300}>
//     <BarChart data={statusAnalysisData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="label" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="value" fill="#8884d8" />
//     </BarChart>
//   </ResponsiveContainer>
// );

// export default StatusAnalysisChart;

const Dashboard = () => {
  const overviewData = [
    {
      title: "Properties Managed",
      value: "4860",
      percentage: "98%",
      lastYear: true,
    },
    { title: "Asset Value", value: "$2B", percentage: "72%", lastYear: true },
    {
      title: "Properties Sold",
      value: "1037",
      percentage: "44.2%",
      lastYear: true,
    },
    { title: "New Clients", value: "895", percentage: "70%", lastYear: true },
  ];

  const properties = [
    {
      id: 1,
      name: "Sunset Retreat Villa",
      price: "$7548",
      image: "/images/img-1.jpg",
    },
    {
      id: 2,
      name: "Riverside Haven",
      price: "$1548",
      image: "/images/img-2.jpg",
    },
    {
      id: 3,
      name: "Mountain View Villa",
      price: "$2048",
      image: "/images/img-3.jpg",
    },
    {
      id: 4,
      name: "Ocean Breeze Cottage",
      price: "$6948",
      image: "/images/img-4.jpg",
    },
    {
      id: 5,
      name: "Forest Hideaway",
      price: "$4568",
      image: "/images/img-5.jpg",
    },
    {
      id: 6,
      name: "Lakefront Residence",
      price: "$9200",
      image: "/images/img-6.jpg",
    },
  ];

  // Dummy data for Status Analysis and Revenue Generation
  const statusAnalysisData = [
    { label: "Q1", value: 40 },
    { label: "Q2", value: 60 },
    { label: "Q3", value: 75 },
    { label: "Q4", value: 90 },
  ];

  const revenueGenerationData = [
    { label: "Jan", value: 50000 },
    { label: "Feb", value: 60000 },
    { label: "Mar", value: 70000 },
    { label: "Apr", value: 80000 },
  ];

  // Reference for the scroll container
  const scrollContainerRef = useRef(null);

  // Scroll function for left and right buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Adjust this based on the new card width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {overviewData.map((data, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">{data.title}</h2>
            <p className="text-2xl font-bold mt-2">{data.value}</p>
            <p className="text-sm text-gray-500">
              {data.percentage} {data.lastYear && "Last year"}
            </p>
          </div>
        ))}
      </div>

      {/* Status Analysis and Revenue Generation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Status Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Status Analysis</h2>
          <div className="flex justify-center items-center">
            <div className="w-full">
              <h3 className="text-md font-medium mb-2">
                Quarterly Performance
              </h3>
              <div className="flex gap-4 justify-between">
                {statusAnalysisData.map((data, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="h-24 w-10 bg-purple-300 mb-2"
                      style={{ height: `${data.value}%` }}
                    ></div>
                    <span className="text-sm">{data.label}</span>
                    <p className="font-semibold text-lg">{data.value}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Generation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Revenue Generation</h2>
          <div className="w-full">
            <h3 className="text-md font-medium mb-2">Monthly Revenue</h3>
            <div className="flex gap-4 justify-between">
              {revenueGenerationData.map((data, index) => (
                <div key={index} className="text-center">
                  <div
                    className="h-24 w-10 bg-green-300 mb-2"
                    style={{ height: `${data.value / 1000}px` }}
                  ></div>
                  <span className="text-sm">{data.label}</span>
                  <p className="font-semibold text-lg">${data.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Properties */}
      <h2 className="text-xl font-medium mb-4">Explore Your Properties</h2>
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-blue-500 p-2 bg-white shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>
        
       
       <a href="/property"> <button className="relative px-6 py-3 font-medium text-white bg-blue-600 rounded-lg shadow-md group overflow-hidden text-left ml-0">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
  <span className="absolute inset-0 w-full h-full bg-blue-600 group-hover:opacity-0 transition-opacity duration-300"></span>
  <span className="relative">Explore all</span>
</button></a>


        {/* Scroll Container */}
        <div ref={scrollContainerRef} className="overflow-x-hidden py-4">
          <div className="flex gap-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80" // Adjusted width for larger cards
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{property.name}</h3>
                  <p className="text-green-600 font-bold">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-500 p-2 bg-white shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
