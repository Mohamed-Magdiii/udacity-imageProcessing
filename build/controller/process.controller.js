"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class imageProcess {
    changeImage(req, res) {
        try {
            const name = req.query.name;
            const imgLocation = path_1.default.resolve('./') + `/images/${name}.jpg`;
            console.log(imgLocation);
        }
        catch (error) {
        }
    }
}
exports.default = new imageProcess();
