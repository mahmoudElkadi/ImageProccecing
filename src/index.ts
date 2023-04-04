import express from 'express';
import dotenv from 'dotenv'
const app = express();
dotenv.config()
const port = process.env.PORT;
import imageRouter from './Routes/routes';


app.use('/api', imageRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
