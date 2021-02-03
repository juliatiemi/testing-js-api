import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { searchRouter } from './src/routers/index.mjs';
import { environment } from './src/constants/index.mjs';

const { PORT } = environment;

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: '50MB' }));

    app.use('/search', searchRouter);
    app.listen(PORT, () => console.log('server running'));
};

(async () => {
    createServer();
})();
