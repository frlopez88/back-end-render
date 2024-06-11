import express from 'express';
const user = express();
import { auth } from '../controllers/controllerUser.js';

user.post('', auth);


export{
    user
}