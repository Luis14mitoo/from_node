import { Router } from 'express';
import usuariosController from '../controller/usuariosController';


//Rutes API, Controla las rutas

class IndexRoutes {

    public router: Router = Router();


    constructor() {

        this.config();
    }

    config() {
        this.router.get('/', usuariosController.get);
        this.router.post('/add', usuariosController.create);
        this.router.get('/getOne/:cod', usuariosController.getOne);
        this.router.put('/put/:cod', usuariosController.update);
        this.router.delete('/delete/:cod', usuariosController.delete);

    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;