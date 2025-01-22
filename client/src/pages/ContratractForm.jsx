import { useState } from "react";

const ContractForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyId: "",
    propertyType: "",
    location: "",
    totalPrice: "",
    discount: "",
    downPayment: "",
    installmentDuration: "",
    firstInstallmentDate: "",
    paymentMethod: "",
    startDate: "",
    endDate: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      agreeTerms: e.target.checked,
    });
  };

  const calculateTotalAfterDiscount = () => {
    return Number(formData.totalPrice) - Number(formData.discount);
  };

  const calculateInstallmentAmount = () => {
    if (formData.installmentDuration && formData.totalPrice) {
      return (
        (calculateTotalAfterDiscount() - Number(formData.downPayment)) /
        Number(formData.installmentDuration)
      );
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("/ronnie-george-9gGvNWBeOq4-unsplash.jpg")',
      }}
    >
      <div
        className="max-w-lg mx-auto p-6 bg-white bg-transparent backdrop-blur-sm shadow-lg rounded-md"
        style={{
          minHeight: "80vh",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-black">
          Property Purchase Contract
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Property Information */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="propertyId"
            >
              Property Name/ID
            </label>
            <input
              type="text"
              id="propertyId"
              name="propertyId"
              value={formData.propertyId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="propertyType"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Type</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Plot">Plot</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="location"
            >
              Property Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="totalPrice"
            >
              Total Property Price
            </label>
            <input
              type="number"
              id="totalPrice"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Payment Details */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="discount"
            >
              Discount Applied
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="downPayment"
            >
              Down Payment
            </label>
            <input
              type="number"
              id="downPayment"
              name="downPayment"
              value={formData.downPayment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="installmentDuration"
            >
              Installment Duration
            </label>
            <select
              id="installmentDuration"
              name="installmentDuration"
              value={formData.installmentDuration}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Duration</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="firstInstallmentDate"
            >
              First Installment Date
            </label>
            <input
              type="date"
              id="firstInstallmentDate"
              name="firstInstallmentDate"
              value={formData.firstInstallmentDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Agreement and Acknowledgement */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="terms"
            >
              <input
                type="checkbox"
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-2 rounded-md hover:bg-blue-600"
          >
            Submit Contract
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;
