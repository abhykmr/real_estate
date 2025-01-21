// src/components/NotificationDropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Message Received",
      description: "You have a new message from John Doe.",
    },
    {
      id: 2,
      title: "Server Update",
      description: "The server will be down for maintenance at midnight.",
    },
    {
      id: 3,
      title: "New Comment",
      description: "Jane commented on your post.",
    },
    {
      id: 4,
      title: "Task Assigned",
      description: "You have been assigned to the Marketing project.",
    },
    {
      id: 5,
      title: "Meeting Reminder",
      description: "Don't forget the team meeting at 3 PM.",
    },
    {
      id: 6,
      title: "Subscription Expiring",
      description: "Your subscription is expiring in 3 days.",
    },
    // Add more notifications as needed
  ];

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the dropdown on Esc key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={toggleDropdown}
        className="text-gray-700 hover:text-blue-500 focus:outline-none p-2 relative"
        aria-label="Notifications"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Bell className="w-5 h-5" />
        {/* Notification Badge */}
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          role="menu"
          aria-label="Notifications"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
            <span className="font-semibold text-gray-700">Notifications</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close Notifications"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-60 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  <h4 className="text-sm font-medium text-gray-800">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {notification.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-gray-500">
                No notifications
              </div>
            )}
          </div>

          {/* Optional: Footer */}
          <div className="px-4 py-2 border-t border-gray-200">
            <Link to="/notifications">
              <button className="w-full text-sm text-blue-500 hover:underline">
                View All Notifications
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
