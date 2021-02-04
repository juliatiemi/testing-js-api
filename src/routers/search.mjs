import { Router } from 'express';
import atob from 'atob';
import { getPackageJson } from '../methods/index.mjs';
import { getOwnerAndRepo, getAllDependencies } from '../utils/index.mjs';
import { db } from '../../database.mjs';

export const searchRouter = new Router();

searchRouter.get('/', async (req, res) => {
    const {
        query: { url },
    } = req;

    const path = getOwnerAndRepo(url);

    const { content } = await getPackageJson(path);

    const packages = JSON.parse(atob(content));

    const { devDependencies = {}, dependecies = {} } = packages;

    const allDependecies = getAllDependencies(devDependencies, dependecies);

    const result = db.Frameworks.filter(framework =>
        allDependecies.includes(framework.name)
    ).map(framework => ({
        ...framework,
        categories: db.Categories.filter(category =>
            framework.categories.includes(category.id)
        ),
    }));

    res.json(result);
});
