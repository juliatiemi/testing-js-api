import url from 'url';

export const getOwnerAndRepo = url_ => {
    const { pathname } = new URL(url_);
    return pathname;
};

export const verifyUrl = url => {
    if (!url.contains('github.com')) throw new Error();
};
