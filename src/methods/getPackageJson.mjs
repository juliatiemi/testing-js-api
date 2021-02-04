import { getAxiosCommonConfig as axios } from './config.mjs';

export const getPackageJson = async path => {
    try {
        const response = await axios().get(`repos${path}contents/package.json`);

        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};
