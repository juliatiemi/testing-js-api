export class InvalidUrlError extends Error {
    constructor() {
        const error = {
            code: '001',
            message: 'A URL deve ser um repositório do Gitlab.',
        };
        super(error, 400);
    }
}
