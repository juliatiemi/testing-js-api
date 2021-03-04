import { GetPackageJsonError } from '../errors/GetPackageJsonError.mjs';
import { getAxiosCommonConfig as axios } from './config.mjs';

export const getPackageJson = async (path, res) => {
    try {
        const response = await axios().get(`repos${path}contents/package.json`);

        return response.data;
    } catch (err) {
        GetPackageJsonError(res, err);
    }
};
