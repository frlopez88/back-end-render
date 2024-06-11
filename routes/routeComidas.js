import express from 'express';
const comida = express();
import { getComidas } from '../controllers/controllerComida.js';

comida.get('', getComidas);


export{
    comida
}