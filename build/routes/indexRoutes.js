"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controller/usuariosController"));
//Rutes API, Controla las rutas
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.default.get);
        this.router.post('/add', usuariosController_1.default.create);
        this.router.get('/getOne/:cod', usuariosController_1.default.getOne);
        this.router.put('/put/:cod', usuariosController_1.default.update);
        this.router.delete('/delete/:cod', usuariosController_1.default.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
