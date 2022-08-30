import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";
class imageProcess {
  async changeImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { h, w, name } = req.query;
      const width: number | null = w ? parseInt(w as string, 10) : null;
      const height: number | null = h ? parseInt(h as string, 10) : null;
      const imgLocation = path.resolve("./") + `/images/${name as string}.jpg`;
      const result: boolean = fs.existsSync(imgLocation);
      const resizedImg = (path.resolve("./") +
        `/images/thumbnails/${width}x${height}-${name}.jpg`) as string; // set thumbnail location to retrieve later
      if (!h || !w) {
       return res
          .status(404)
          .send(
            "Please specify a correct Width and Height to process the image"
          );
      }
      if (result) {
        await sharp(imgLocation).resize(width, height).toFile(resizedImg);
        res.status(200).sendFile(resizedImg);
      } else {
        return  res.send("No Such file Directories");
      }
    } catch (error) {
      console.log(error);
      res.status(404).send("No Such file Directory");
    }
  }
}

export default new imageProcess();
