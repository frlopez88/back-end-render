import express from 'express';
const app = express();
import cors from 'cors';
import { user } from './routes/routeUser.js';
import { comida } from './routes/routeComidas.js';
import jwt from 'jsonwebtoken'

//middleware 
app.use(express.json());
app.use(cors());

const verificarToken =(req, res, next)=>{

    //console.log(req);
    const symbols = Object.getOwnPropertySymbols(req);
    const kHeaderSymbol = symbols.find(  sym => sym.toString() === 'Symbol(kHeaders)');


    if (kHeaderSymbol) {

        const headers = req[kHeaderSymbol];
        const {authorization} = headers;
        const arr_auth = authorization.split(" ");
        const bearToken  = arr_auth[1];
        
        try {

            const decodeToken = jwt.verify(bearToken, 'secret');
            next();

        }catch(err){

            res.json({mensaje: "Token Invalido"});

        }

    }
    
    

}

app.use('/api/auth',user)
app.use('/api/comida', verificarToken,  comida)


app.listen( 3000, ()=>{
    console.log("Servicio en el puerto 3000");
} )