import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaSearch } from 'react-icons/fa';
import { LuSearchX } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTermState } from '../redux/search/searchSlice';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

const defaultProperties = [
    {
        _id: 'default1',
        title: 'Modern Apartment',
        price: 1200,
        type: 'Rent',
        parking: true,
        furnished: true,
        image: '/istockphoto-2155879454-612x612.webp',
    },
    {
        _id: 'default2',
        title: 'Luxury Villa',
        price: 4500,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1558036117-15d82a90b9b1.avif',
    },
    {
        _id: 'default3',
        title: 'Cozy Studio',
        price: 800,
        type: 'Rent',
        parking: false,
        furnished: true,
        image: '/photo-1580587771525-78b9dba3b914.avif',
    },
   
    {
        _id: 'default4',
        title: 'Tokyo Skylight Penthouse',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default5',
        title: 'Blossom Villa',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default6',
        title: 'Zozo House',
        price: 1000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default7',
        title: 'Habitual House',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default8',
        title: 'Rome House',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default9',
        title: 'Sunlit Shores Villa',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },

    {
        _id: 'default10',
        title: 'Alpine Serenity Lodge',
        price: 2000,
        type: 'Sale',
        parking: true,
        furnished: false,
        image: '/photo-1572120360610-d971b9d7767c.avif',
    },
   
];

const Search = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(1);
    const scrollRef = useRef();
    const { searchTermState } = useSelector((state) => state.search);
    const location = useLocation();
    const [formState, setFormState] = useState({
        searchTerm: '',
        parking: false,
        type: 'all',
        furnished: false,
        offer: false,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTermState(''));
        setFormState({
            searchTerm: '',
            parking: false,
            type: 'all',
            furnished: false,
            offer: false,
        });
    };

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `/api/posts?searchTerm=${searchTermState}&type=${formState.type}&parking=${formState.parking}&furnished=${formState.furnished}&offer=${formState.offer}&page=${pageCount}`
                );
                const json = await res.json();
                if (json.success === false) {
                    setLoading(false);
                } else {
                    setListings(json);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        })();
    }, [formState, searchTermState, pageCount]);

    useEffect(() => {
        if (location.state?.newProperty) {
            setListings((prevListings) => [location.state.newProperty, ...prevListings]);
        }
    }, [location.state]);

    const handleChange = (name, value) => {
        setPageCount(1);
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleAddProperty = () => {
        navigate('/add-property');
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [listings]);

    return (
        <>
            <section>
                <div ref={scrollRef}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:max-h-full lg:min-h-screen">
                        <div className="option_container md:col-span-3 mt-1 bg-white lg:max-h-full lg:min-h-screen">
                            {/* Sidebar content */}
                            <div className="items_container p-5 py-8">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control w-full max-w-full sm:max-w-full relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="search sm:max-w-full"
                                            onChange={(e) =>
                                                dispatch(setSearchTermState(e.target.value))
                                            }
                                            value={searchTermState}
                                        />
                                        <button
                                            type="submit"
                                            className="search_btn bg-brand-blue"
                                        >
                                            <i className="text-center text-white font-bold">
                                                <BsSearch />
                                            </i>
                                        </button>
                                    </div>
                                </form>
                                <div className="add-property-container mt-5">
                                    <button
                                        className="w-full py-2 px-2 bg-green-500 text-white rounded-sm hover:bg-green-600"
                                        onClick={handleAddProperty}
                                    >
                                        Add Property
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="listing_container md:col-span-9 pb-10 pt-2">
                            {loading ? (
                                <div className="loading_container mt-40 flex items-center justify-center flex-col">
                                    <FaSearch className="font-xl text-brand-blue font-bold text-xl text-center" />
                                    <p className="font-heading text-lg text-center text-brand-blue">
                                        Searching...
                                    </p>
                                </div>
                            ) : listings.length !== 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8">
                                    {listings.map((listing) => (
                                        <ListingCard key={listing._id} listing={listing} />
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8">
                                    {defaultProperties.map((property) => (
                                        <div
                                            key={property._id}
                                            className="bg-white rounded shadow-lg overflow-hidden"
                                        >
                                            <img
                                                src={property.image}
                                                alt={property.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold">{property.title}</h2>
                                                <p className="text-gray-600">${property.price}</p>
                                                <p className="text-sm text-gray-500">
                                                    {property.type} | Parking: {property.parking ? 'Yes' : 'No'} |{' '}
                                                    Furnished: {property.furnished ? 'Yes' : 'No'}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Search;
