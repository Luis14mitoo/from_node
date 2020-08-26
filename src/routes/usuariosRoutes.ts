import {Router} from 'express';
import indexController from '../controller/indexController';

class GamesRoutes{

    router : Router = Router();

    constructor(){
        this.router.get('/', indexController.index)
      //this.router.get('/', (req, res)=>res.send("HOLA TODOS"))
    }
    
}
const gamesRoutes= new GamesRoutes();
export default gamesRoutes.router;