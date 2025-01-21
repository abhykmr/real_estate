import React, { useState } from "react";
import PhotoSection from "../components/PhotoSection";
import BackgroundPictureSection from "../components/BackgroundPictureSection";
import PersonalInformationSection from "../components/PersonalInformationSection";
import SocialMediaSection from "../components/SocialMediaSection";
import QuoteSection from "../components/QuoteSection";
import AboutSection from "../components/AboutSection";
import EditProfileForm from "../components/EditProfileForm";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Susan",
    lastName: "Green",
    title: "Real Estate Agent",
    licenseNumber: "85474662",
    email: "support@realsatisfied.com",
    phone: "(555) 667-6554",
    bio: "Tell us more about yourself",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleFormSave = (updatedData) => {
    setFormData(updatedData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="w-full px-4">
        {" "}
        {/* Added px-4 for horizontal padding */}
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Lorey</h1>
          <p className="text-gray-600">Tue, 07 November 2022</p>
        </div>
        {/* Edit Profile Form */}
        {isEditing && (
          <EditProfileForm
            userData={formData}
            onSave={handleFormSave}
            onCancel={handleEditToggle}
          />
        )}
        {/* Main Content */}
        {!isEditing && (
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Left Column: Photo and Personal Information */}
            <div className="flex flex-col gap-4 md:w-1/3 lg:w-1/4">
              <PhotoSection />
              <PersonalInformationSection
                data={formData}
                onEdit={handleEditToggle}
              />
            </div>

            {/* Right Column: Other Sections */}
            <div className="flex flex-col gap-4 md:w-2/3 lg:w-3/4">
              <BackgroundPictureSection onEdit={handleEditToggle} />
              <SocialMediaSection onEdit={handleEditToggle} />
              <QuoteSection onEdit={handleEditToggle} />
              <AboutSection onEdit={handleEditToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
