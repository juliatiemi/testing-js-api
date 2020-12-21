import { InvalidUrlError } from '../errors';

export const getOwnerAndRepo = url_ => {
    const { pathname } = new URL(url_);
    return pathname;
};

export const verifyUrl = url => {
    if (!url.contains('github.com')) throw new InvalidUrlError();
};
