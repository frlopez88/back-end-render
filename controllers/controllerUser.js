import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const key_encript = process.env.KEY_ENCRIPT; 

const usuarios = [
    {
        user_name : "frlopez", 
        pass : "Hola12", 
        correo : "frlopez@unitec.edu"
    }, 
    {
        user_name : "alba.zuniga", 
        pass : "Hola12", 
        correo :"alba.zuniga@unitec.edu"
    }
];


const auth = ( req, res  )=>{

    const {user_name , pass} = req.body;

    let user_auth =  { mensaje : "usuario no encontrado" };

    for (const usuario of usuarios){

        if (usuario.user_name === user_name && usuario.pass === pass){
            user_auth = usuario;
            const token = jwt.sign( usuario, key_encript, { expiresIn: '1h' } )
            user_auth.token = token;
        }

    }

   

    res.json(user_auth);


};



export {
    auth
}