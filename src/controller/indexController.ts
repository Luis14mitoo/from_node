import {Request, Response} from 'express';

//controlador inicio
class IndexController{

    public index(req:Request, res:Response){
        res.json({tex:'API IS /api/usuarios'})
    }
}
 const indexController = new IndexController();
 export default indexController;