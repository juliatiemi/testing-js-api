import Axios from 'axios';
import { GITHUB_API_URL } from '../constants';

export const getAxiosCommonConfig = accessToken => {
    return Axios.create({
        baseURL: `${GITHUB_API_URL}`,
        headers: 'application/vnd.github.v3+json',
    });
};
