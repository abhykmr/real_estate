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
    agreeTerms: false,
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleCheckboxChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     agreeTerms: e.target.checked,
  //   });
  // };

  const calculateTotalAfterDiscount = () => {
    return Number(formData.totalPrice) - Number(formData.discount || 0);
  };

  const calculateInstallmentAmount = () => {
    if (formData.installmentDuration && formData.totalPrice) {
      return (
        (calculateTotalAfterDiscount() - Number(formData.downPayment || 0)) /
        Number(formData.installmentDuration)
      );
    }
    return 0;
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) return "Name is required.";
    if (!formData.email.includes("@")) return "Valid email is required.";
    if (formData.phone.length < 10)
      return "Phone number must be at least 10 digits.";
    if (!formData.propertyId) return "Property ID is required.";
    if (!formData.propertyType) return "Property Type is required.";
    if (!formData.totalPrice) return "Total Price is required.";
    if (Number(formData.downPayment) >= calculateTotalAfterDiscount())
      return "Down payment cannot exceed or equal total price after discount.";
    if (!formData.agreeTerms)
      return "You must agree to the terms and conditions.";
    const isValidDate = !isNaN(Date.parse(formData.firstInstallmentDate));
    if (!isValidDate) return "First installment date is invalid.";
    return "";
  };

  const handleSubmit = async (e) => {
    alert("Data successfully submitted!");
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setFormError(error);
      setSuccessMessage("");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("http://localhost:5000/api/contracts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          discount: formData.discount || 0, // Default discount to 0 if empty
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage("Form submitted successfully!");
        setFormData({
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
          agreeTerms: false,
        });
      } else {
        const errorData = await response.json();
        setFormError(
          errorData.message || "Failed to submit the form. Please try again."
        );
      }
    } catch (error) {
      setFormError(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
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
        {formError && (
          <div className="mb-4 p-4 bg-red-100 text-red-600 rounded">
            {formError}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-600 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
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

          {/* Additional Fields */}
          {/* ...Other fields as in your original form... */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-2 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Contract"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;
