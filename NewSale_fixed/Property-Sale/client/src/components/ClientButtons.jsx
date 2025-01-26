import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ClientButtons = () => {
  const navigate = useNavigate(); // Define the navigate function

  return (
    <div className="p-4 bg-white text-black rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Check your Clients actions
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Button 1 */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/your-interested-clients")}
        >
          Interested Clients
        </button>
        {/* Button 2 */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/reviewing-clients")}
        >
          Reviewing Clients
        </button>
        {/* Button 3 */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/approved-clients")}
        >
          Approved Clients
        </button>
        {/* Button 4 */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/my-clients")}
        >
          My Clients
        </button>
      </div>
    </div>
  );
};

export default ClientButtons;
