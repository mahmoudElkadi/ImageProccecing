import { Request, Response } from 'express';
import path from 'path';
import sharpFunc from '../../../utilities/utilities';

const resizedImage = async (req: Request, res: Response) => {
  try {
    const imageName: string = req.query.imageName as string;
    const height: number = parseInt(req.query.height as string);
    const width: number = parseInt(req.query.width as string);

    sharpFunc(imageName,width,height)

    res.status(200).sendFile(path.resolve(`./resized-image/${imageName}-Width=${width}-height=${height}.jpg`))
    
  } catch (error) {
    res.status(400).send('error');
  }
};

export default resizedImage;
