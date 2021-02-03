import Axios from 'axios';
import { environment } from '../constants/index.mjs';

const { GITHUB_API_URL } = environment;

export const getAxiosCommonConfig = accessToken => {
    return Axios.create({
        baseURL: `${GITHUB_API_URL}`,
        headers: 'application/vnd.github.v3+json',
    });
};
