import express from 'express';
import routes from './routes/routes';
import routesMotor from './routes/routesMotor';

const app = express();
app.use(express.json());
app.use(routes);
app.use(routesMotor);

export default app;
