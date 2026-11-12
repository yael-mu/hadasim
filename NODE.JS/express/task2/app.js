import express from 'express';
import routerGreet from './routes/greet.js';
import routerUsers from './routes/users.js';
import routerPosts from './routes/posts.js';

const app = express();

app.use(express.json());

app.use(routerGreet)
app.use("/users", routerUsers)
app.use("/users/1", routerUsers)
app.use("/users/1", routerUsers)
app.use("/users/2", routerUsers)
app.use("/posts", routerPosts)
app.use("/posts/1", routerPosts)

app.listen(3000, () => {
  console.log('Listening on port 3000');
});