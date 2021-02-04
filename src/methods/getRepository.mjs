import { getAxiosCommonConfig as axios } from './config.mjs';

export const getRepository = async path => {
    try {
        const response = await axios().get(`repos/${path}`);

        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};
