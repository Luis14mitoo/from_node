"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//controlador inicio
class IndexController {
    index(req, res) {
        res.json({ tex: 'API IS /api/usuarios' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
