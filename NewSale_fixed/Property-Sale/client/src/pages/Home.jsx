
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SaleListing from "../components/SaleListing";
import RentListing from "../components/RentListing";
import OfferedListing from "../components/OfferedListing";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/60 sm:bg-gradient-to-r sm:from-black/80 sm:to-transparent"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-4xl font-extrabold sm:text-6xl text-white">
                            Supercharge Your 
                            <strong className="block mt-2 bg-white text-brand-blue px-2 py-1 inline-block uppercase">
                                Property Sales
                            </strong>
                        </h1>

                        <p className="mt-6 text-lg text-white sm:text-xl">
                            Manage, list, and sell your properties effortlessly with our advanced sales tools. Make every listing count.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate('/create_post')}
                                className="rounded bg-brand-blue px-8 py-3 text-white font-medium uppercase hover:bg-white hover:text-brand-blue duration-300"
                            >
                                List a Property
                            </button>

                            <button
                                onClick={() => navigate('/about')}
                                className="rounded border border-white px-8 py-3 text-white font-medium uppercase hover:bg-white hover:text-brand-blue duration-300"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Offers Section */}
            <section className="py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-8">
                        Exclusive Offers for Sellers
                    </h2>

                    <OfferedListing />
                </div>
            </section>

            {/* Announcement: Sell Your Property */}
            <section className='bg-gray-100 py-12'>
                <div
                    className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 items-center gap-8"
                >
                    <h2 className='text-3xl font-extrabold text-brand-blue'>
                        Maximize Your Profits with Ease
                    </h2>
                    <div className="flex justify-center sm:justify-end">
                        <button
                            className="rounded bg-brand-blue px-8 py-3 text-white font-medium hover:bg-white hover:text-brand-blue border duration-300"
                            onClick={() => navigate('/create_post')}
                        >
                            Start Selling Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Sale Listings */}
            <section className="py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-8">
                        Properties Available for Sale
                    </h2>

                    <SaleListing />
                </div>
            </section>

            {/* Announcement: Rent a Property */}
            <section className='bg-gray-100 py-12'>
                <div
                    className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 items-center gap-8"
                >
                    <h2 className='text-3xl font-extrabold text-brand-blue'>
                        Find Your Ideal Rental Property
                    </h2>
                    <div className="flex justify-center sm:justify-end">
                        <button
                            className="rounded bg-brand-blue px-8 py-3 text-white font-medium hover:bg-white hover:text-brand-blue border duration-300"
                            onClick={() => navigate('/search')}
                        >
                            Explore Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Rent Listings */}
            <section className="py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-8">
                        Rental Properties Available
                    </h2>

                    <RentListing />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
