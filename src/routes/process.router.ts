import {Router , Request,Response } from 'express'
import path from 'path';
import * as imageProcess from '../controller/process.controller';
const router : Router = Router();



router.get('/' , imageProcess.default.changeImage)


export default router