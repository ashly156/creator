import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart'; 
import { getGenderStats } from '../Hooks'; 
import Loading from './Loading';

const GenderStatsModal = ({ isOpen, onClose }) => {
    const [genderData, setGenderData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenderStats = async () => {
            try {
                const data = await getGenderStats();
                setGenderData(data);
                console.log("dat",genderData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (isOpen) {
            fetchGenderStats();
        }
    }, [isOpen]);


    return (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-4 rounded shadow-lg w-[648px]">
                <div className="flex justify-between items-center mb-4 px-8">
                    <h2 className="text-xl font-bold">Gender Statistics</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">
                        &times;
                    </button>
                </div>
                <div className="px-8">
                    {loading ? (
                        <Loading/>
                    ) : error ? (
                        <p>Error: {error.message}</p>
                    ) : (
                        <>
                            {genderData.length === 0 ? (
                                <p>No data available.</p>
                            ) : (
                                <div className="flex justify-center">
                                    <PieChart
                                        data={genderData.map(item => ({
                                            title: item.gender,
                                            value: item.count,
                                            color: item.gender === 'Male' ? '#3B82F6' : '#F87171' // Example colors
                                        }))}
                                        label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value})`}
                                        labelStyle={{ fontSize: '5px' }}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GenderStatsModal;
