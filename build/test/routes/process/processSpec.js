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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing Image Api endpoint', () => {
    it('get Api without providing the name parameter returns 404', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/v1/imageProcess').expect(404);
    }));
    //   it('Using the endpoint with a non-existent image returns 404', async () => {
    //     await request.get('/api/v1/imageProcessing?name=fjord').expect(404);
    //   });
    it('get Api with valid path image, but with invalid width and height returns 404', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/v1/imageProcess?name=Desert').expect(404);
    }));
    it('Using the endpoint with a valid img and width and height returns 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/v1/imageProcess?name=Desert&w=500&h=200').expect(200);
    }));
});
