import { Router } from 'express';
import { getRepository } from '../methods';
import { getOwnerAndRepo } from '../utils';

export const searchRouter = new Router();

searchRouter.get('/', async (req, res) => {
    const { url } = req;

    const path = getOwnerAndRepo(url);

    const defaultBranch = getRepository(path);
});
