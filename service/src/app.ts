// src/app.ts
import express, { Request, Response } from 'express';
import { isNotEmptyString } from './utils/is'
import usersRouter from './routes/users';


const app = express();
const router = express.Router()

const port = 3002;

// app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
