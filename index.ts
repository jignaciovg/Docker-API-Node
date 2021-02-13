import express, { NextFunction, Response, Request} from 'express';
import cors from 'cors';

const app = express();

app.use(cors({origin:true, credentials:true}));
app.use(express.json());


app.get('/', (req:Request, res:Response) =>{
    res.status(200).json({
        ok:true,
        msg:"API NODE funcionando correctamente"
    });
});

app.listen(9000, ()=>{
    console.log('Servidor express corriendo en el puerto 9000');
});
