import axios from 'axios';

export const getPackageJson = async path => {
    try {
        const response = await axios.get(`repos/${path}/contents/package.json`);
        console.log('response', response);
    } catch (error) {
        console.log('error', error);
    }
};
