import React, { useEffect, useState } from 'react'
import { getData, deleteUser, addUser } from '../Hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading';
import Modal from './Modal';
import GenderStatsModal from './GenderModal';

const List = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(7);
    const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setData(data.filter((item) => item.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleAdd = async (newUser) => {
        try {
            const addedUser = await addUser(newUser);
            setData([...data, addedUser]);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleLoadMore = () => {
        setItemsToShow(itemsToShow + 7);
    };

    const handleStatsModalOpen = () => {
        setIsStatsModalOpen(true);
        setIsModalOpen(false); 
    };

    const handleStatsModalClose = () => {
        setIsStatsModalOpen(false);
    };


    if (loading) return <Loading />;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <>
            <div className='mx-auto w-full max-w-screen-xl'>
                <div className='flex justify-between my-6 lg:flex-row flex-col '>
                    <div> 
                        <h2 className='text-2xl font-medium'>Manage creators</h2>
                    </div>
                    <div className='flex items-center mt-4 lg:mt-0'>
                        <div className='cursor-pointer border-2 border-solid border-#E1D6D6 hover:bg-[#E1D6D6] focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800' onClick={handleStatsModalOpen}>View Stats</div>
                        <div onClick={() => setIsModalOpen(true)}>
                            <a href="#" class="text-white bg-[#9B62E0] hover:bg-[#8F50DB] focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">+ Add a new creator</a>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="w-full text-left text-[#717171] text-sm leading-normal">
                                <th className="py-3 px-4 border-b border-gray-300">Name</th>
                                <th className="py-3 px-4 border-b border-gray-300">Email</th>
                                <th className="py-3 px-4 border-b border-gray-300">Gender</th>
                                <th className="py-3 px-4 border-b border-gray-300">Available for chat</th>
                                <th className="py-3 px-4 border-b border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {data.slice(0, itemsToShow).map((item) => (
                                <tr key={item.id} className="border-b border-gray-300 capitalize">
                                    <td className="py-3 px-4">{item.name}</td>
                                    <td className="py-3 px-4">{item.email}</td>
                                    <td className="py-3 px-4">{item.gender}</td>
                                    <td className={item.status === 'active' ? 'text-green-500 font-medium ' : 'text-red-500 font-medium'}> {item.status}
                                    </td>
                                    <td className="py-3 px-4">
                                        <button className="text-black-500 hover:text-black-700 font-semibold py-1 px-3 mr-2 border bg-[#EBEBEB] rounded-full">
                                            Edit
                                        </button>
                                        <button className="text-[#717171] font-semibold py-1 px-3" onClick={() => handleDelete(item.id)}>
                                            <FontAwesomeIcon className='ml-2 text-lg' icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {itemsToShow < data.length && (
                        <div className="flex justify-center mt-4">
                            <button onClick={handleLoadMore} className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm font-medium">
                                Load More  <FontAwesomeIcon className='ml-2 text-lg' icon={faChevronDown} />
                            </button>
                        </div>
                    )}
                    <GenderStatsModal isOpen={isStatsModalOpen} onClose={handleStatsModalClose} />
                    <Modal
                        show={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleAdd}
                    />
                </div>
            </div>
        </>
    )
}

export default List