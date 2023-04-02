import express from 'express';
import patientsRoutes from './routes/patients.routes.js';

const app = express();

app.use(express.json());
app.use(patientsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found",
    })
})

export default app;