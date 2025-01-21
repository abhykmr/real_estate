import React, { useState } from 'react';
import { Search, MapPin, Camera, Heart, ChevronDown, X } from 'lucide-react';

const PropertyListingPage = () => {
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  const [flatType, setFlatType] = useState('');
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');
  const [construction, setConstruction] = useState('');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [viewType, setViewType] = useState('list');
  const [favorites, setFavorites] = useState([]);

  // Sample property data
  const properties = [
    {
      id: 1,
      name: "Sunset Villas",
      location: "Malibu",
      city: "California",
      builder: "Pacific Builders",
      price: { min: 500000, max: 1200000, unit: 'USD' },
      possession: "2026",
      images: ['/propertyimage/img-1.jpg'],
      floorPlans: 3,
      photoCount: 45,
      description: "Sunset Villas offers luxurious seaside living with modern amenities and breathtaking ocean views.",
    },
    {
      id: 2,
      name: "Greenwood Estates",
      location: "Lakewood",
      city: "Colorado",
      builder: "Green Valley Developers",
      price: { min: 350000, max: 750000, unit: 'USD' },
      possession: "2024",
      images: ['/propertyimage/img-2.jpg'],
      floorPlans: 2,
      photoCount: 30,
      description: "Greenwood Estates features eco-friendly homes surrounded by nature trails and open spaces.",
    },
    {
      id: 3,
      name: "Maple Grove",
      location: "Edison",
      city: "New Jersey",
      builder: "Maple Builders",
      price: { min: 420000, max: 900000, unit: 'USD' },
      possession: "2025",
      images: ['/propertyimage/img-3.jpg'],
      floorPlans: 3,
      photoCount: 50,
      description: "Maple Grove is a modern residential community located in the heart of Edison with easy access to amenities.",
    },
    {
      id: 4,
      name: "Pine Hill Residences",
      location: "Austin",
      city: "Texas",
      builder: "Hilltop Construction",
      price: { min: 300000, max: 650000, unit: 'USD' },
      possession: "2023",
      images: ['/propertyimage/img-4.jpg'],
      floorPlans: 2,
      photoCount: 35,
      description: "Pine Hill Residences combines affordability with a vibrant city lifestyle in the heart of Austin.",
    },
    {
      id: 5,
      name: "Orchard Park",
      location: "Buffalo",
      city: "New York",
      builder: "Orchard Homes Inc.",
      price: { min: 250000, max: 600000, unit: 'USD' },
      possession: "2024",
      images: ['/propertyimage/img-5.jpg'],
      floorPlans: 2,
      photoCount: 28,
      description: "Orchard Park offers spacious family homes in a quiet suburban setting with excellent schools nearby.",
    },
    {
      id: 6,
      name: "Crescent Bay",
      location: "Miami",
      city: "Florida",
      builder: "Coastal Living Developers",
      price: { min: 600000, max: 1500000, unit: 'USD' },
      possession: "2026",
      images: ['/propertyimage/img-6.jpg'],
      floorPlans: 2,
      photoCount: 60,
      description: "Crescent Bay offers luxurious beachfront living with high-end facilities and stunning ocean views.",
    },
    {
      id: 7,
      name: "Silver Creek Homes",
      location: "Denver",
      city: "Colorado",
      builder: "Silver Creek Builders",
      price: { min: 400000, max: 950000, unit: 'USD' },
      possession: "2025",
      images: ['/propertyimage/img-7.jpg'],
      floorPlans: 2,
      photoCount: 40,
      description: "Silver Creek Homes provide modern and eco-friendly homes with scenic mountain views.",
    },
    {
      id: 8,
      name: "Blue Ridge Apartments",
      location: "Seattle",
      city: "Washington",
      builder: "Urban Nest Developers",
      price: { min: 500000, max: 1100000, unit: 'USD' },
      possession: "2025",
      images: ['/propertyimage/img-8.jpg'],
      floorPlans: 2,
      photoCount: 25,
      description: "Blue Ridge Apartments feature stylish urban living with state-of-the-art facilities in downtown Seattle.",
    },
    {
      id: 9,
      name: "Willow Springs",
      location: "Nashville",
      city: "Tennessee",
      builder: "Southern Comfort Builders",
      price: { min: 320000, max: 700000, unit: 'USD' },
      possession: "2023",
      images: ['/propertyimage/img-9.jpg'],
      floorPlans: 2,
      photoCount: 35,
      description: "Willow Springs offers affordable homes in a vibrant community with great connectivity to Nashville.",
    },
    {
      id: 10,
      name: "Oakwood Heights",
      location: "San Jose",
      city: "California",
      builder: "Evergreen Developers",
      price: { min: 750000, max: 2000000, unit: 'USD' },
      possession: "2026",
      images: ['/propertyimage/img-10.jpg'],
      floorPlans: 4,
      photoCount: 55,
      description: "Oakwood Heights provides premium residences with luxurious amenities in the heart of Silicon Valley.",
    },
  ];
  

  const Header = () => (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/propertyimage/285.jpg" alt="Logo" className="h-10" />
        <nav className="flex gap-6">
          <button className="hover:text-blue-600">Buy</button>
          <button className="hover:text-blue-600">Rent</button>
          <button className="hover:text-blue-600">Sell</button>
          <button className="hover:text-blue-600">Property Services</button>
          <button className="hover:text-blue-600">Help</button>
        </nav>
        <div className="flex gap-4 items-center">
          {/* <button className="text-gray-700 hover:text-blue-600">Sign In</button> */}
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Post Property FREE
          </button>
        </div>
      </div>
    </header>
  );

  const SearchFilters = () => (
    <div className="bg-red-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1 bg-white rounded-lg overflow-hidden flex items-center">
            <select 
              className="p-2 border-r flex-1"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option>America</option>
              <option>los angles</option>
              <option>New york</option>
            </select>
            <input
              type="text"
              placeholder="Add More..."
              className="p-2 flex-1 outline-none"
            />
            <button className="p-2">
              <Search className="text-gray-500" />
            </button>
          </div>

          <div className="flex gap-2">
            <button 
              className="bg-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setFlatType(flatType ? '' : 'Flat')}
            >
              Flat Type {flatType && <X size={16} />}
              <ChevronDown size={16} />
            </button>

            <button 
              className="bg-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setBudget(budget ? '' : 'Budget')}
            >
              Budget {budget && <X size={16} />}
              <ChevronDown size={16} />
            </button>

            <button 
              className="bg-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setBhk(bhk ? '' : 'BHK')}
            >
              BHK {bhk && <X size={16} />}
              <ChevronDown size={16} />
            </button>

            <button 
              className="bg-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setConstruction(construction ? '' : 'Construction')}
            >
              Construction {construction && <X size={16} />}
              <ChevronDown size={16} />
            </button>

            <button 
              className="bg-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setShowMoreFilters(!showMoreFilters)}
            >
              More Filters
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 hover:shadow-lg transition-shadow">
      <div className="flex">
        <div className="relative w-96">
          <img 
            src={property.images[0]} 
            alt={property.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-2 left-2 flex gap-2">
            <span className="bg-black/50 text-white px-2 py-1 rounded-full text-sm">
              <Camera size={16} className="inline mr-1" />
              {property.photoCount} Photos
            </span>
            <span className="bg-black/50 text-white px-2 py-1 rounded-full text-sm">
              {property.floorPlans} Floor Plan
            </span>
          </div>
          <button 
            className={`absolute top-2 right-2 p-2 rounded-full ${
              favorites.includes(property.id) 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white/80 text-gray-600'
            }`}
            onClick={() => setFavorites(prev => 
              prev.includes(property.id)
                ? prev.filter(id => id !== property.id)
                : [...prev, property.id]
            )}
          >
            <Heart 
              size={20} 
              fill={favorites.includes(property.id) ? 'currentColor' : 'none'} 
            />
          </button>
        </div>

        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{property.name}</h2>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin size={16} />
                {property.location}, {property.city}
              </p>
              <p className="text-gray-500 text-sm mt-1">by {property.builder}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-900">
                ₹ {property.price.min} - {property.price.max} {property.price.unit}
              </div>
              <div className="text-gray-600">Possession: {property.possession}</div>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{property.description}</p>

          <div className="mt-4 flex justify-between items-center">
            <button 
              className="text-blue-600 hover:underline"
              onClick={() => {/* Handle read more click */}}
            >
              read more
            </button>
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="form-checkbox" />
              Add to Compare
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchFilters />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            New Residential Projects in {selectedCity}
          </h1>
          <div className="flex gap-4 items-center">
            <select 
              className="p-2 border rounded"
              onChange={(e) => {/* Handle sort change */}}
            >
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button 
              className={`p-2 ${viewType === 'list' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setViewType('list')}
            >
              LIST
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PropertyListingPage;