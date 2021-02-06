import express, { NextFunction, Response, Request} from 'express';
import cors from 'cors';

const app = express();
app.use(cors({origin:true, credentials:true}));
app.use(express.json);


app.get('/',(req:Request, res:Response) =>{
    res.status(200).json({
        ok:true,
        msg:"Api funcionando"
    });
});
app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});

