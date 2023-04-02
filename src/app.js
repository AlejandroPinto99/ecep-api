import express from 'express';
import patientsRoutes from './routes/patients.routes.js';
import municipiosRouter from './routes/municipios.routes.js'
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use(patientsRoutes);
app.use(municipiosRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found",
    })
})

export default app;