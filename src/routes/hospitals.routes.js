import { Router } from 'express';

//Controllers
import { getHospitals } from '../controllers/hospitals.controllers.js';

const router = Router();

router.get('/hospitals', getHospitals);

export default router;