import sharp from "sharp"
import path from "path"

const sharpFunc=(name:string,width:number,height:number)=>{
    sharp(path.resolve(`./images/${name}.jpg`))
    .resize(height, width)
    .toFile(
      path.resolve(
        `./resized-image/${name}-Width=${width}-height=${height}.jpg`
      ))


} 

export default sharpFunc