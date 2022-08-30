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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
class imageProcess {
    changeImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { h, w, name } = req.query;
                const width = w ? parseInt(w, 10) : null;
                const height = h ? parseInt(h, 10) : null;
                const imgLocation = path_1.default.resolve("./") + `/images/${name}.jpg`;
                const result = fs_1.default.existsSync(imgLocation);
                const resizedImg = (path_1.default.resolve("./") +
                    `/images/thumbnails/${width}x${height}-${name}.jpg`); // set thumbnail location to retrieve later
                if (!h || !w) {
                    return res
                        .status(404)
                        .send("Please specify a correct Width and Height to process the image");
                }
                if (result) {
                    yield (0, sharp_1.default)(imgLocation).resize(width, height).toFile(resizedImg);
                    res.status(200).sendFile(resizedImg);
                }
                else {
                    return res.send("No Such file Directories");
                }
            }
            catch (error) {
                console.log(error);
                res.status(404).send("No Such file Directory");
            }
        });
    }
}
exports.default = new imageProcess();
