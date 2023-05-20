import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouters from './routes/posts.js';
import userRouters from './routes/user.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRouters);
app.use('/user', userRouters);

const CONNECTION_URL =
  'mongodb+srv://RadhikaBansal:Radhika.BANSAL123@cluster0.hh46do3.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(` mongo Server Running on  Port: ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not   connect`));

app.get('/', (req, res) => {
  res.send('this is   social media mongoose home page ');
});
