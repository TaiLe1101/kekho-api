"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
function route(app) {
    const endPointURL = '/api';
    app.get('/', (req, res) => {
        const response = {
            status: 200,
            err: false,
            msg: 'Get Success',
            data: {
                Hello: "Hello Bro ^^ Welcome to web api end point api '~/api/*'",
            },
        };
        res.status(200).json(response);
    });
    app.use(endPointURL + '/products', product_1.default);
}
exports.default = route;
