// import React, { useState } from 'react';
// import { 
//   User, 
//   Settings, 
//   TrendingUp, 
//   PaintBucket, 
//   Bell, 
//   BarChart2, 
//   MessageCircle, 
//   HelpCircle,
//   ChevronRight 
// } from 'lucide-react';

// <div></div>
// // Enhanced Dashboard Menu Items with More Detailed Configuration
// const DASHBOARD_MENU_ITEMS = [
//   {
//     icon: User,
//     title: 'User Management',
//     description: 'Manage users, roles, and permissions',
//     category: 'Administration',
//     color: {
//       bg: 'bg-blue-50',
//       icon: 'text-blue-600',
//       hover: 'hover:bg-blue-100'
//     }
//   },
//   {
//     icon: Settings,
//     title: 'System Configuration',
//     description: 'Configure global system preferences',
//     category: 'Settings',
//     color: {
//       bg: 'bg-green-50',
//       icon: 'text-green-600',
//       hover: 'hover:bg-green-100'
//     }
//   },

//   {
//     icon: BarChart2,
//     title: 'Forecasting Tools',
//     description: 'Predict future sales trends',
//     category: 'Analytics',
//     color: {
//       bg: 'bg-green-50',
//       icon: 'text-green-600',
//       hover: 'hover:bg-green-100'
//     }
//   },
    

//   {
//     icon: DollarSign,
//     title: 'Revenue Insights',
//     description: 'Track revenue streams and profitability',
//     category: 'Finance',
//     color: {
//       bg: 'bg-yellow-50',
//       icon: 'text-yellow-600',
//       hover: 'hover:bg-yellow-100'
//     }
//   },


//   {
//     icon: HelpCircle,
//     title: 'Support Resources',
//     description: 'Access help and documentation for sales tools',
//     category: 'Support',
//     color: {
//       bg: 'bg-pink-50',
//       icon: 'text-pink-600',
//       hover: 'hover:bg-pink-100'
//     }
//   },

//   {
//     icon: TrendingUp,
//     title: 'Sales Tracking',
//     description: 'Monitor and adjust sales targets',
//     category: 'Sales',
//     color: {
//       bg: 'bg-purple-50',
//       icon: 'text-purple-600',
//       hover: 'hover:bg-purple-100'
//     }
//   },
//   {
//     icon: PaintBucket,
//     title: 'Interface Customization',
//     description: 'Personalize dashboard appearance',
//     category: 'Appearance',
//     color: {
//       bg: 'bg-indigo-50',
//       icon: 'text-indigo-600',
//       hover: 'hover:bg-indigo-100'
//     }
//   },
//   {
//     icon: Bell,
//     title: 'Notification Center',
//     description: 'Manage alerts and communication',
//     category: 'Communication',
//     color: {
//       bg: 'bg-orange-50',
//       icon: 'text-orange-600',
//       hover: 'hover:bg-orange-100'
//     }
//   },
//   {
//     icon: BarChart2,
//     title: 'Analytics Dashboard',
//     description: 'Configure reporting and insights',
//     category: 'Analytics',
//     color: {
//       bg: 'bg-red-50',
//       icon: 'text-red-600',
//       hover: 'hover:bg-red-100'
//     }
//   },
//   {
//     icon: BarChart2,
//     title: 'Analytics Dashboard',
//     description: 'Configure reporting and insights',
//     category: 'Analytics',
//     color: {
//       bg: 'bg-red-50',
//       icon: 'text-red-600',
//       hover: 'hover:bg-red-100'
//     }
//   },
//   {
//     icon: MessageCircle,
//     title: 'Feedback Management',
//     description: 'Collect and process user insights',
//     category: 'Feedback',
//     color: {
//       bg: 'bg-teal-50',
//       icon: 'text-teal-600',
//       hover: 'hover:bg-teal-100'
//     }
//   },
//   {
//     icon: HelpCircle,
//     title: 'Support Resources',
//     description: 'Access help and documentation',
//     category: 'Support',
//     color: {
//       bg: 'bg-pink-50',
//       icon: 'text-pink-600',
//       hover: 'hover:bg-pink-100'
//     }
//   }
// ];

// // Reusable Menu Item Component with Enhanced Interactions
// const SettingsMenuItem = ({ 
//   icon: Icon, 
//   title, 
//   description, 
//   category,
//   color,
//   onItemClick 
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={`
//         group relative overflow-hidden rounded-xl 
//         ${color.bg} ${color.hover}
//         border border-transparent hover:border-current
//         transition-all duration-300 ease-in-out
//         cursor-pointer p-4 
//         transform hover:scale-105 hover:shadow-lg
//       `}
//       onClick={() => onItemClick && onItemClick(title)}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex items-start space-x-4">
//         {/* Floating Icon */}
//         <div className={`
//           ${color.icon} 
//           bg-white shadow-md rounded-full p-3
//           transition-transform duration-300
//           group-hover:rotate-6
//         `}>
//           <Icon size={24} strokeWidth={1.5} />
//         </div>

//         {/* Content Area */}
//         <div className="flex-1">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 
//                 group-hover:text-current transition-colors">
//                 {title}
//               </h3>
//               <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
//                 {category}
//               </p>
//             </div>

//             {/* Hover Indicator */}
//             <ChevronRight 
//               className={`
//                 opacity-0 group-hover:opacity-100
//                 transition-all duration-300
//                 transform ${isHovered ? 'translate-x-0' : '-translate-x-2'}
//                 text-gray-400
//               `} 
//               size={20} 
//             />
//           </div>
          
