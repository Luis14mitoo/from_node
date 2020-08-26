"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
class Server {
    constructor() {
        //Invoca los modulos de expres
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //configuracion del servidor
    config() {
        //configuracion de puerto
        this.app.set('port', process.env.PORT || 3000);
        //Inicializacion de morgan para estar pendiente de las peticiones cliente
        this.app.use(morgan_1.default('dev'));
        //inicia modulo peticiones al servidor
        this.app.use(cors_1.default());
        //Envio de peticiones JSON
        this.app.use(express_1.default.json());
        //envia peticiones html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    ///configuracion de rutas 
    routes() {
        this.app.use(usuariosRoutes_1.default);
        this.app.use('/api', indexRoutes_1.default);
    }
    //metodo inicio servidor
    start() {
        this.app.listen(this.app.get('port'), () => { console.log('Server on port', this.app.get('port')); });
    }
}
const server = new Server();
server.start();
