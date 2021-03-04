export const GetPackageJsonError = (res, err) => {
    const error = {
        code: 2,
        message: 'Não foi possível encontrar o package.json do repositório.',
        details: err,
    };

    res.json(error);
};
