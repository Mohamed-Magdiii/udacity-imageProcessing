import { Request, Response } from 'express';
import  fs  from 'fs';
import path from 'path';
class imageProcess {
    changeImage(req :Request ,res:Response){
        try {
           
                const name = req.query.name as String
                const imgLocation = path.resolve('./') + `/images/${name}.jpg`
              const result :Boolean=  fs.existsSync(imgLocation)
                console.log(result)
        } catch (error) {
            res.send("No Such file Directory")
        }
    }
}


export default new imageProcess();