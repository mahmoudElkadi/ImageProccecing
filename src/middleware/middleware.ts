import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

const valdationImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const imageName: string = req.query.imageName as string;
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);
  if (
    imageName == undefined ||
    imageName == '' ||
    isNaN(width) ||
    isNaN(height)
  ) {
    res.status(400).send('please enter correct information about iamges');
  } else {
    fs.promises
      .open(path.resolve(`./images/${imageName}.jpg`))
      .then(async () => {
        next();
      })
      .catch(() => {
        res.status(400).send('please enter image name correctly');
      });
  }
};

const existIamge = async (req: Request, res: Response, next: NextFunction) => {
  const imageName: string = req.query.imageName as string;
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);
  fs.promises
    .open(
      path.resolve(
        `./resized-image/${imageName}-Width=${width}-height=${height}.jpg`
      )
    )
    .then(() => {
      res.sendFile(
        path.resolve(
          `./resized-image/${imageName}-Width=${width}-height=${height}.jpg`
        )
      );
    })
    .catch(() => {
      next();
    });
};

export default { existIamge, valdationImage };
