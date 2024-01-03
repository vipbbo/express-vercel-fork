// src/app.ts
import express, { Request, Response } from 'express';
import { isNotEmptyString } from './utils/is'
import cors from 'cors';
import usersRouter from './routes/users';


const app = express();
const router = express.Router()

const port = 3002;

// app.use('/', indexRouter);
app.use('/users', usersRouter);
// 使用 CORS 中间件
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