//           <p className="text-sm text-gray-600 mt-2 
//             group-hover:text-gray-800 transition-colors">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Dashboard Settings Component
// const DashboardSettings = ({ 
//   onSettingsItemSelect, 
//   className = '' 
// }) => {
//   // Handler for item selection
//   const handleItemClick = (itemTitle) => {
//     if (onSettingsItemSelect) {
//       onSettingsItemSelect(itemTitle);
//     }
//   };

//   return (
//     <div className={`w-full ${className}`}>
//       <div className="space-y-6">
//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {DASHBOARD_MENU_ITEMS.map((item, index) => (
//             <SettingsMenuItem
//               key={index}
//               {...item}
//               onItemClick={handleItemClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSettings;





import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  TrendingUp, 
  PaintBucket, 
  Bell, 
  BarChart2, 
  MessageCircle, 
  HelpCircle,
  ChevronRight,
  DollarSign
} from 'lucide-react';

// Enhanced Dashboard Menu Items with More Detailed Configuration
const DASHBOARD_MENU_ITEMS = [
  {
    icon: User,
    title: 'User Management',
    description: 'Manage users, roles, and permissions',
    category: 'Administration',
    color: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      hover: 'hover:bg-blue-100'
    }
  },
  {
    icon: Settings,
    title: 'System Configuration',
    description: 'Configure global system preferences',
    category: 'Settings',
    color: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      hover: 'hover:bg-green-100'
    }
  },
  {
    icon: BarChart2,
    title: 'Forecasting Tools',
    description: 'Predict future sales trends',
    category: 'Analytics',
    color: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      hover: 'hover:bg-green-100'
    }
  },
  {
    icon: DollarSign,
    title: 'Revenue Insights',
    description: 'Track revenue streams and profitability',
    category: 'Finance',
    color: {
      bg: 'bg-yellow-50',
      icon: 'text-yellow-600',
      hover: 'hover:bg-yellow-100'
    }
  },
  {
    icon: HelpCircle,
    title: 'Support Resources',
    description: 'Access help and documentation for sales tools',
    category: 'Support',
    color: {
      bg: 'bg-pink-50',
      icon: 'text-pink-600',
      hover: 'hover:bg-pink-100'
    }
  },
  {
    icon: TrendingUp,
    title: 'Sales Tracking',
    description: 'Monitor and adjust sales targets',
    category: 'Sales',
    color: {
      bg: 'bg-purple-50',
      icon: 'text-purple-600',
      hover: 'hover:bg-purple-100'
    }
  },
  {
    icon: PaintBucket,
    title: 'Interface Customization',
    description: 'Personalize dashboard appearance',
    category: 'Appearance',
    color: {
      bg: 'bg-indigo-50',
      icon: 'text-indigo-600',
      hover: 'hover:bg-indigo-100'
    }
  },
  {
    icon: Bell,
    title: 'Notification Center',
    description: 'Manage alerts and communication',
    category: 'Communication',
    color: {
      bg: 'bg-orange-50',
      icon: 'text-orange-600',
      hover: 'hover:bg-orange-100'
    }
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    description: 'Configure reporting and insights',
    category: 'Analytics',
    color: {
      bg: 'bg-red-50',
      icon: 'text-red-600',
      hover: 'hover:bg-red-100'
    }
  },
  {
    icon: MessageCircle,
    title: 'Feedback Management',
    description: 'Collect and process user insights',
    category: 'Feedback',
    color: {
      bg: 'bg-teal-50',
      icon: 'text-teal-600',
      hover: 'hover:bg-teal-100'
    }
  },
  {
    icon: HelpCircle,
    title: 'Support Resources',
    description: 'Access help and documentation',
    category: 'Support',
    color: {
      bg: 'bg-pink-50',
      icon: 'text-pink-600',
      hover: 'hover:bg-pink-100'
    }
  }
];

// Reusable Menu Item Component with Enhanced Interactions
const SettingsMenuItem = ({ 
  icon: Icon, 
  title, 
  description, 
  category,
  color,
  onItemClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        group relative overflow-hidden rounded-xl 
        ${color.bg} ${color.hover}
        border border-transparent hover:border-current
        transition-all duration-300 ease-in-out
        cursor-pointer p-4 
        transform hover:scale-105 hover:shadow-lg
      `}
      onClick={() => onItemClick && onItemClick(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-4">
        {/* Floating Icon */}
        <div className={`
          ${color.icon} 
          bg-white shadow-md rounded-full p-3
          transition-transform duration-300
          group-hover:rotate-6
        `}>
          <Icon size={24} strokeWidth={1.5} />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 
                group-hover:text-current transition-colors">
                {title}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {category}
              </p>
            </div>

            {/* Hover Indicator */}
            <ChevronRight 
              className={`
                opacity-0 group-hover:opacity-100
                transition-all duration-300
                transform ${isHovered ? 'translate-x-0' : '-translate-x-2'}
                text-gray-400
              `} 
              size={20} 
            />
          </div>
          
          <p className="text-sm text-gray-600 mt-2 
            group-hover:text-gray-800 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Settings Component
const DashboardSettings = ({ 
  onSettingsItemSelect, 
  className = '' 
}) => {
  // Handler for item selection
  const handleItemClick = (itemTitle) => {
    if (onSettingsItemSelect) {
      onSettingsItemSelect(itemTitle);
    }
  };

  return (
    <div className={`w-full mt-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard Settings
        </h1>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DASHBOARD_MENU_ITEMS.map((item, index) => (
            <SettingsMenuItem
              key={index}
              {...item}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;