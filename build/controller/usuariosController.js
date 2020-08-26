"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBase_1 = __importDefault(require("../database/dataBase"));
//Controlador de las consultas de la base de datos
class UsuariosController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("metodo get");
            const usuario = yield dataBase_1.default.query('SELECT * FROM `usuario`');
            console.log(usuario);
            res.json(usuario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod } = req.params;
            const usuario = yield dataBase_1.default.query('SELECT * FROM usuario WHERE id=?', [cod]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: "the game doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield dataBase_1.default.query('INSERT INTO usuario SET ?', [req.body]);
            res.json('usuario creado');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod } = req.params;
            const usuario = yield dataBase_1.default.query('UPDATE usuario SET ? WHERE id=?', [req.body, cod]);
            res.json('Usuario creado');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod } = req.params;
            const usuario = yield dataBase_1.default.query('DELETE * FROM usuario WHERE id=?', [cod]);
            res.json('Usuario Borrado');
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
