import { Router } from 'express';
// Controllers
import {
    getMunicipios,
} from '../controllers/municipios.controllers.js';

const router = Router();

router.get('/municipios', getMunicipios);

export default router;