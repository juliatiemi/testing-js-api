import { InvalidUrlError } from '../errors/index.mjs';

export const getOwnerAndRepo = url_ => {
    const { pathname } = new URL(url_);
    return pathname;
};

export const verifyUrl = (url, res) => {
    console.log(url);
    if (!url.includes('github.com')) {
        InvalidUrlError(res);
    }
};

export const getAllDependencies = (devDependencies, dependencies) => {
    const devDependenciesKeys = Object.keys(devDependencies);
    const dependenciesKeys = Object.keys(dependencies);

    return [...new Set([...devDependenciesKeys, ...dependenciesKeys])];
};
