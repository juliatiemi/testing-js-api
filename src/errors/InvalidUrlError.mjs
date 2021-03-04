export const InvalidUrlError = res => {
    const error = {
        code: 1,
        message: 'A URL deve ser um repositório do GitHub.',
    };

    res.json(error);
};
