import { Router } from 'express';
import { getPackageJson } from '../methods/index.mjs';
import { getOwnerAndRepo } from '../utils/index.mjs';

export const searchRouter = new Router();

searchRouter.get('/', async (req, res) => {
    const { url } = req;

    const path = getOwnerAndRepo(url);

    const { content } = await getPackageJson(path);

    const packages = atob(content);

    const devDependencies = packages['devDependencies'];
    const dependecies = packages['dependecies'];
});
