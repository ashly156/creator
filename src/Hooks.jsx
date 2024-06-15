import axios from 'axios';

const API_BASE_URL = 'https://gorest.co.in/public/v2';
const API_TOKEN = 'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb';

export const getData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: { Authorization: API_TOKEN },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_BASE_URL}/users/${userId}`, {
            headers: { Authorization: API_TOKEN },
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const addUser = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, data, {
            headers: {
                Authorization: API_TOKEN,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const getGenderStats = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: API_TOKEN,
            },
        });

        if (!response.data.data) {
            throw new Error('No data available');
        }

         const genderCounts = response.data.data.reduce((acc, user) => {
            if (user.gender in acc) {
                acc[user.gender]++;
            } else {
                acc[user.gender] = 1;
            }
            return acc;
        }, {});

        const genderData = Object.keys(genderCounts).map(gender => ({
            gender,
            count: genderCounts[gender],
        }));

        return genderData;
    } catch (error) {
        console.error('Error fetching gender statistics:', error);
        throw error;
    }
};

