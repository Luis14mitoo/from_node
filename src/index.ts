import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes'



class Server{
    public app: Application;


    constructor() {

        //Invoca los modulos de expres
        this.app=express();
        this.config();
        this.routes();

    }

    //configuracion del servidor
    config(): void {


        //configuracion de puerto
        this.app.set('port', process.env.PORT||3000);

        //Inicializacion de morgan para estar pendiente de las peticiones cliente
        this.app.use(morgan('dev'));


        //inicia modulo peticiones al servidor
        this.app.use(cors());

 
        //Envio de peticiones JSON
        this.app.use(express.json());


        //envia peticiones html
        this.app.use(express.urlencoded({ extended: false }))

    }

    ///configuracion de rutas 
    routes(): void {

       this.app.use(usuariosRoutes);
       this.app.use('/api', indexRoutes);

    }

    //metodo inicio servidor
    start(): void {
        this.app.listen(this.app.get('port'),
            () => { console.log('Server on port', this.app.get('port')) })

    }

 


}
const server = new Server();
server.start();