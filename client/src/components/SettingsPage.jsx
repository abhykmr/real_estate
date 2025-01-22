// src/SettingsPage.jsx
import React, { useState } from "react";

const SettingsPage = () => {
  const [formData, setFormData] = useState({});
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [paymentData, setPaymentData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentInputChange = (field, value) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saved Data:", { ...formData, paymentDetails: { selectedPaymentMethod, ...paymentData } });
    alert("Information saved successfully!");
  };

  const viewPaymentHistory = () => {
    alert("This is where the payment history will be displayed.");
  };

  const renderPaymentDetails = () => {
    switch (selectedPaymentMethod) {
      case "upi":
        return (
          <div className="mt-4">
            <label className="block mb-2">
              UPI ID:
              <input
                type="text"
                placeholder="Enter your UPI ID"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("upiId", e.target.value)}
              />
            </label>
          </div>
        );
      case "bank":
        return (
          <div className="mt-4">
            <label className="block mb-2">
              Account Name:
              <input
                type="text"
                placeholder="Enter account name"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("accountName", e.target.value)}
              />
            </label>
            <label className="block mb-2">
              IFSC Code:
              <input
                type="text"
                placeholder="Enter IFSC code"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("ifscCode", e.target.value)}
              />
            </label>
            <label className="block mb-2">
              Branch Name:
              <input
                type="text"
                placeholder="Enter branch name"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("branchName", e.target.value)}
              />
            </label>
          </div>
        );
      case "card":
        return (
          <div className="mt-4">
            <label className="block mb-2">
              Card Number:
              <input
                type="text"
                placeholder="Enter card number"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("cardNumber", e.target.value)}
              />
            </label>
            <label className="block mb-2">
              Name on Card:
              <input
                type="text"
                placeholder="Enter name on card"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("nameOnCard", e.target.value)}
              />
            </label>
            <label className="block mb-2">
              Expiry Date:
              <input
                type="text"
                placeholder="MM/YY"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("expiryDate", e.target.value)}
              />
            </label>
            <label className="block mb-2">
              CVV:
              <input
                type="password"
                placeholder="Enter CVV"
                className="border rounded p-2 w-full"
                onChange={(e) => handlePaymentInputChange("cvv", e.target.value)}
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6"   style={ {backgroundImage: "url('/wood.webp')"}} >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* User Account Settings */}
        <Section title="Edit Personal Details">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <InputField label="Full Name" placeholder="Enter your name" onChange={(value) => handleInputChange("name", value)} />
            </div>
            <div className="flex-1">
              <InputField label="Email" placeholder="Enter your email" onChange={(value) => handleInputChange("email", value)} />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <InputField label="Password" placeholder="Update your password" type="password" onChange={(value) => handleInputChange("password", value)} />
            </div>
            <div className="flex-1">
              <FileUploadField label="Profile Picture" />
            </div>
          </div>
          <CheckboxField label="Email Notifications" onChange={(value) => handleInputChange("emailNotifications", value)} />
          <CheckboxField label="SMS Notifications" onChange={(value) => handleInputChange("smsNotifications", value)} />
        </Section>

        {/* Payment and Billing */}
        <Section title="Payment and Billing">
          {/* View Payment History Button */}
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              onClick={viewPaymentHistory}
            >
              View Payment History
            </button>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">Add Payment Method</h4>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" value="upi" onChange={(e) => setSelectedPaymentMethod(e.target.value)} />
                Add UPI
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" value="bank" onChange={(e) => setSelectedPaymentMethod(e.target.value)} />
                Add Bank Details
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" value="card" onChange={(e) => setSelectedPaymentMethod(e.target.value)} />
                Credit or Debit Card
              </label>
            </div>
            {renderPaymentDetails()}
          </div>
        </Section>

        {/* Save Button */}
        <div className="flex gap-4 mt-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            onClick={handleSave}
          >
            Save All Information
          </button>
        </div>
      </div>
    </div>
  );
};

// Supporting Components
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const InputField = ({ label, placeholder, type = "text", onChange }) => (
  <label className="block mb-4">
    {label}
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded p-2 w-full"
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

const FileUploadField = ({ label }) => (
  <label className="block mb-4">
    {label}
    <input type="file" className="border rounded p-2 w-full" />
  </label>
);

const CheckboxField = ({ label, onChange }) => (
  <label className="flex items-center mb-4">
    <input type="checkbox" className="mr-2" onChange={(e) => onChange(e.target.checked)} />
    {label}
  </label>
);

export default SettingsPage;
