import { useState, useEffect } from "react";

const CompletionStatus = () => {
  const [status, setStatus] = useState("Review"); // Initial status
  const [isDocumentGenerated, setIsDocumentGenerated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch application status from the backend
  useEffect(() => {
    const fetchApplicationStatus = async () => {
      try {
        const response = await fetch("/api/application-status"); // Replace with your actual API endpoint
        const data = await response.json();

        // Assume the response returns: { status: "Approved", isDocumentGenerated: false }
        setStatus(data.status);
        setIsDocumentGenerated(data.isDocumentGenerated);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching application status:", error);
        setLoading(false);
      }
    };

    fetchApplicationStatus();
  }, []);

  // Update application status in the backend
  const updateApplicationStatus = async (newStatus) => {
    try {
      const response = await fetch("/api/application-status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setStatus(newStatus);
        if (newStatus === "Document Generated") {
          setIsDocumentGenerated(true);
        }
      } else {
        console.error("Failed to update application status");
      }
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  // Handle button actions
  const handlePayment = () => updateApplicationStatus("Payment Done");
  const handleGenerateDocument = () => updateApplicationStatus("Document Generated");

  // Status messages
  const statusMessages = {
    Review: "Your application is under review.",
    Approved: "Your application is approved. Proceed to payment.",
    "Payment Done": "Payment successful! Generate your application document.",
    "Document Generated": "Your application document is ready to download.",
  };

  if (loading) {
    return <div className="text-center mt-8">Loading application status...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Application Status</h2>
      <p className="text-lg font-medium text-gray-600 mb-6">{statusMessages[status]}</p>

      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-gray-300 rounded-full mb-6">
        <div
          className={`absolute top-0 left-0 h-full rounded-full ${
            status === "Review"
              ? "bg-yellow-400 w-1/3"
              : status === "Approved"
              ? "bg-blue-500 w-2/3"
              : status === "Payment Done"
              ? "bg-green-500 w-3/4"
              : "bg-purple-600 w-full"
          }`}
        ></div>
      </div>

      {/* Action Buttons */}
      {status === "Approved" && (
        <button
          onClick={handlePayment}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >
          Proceed to Payment
        </button>
      )}

      {status === "Payment Done" && (
        <button
          onClick={handleGenerateDocument}
          className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all"
        >
          Generate Document
        </button>
      )}

      {status === "Document Generated" && isDocumentGenerated && (
        <a
          href="/download/document" // Replace with your actual document download endpoint
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all"
        >
          Download Document
        </a>
      )}
    </div>
  );
};

export default CompletionStatus;
