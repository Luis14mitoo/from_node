"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controller/indexController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', indexController_1.default.index);
        //this.router.get('/', (req, res)=>res.send("HOLA TODOS"))
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
