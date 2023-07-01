import express,{ Express,Request,Response }  from "express";
import dotenv from 'dotenv';

//configuration the .env file
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 8001;

// Define rutas
app.get('/',(req: Request,res: Response)=>{
    //Send hello world
    res.send('Welcome to API RESTFUL APP Express + TS + Swagger + Mongoose');
});
app.get('/hello',(req: Request,res: Response)=>{
    //Send hello world
    res.send('Welcome to API get route: hello');
});
app.listen(port,()=>{
    console.log(`Express server: Running at http://localhost:${port}`)
})
