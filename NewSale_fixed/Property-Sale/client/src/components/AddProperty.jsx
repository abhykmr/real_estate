import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        price: '',
        images: [],
        type: 'sale',
        parking: false,
        furnished: false,
        offer: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormState({ ...formState, [name]: checked });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + formState.images.length > 5) {
            alert('You can only upload up to 5 images.');
            return;
        }
        setFormState({ ...formState, images: [...formState.images, ...files] });
    };

    const removeImage = (index) => {
        const updatedImages = [...formState.images];
        updatedImages.splice(index, 1);
        setFormState({ ...formState, images: updatedImages });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const formData = new FormData();
        for (const key in formState) {
            if (key === 'images') {
                formState.images.forEach((file) => formData.append('images', file));
            } else {
                formData.append(key, formState[key]);
            }
        }

        try {
            const response = await fetch('/api/add-property', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (result.success) {
                alert('Property added successfully!');
                navigate('/search', { state: { newProperty: result.property } });
            } else {
                setError(result.message || 'Failed to add property. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="p-5">
            <h1 className="text-2xl font-bold mb-5">Add Property</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formState.title}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2 bg-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium">Description</label>
                    <textarea
                        name="description"
                        value={formState.description}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2 bg-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formState.price}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2 bg-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium">Images (Max 5)</label>
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleImageUpload}
                        className="w-full bg-white border rounded px-3 py-2"
                        accept="image/*"
                    />
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {formState.images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Preview"
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-lg font-medium">Type</label>
                    <select
                        name="type"
                        value={formState.type}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2 bg-white"
                    >
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                    </select>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="parking"
                            checked={formState.parking}
                            onChange={handleCheckboxChange}
                        />
                        <span className="ml-2">Parking Available</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="furnished"
                            checked={formState.furnished}
                            onChange={handleCheckboxChange}
                        />
                        <span className="ml-2">Furnished</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="offer"
                            checked={formState.offer}
                            onChange={handleCheckboxChange}
                        />
                        <span className="ml-2">Special Offer</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? 'Adding Property...' : 'Add Property'}
                </button>
            </form>
        </section>
    );
};

export default AddProperty;
