import express from 'express';
import cors from 'cors';
import { PORT } from './src/constants';

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: '50MB' }));

    app.use('/search', searchRouter);
    app.listen();
};

(async () => {
    createServer();
})();
