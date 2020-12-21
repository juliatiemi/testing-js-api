import axios from 'axios';

export const getRepository = async path => {
    try {
        const response = await axios.get(`repos/${path}`);
        console.log('response', response);
    } catch (error) {
        console.log('error', error);
    }
};
