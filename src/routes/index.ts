import express from 'express';
import processRouter from "./process.router";


const router :express.Router = express.Router();


router.use('/imageProcess' , processRouter)

export default (app : express.Application) => {
    app.use('/api/v1', router);
};
  