import express from 'express';
import { posts, postsComments } from './posts.js';

const routerComments = express.Router({ mergeParams: true });

routerComments.use((req, res, next) => {
    const postId = Number(req.params.postId);
    const post=posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }
    next();
});

routerComments.get('/', (req, res) => {
    res.json(postsComments[req.params.postId]);
})

routerComments.post('/',(req,res)=>{
    const newcomment= { id: Date.now(), idPost: Number(req.params.postId), text: req.body.text };
    postsComments.push(newcomment);
    res.status(201).json(newcomment);
    
})


export default routerComments;