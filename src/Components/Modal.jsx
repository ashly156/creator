import React from 'react';

const Modal = ({ show, onClose, onSubmit }) => {
    if (!show) {
        return null;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmit(data);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg w-[648px] ">
                <div className="flex justify-between items-center mb-4 px-8">
                    <h2 className="text-xl font-bold">Add a new creator</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">
                        &times;
                    </button>
                </div>
                <form className='px-8' onSubmit={handleSubmit}>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-base text-black">Creator Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-3/4 mt-2 p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-base text-black">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-3/4  mt-2 p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-base text-black">Gender</label>
                        <select
                            name="gender"
                            className="w-3/4  mt-2 p-2 border rounded"
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-base text-black">Available for chat</label>
                        <div className="mt-2 w-3/4 ">
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Active"
                                    className="form-radio text-purple-600 h-5 w-5"
                                    required
                                    defaultChecked
                                />
                                <span className="ml-2">Active</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Inactive"
                                    className="form-radio text-purple-600 h-5 w-5"
                                    required
                                />
                                <span className="ml-2">Inactive</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">
                        + Add creator
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
