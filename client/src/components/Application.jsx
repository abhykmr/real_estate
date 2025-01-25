// src/Application.jsx
import React, { useState } from 'react';
import DownloadPhoto from './DownloadDocuments';



const Application = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    lump_sum_price: '',
    remit_sum: '',
    rupees_amount: '',
    cheque_no: '',
    cheque_date: '',
    bank_name: '',
    first_applicant_name: '',
    first_applicant_sdw: '',
    first_applicant_address: '',
    first_applicant_pincode: '',
    first_applicant_phone: '',
    first_applicant_email: '',
    first_applicant_signature: '',
    second_applicant_name: '',
    second_applicant_sdw: '',
    second_applicant_address: '',
    second_applicant_pincode: '',
    second_applicant_phone: '',
    second_applicant_email: '',
    second_applicant_signature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a backend)
    console.log(formData);
    // Optionally, reset form or provide user feedback
  };

          

  
  return (
    <form
      className="w-[90%] bg-white shadow-md rounded-2xl overflow-hidden p-6 mx-auto mt-16"
      onSubmit={handleSubmit}
    >
      {/* Header Section */}
      <div className="mb-6">
        {/* Light Blue Background for Main Heading and Address */}
        <div className="bg-light-blue p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-center">HL RESIDENCY (PROPRIETORSHIP FIRM)</h1>
          <p className="text-center">Shop No. 8, Commercial Complex, HL City, Bahadurgarh</p>
        </div>
        
        {/* White Background for Application Form Title */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center">APPLICATION FORM</h2>
          <p className="text-center">
            For booking of Independent Villas/ 3-BHK INDEPENDENT FLOORS WITH LIFT & STILT PARKING (UNDER DEEN DAYAL JAN AWAS YOJNA)
          </p>
        </div>
      </div>
      
      {/* To Section */}
      <div className="mb-4 bg-light-blue p-4 rounded">
         <p className="ml-4">    To,</p>
        <p className="ml-4">HL RESIDENCY (PROPRIETORSHIP FIRM)</p>
        <p className="ml-4">Shop No. 8, Commercial Complex,</p>
        <p className="ml-4">HL City, Sector-37, Bahadurgarh</p>
        <p className="ml-4">Distt Jhajjar, Haryana</p>
      </div>
      
      {/* Greeting */}
      <div className="mb-4 px-6">
        <p>Dear Sir,</p>
      </div>
      
      {/* Body Section */}
      <div className="mb-4 space-y-4 px-6">
        <p>
          I/We wish to register myself/ourselves for the provisional allotment of Independent Villa and 3-BHK residential built-up floor with Lift & stilt parking in "HL CITY" Sector-37, Bahadurgarh, Haryana, being developed by
        </p>
        <p>
          M/s. HL Residency (PROPRIETORSHIP FIRM) at the Lump Sum Price of Rs. 
          <input
            type="text"
            id="lump_sum_price"
            name="lump_sum_price"
            className="border-b border-gray-400 focus:outline-none w-32"
            placeholder="10000000"
            value={formData.lump_sum_price}
            onChange={handleChange}
            required
          />
          (Basic Price is exclusive of charges as detailed in Annexure-A enclosed along with).
        </p>
        <p>
          I/We am/are satisfied with the information regarding statutory permissions/sanctions for development obtained by M/s. HL Residency and the title of the land on which the project 'HL CITY' is being developed.
        </p>
        <p>
          I/We have understood the terms and conditions of the allotment, Payment Plan and Proposed Specifications as clearly mentioned in Annexure A, Annexure B and Annexure C respectively which are accepted by me/us pursuant to which I/We agree to execute and sign, prior to allotment of respective unit, the standard Agreement to sell, governing the rights and obligations, Terms & Conditions with regard to the allotment of a residential built-up floor/villa in the said project, which has been shown to me/us and are acceptable to me/us. I/We shall not seek any modifications in the standard Agreement to sell of Company. I/We further agree to execute any and all such further document(s) as may be required to be executed from time to time.
        </p>
        
        {/* Remit Section with Inline Inputs */}
        <p className="flex flex-wrap items-center">
          I/We remit herewith a sum of Rs. 
          <input
            type="text"
            id="remit_sum"
            name="remit_sum"
            className="border-b border-gray-400 focus:outline-none w-32 mx-2"
            placeholder="10000000"
            value={formData.remit_sum}
            onChange={handleChange}
            required
          />
          /- (Rupees 
          <input
            type="text"
            id="rupees_amount"
            name="rupees_amount"
            className="border-b border-gray-400 focus:outline-none w-32 mx-2"
            placeholder="10000000"
            value={formData.rupees_amount}
            onChange={handleChange}
            required
          />
          ) vide Draft Cheque No. 
          <input
            type="text"
            id="cheque_no"
            name="cheque_no"
            className="border-b border-gray-400 focus:outline-none w-32 mx-2"
            placeholder="10000000"
            value={formData.cheque_no}
            onChange={handleChange}
            required
          />
          Dated 
          <input
            type="date"
            id="cheque_date"
            name="cheque_date"
            className="border-b border-gray-400 focus:outline-none w-32 mx-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded"
            value={formData.cheque_date}
            onChange={handleChange}
            required
          />
          
          Drawn on 
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            className="border-b border-gray-400 focus:outline-none w-32 mx-2"
            placeholder="10000000"
            value={formData.bank_name}
            onChange={handleChange}
            required
          />
          .
        </p>
        
        <p>
          I/We have perused the Payment Plans and agree to undertake to pay the Sale Consideration in the form of installments, as detailed in Annexure-B, as and when demanded by the Company.
        </p>
      </div>
      
      {/* Applicant Details */}
      <div className="mb-4 px-6">
        <h3 className="font-semibold">Applicant Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          
          {/* First Applicant */}
          <div>
            <label htmlFor="first_applicant_name" className="block mb-1">First Applicant</label>
            <input
              type="text"
              id="first_applicant_name"
              name="first_applicant_name"
              placeholder="Mr./Ms./M/s"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.first_applicant_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="first_applicant_sdw"
              name="first_applicant_sdw"
              placeholder="S/D/W/o"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.first_applicant_sdw}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="first_applicant_address"
              name="first_applicant_address"
              placeholder="Address"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.first_applicant_address}
              onChange={handleChange}
              required
            />
            <div className="flex mb-2">
              <input
                type="text"
                id="first_applicant_pincode"
                name="first_applicant_pincode"
                placeholder="Pin Code"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 mr-2"
                value={formData.first_applicant_pincode}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="tel"
              id="first_applicant_phone"
              name="first_applicant_phone"
              placeholder="Phone / Mobile"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.first_applicant_phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="first_applicant_email"
              name="first_applicant_email"
              placeholder="Email id"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.first_applicant_email}
              onChange={handleChange}
              required
            />
            <div className="mt-2">
                  <label htmlFor="first_applicant_signature" className="block mb-1">Signature</label>
                  <input
                    type="file"
                    id="first_applicant_signature"
                    name="first_applicant_signature"
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        if (file.size > 20 * 1024 * 1024) { // 20 MB size limit
                          alert("File size must be 20 MB or less.");
                          e.target.value = ""; // Clear the input if file is too large
                        } else {
                          const reader = new FileReader();
                          reader.onload = () => {
                            handleChange({ target: { name: "first_applicant_signature", value: reader.result } });
                          };
                          reader.readAsDataURL(file); // Read file as data URL
                        }
                      }
                    }}
                    required
                  />
            </div>

          </div>
          
          {/* Second Applicant */}
          <div>
            <label htmlFor="second_applicant_name" className="block mb-1">Second Applicant</label>
            <input
              type="text"
              id="second_applicant_name"
              name="second_applicant_name"
              placeholder="Mr./Ms./M/s"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.second_applicant_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="second_applicant_sdw"
              name="second_applicant_sdw"
              placeholder="S/D/W/o"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.second_applicant_sdw}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="second_applicant_address"
              name="second_applicant_address"
              placeholder="Address"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.second_applicant_address}
              onChange={handleChange}
              required
            />
            <div className="flex mb-2">
              <input
                type="text"
                id="second_applicant_pincode"
                name="second_applicant_pincode"
                placeholder="Pin Code"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 mr-2"
                value={formData.second_applicant_pincode}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="tel"
              id="second_applicant_phone"
              name="second_applicant_phone"
              placeholder="Phone / Mobile"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.second_applicant_phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="second_applicant_email"
              name="second_applicant_email"
              placeholder="Email id"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              value={formData.second_applicant_email}
              onChange={handleChange}
              required
            />
            <div className="mt-2">
                 <label htmlFor="first_applicant_signature" className="block mb-1">Signature</label>
                 <input
                   type="file"
                   id="first_applicant_signature"
                   name="first_applicant_signature"
                   accept=".jpg,.jpeg,.png,.pdf"
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   onChange={(e) => {
                     const file = e.target.files[0];
                     if (file) {
                       if (file.size > 20 * 1024 * 1024) { // 20 MB size limit
                         alert("File size must be 20 MB or less.");
                         e.target.value = ""; // Clear the input if file is too large
                       } else {
                         const reader = new FileReader();
                         reader.onload = () => {
                           handleChange({ target: { name: "first_applicant_signature", value: reader.result } });
                         };
                         reader.readAsDataURL(file); // Read file as data URL
                       }
                     }
                   }}
                   required
                 />
               </div>

          </div>
          
        </div>
      </div>
      
      {/* For Office Use */}
      <div className="mb-4 px-6">
        <h3 className="font-semibold">For office use</h3>
        <div className="space-y-2 mt-2">
          <p>Application received by ___________________________________________</p>
          <p>Name of Broker ___________________________________________________</p>
          <p>Status of application ____________________________________________</p>
        </div>
      </div>
      
      {/* Authorized Signatory */}
      <div className="mb-4 px-6">
        <p>(Authorized Signatory)</p>
      </div>
      
      {/* Submit Button */}
      <div className="text-center mt-6 mb-6">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {/* <DownloadPhoto/> */}
      </div>

      <div>
        <DownloadPhoto/>
      </div>
      
    </form>
  );
};

export default Application;
