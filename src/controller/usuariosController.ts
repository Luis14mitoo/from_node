import { Request, Response } from 'express';

import pool from '../database/dataBase';


//Controlador de las consultas de la base de datos
class UsuariosController {

    public async get(req: Request, res: Response): Promise<void> {
        console.log("metodo get");
        const usuario = await pool.query('SELECT * FROM `usuario`');
        console.log(usuario)
        res.json(usuario);
    }

    public async getOne(req: Request, res: Response) {
        const { cod } = req.params;
        const usuario = await pool.query('SELECT * FROM usuario WHERE id=?', [cod]);
        if (usuario.length > 0) {
            return res.json(usuario[0]);
        }
        res.status(404).json({ text: "the game doesn't exists" });
    }

    public async create(req: Request, res: Response): Promise<void> {

        const usuario = await pool.query('INSERT INTO usuario SET ?', [req.body]);
        res.json('usuario creado');
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { cod } = req.params;
        const usuario = await pool.query('UPDATE usuario SET ? WHERE id=?', [req.body, cod]);
        res.json('Usuario creado');
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { cod } = req.params;
        const usuario = await pool.query('DELETE * FROM usuario WHERE id=?', [cod]);
        res.json('Usuario Borrado');
    }






}

const usuariosController = new UsuariosController();
export default usuariosController;