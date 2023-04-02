import { Router } from 'express';
// Controllers
import {
    getPatients,
    createPatient,
    updatePatient,
    deletePatient,
} from '../controllers/patients.controllers.js';

const router = Router();

router.get('/patients', getPatients);
router.post('/patients', createPatient);
router.patch('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

export default router;