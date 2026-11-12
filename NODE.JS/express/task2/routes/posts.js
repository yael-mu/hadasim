import express from 'express';
import routerComments from './comments.js';

const routerPosts = express.Router()

export const posts = [
    { id: 1, title: 'First post' },
    { id: 2, title: 'Second post' }
];

export const postsComments = [
    { id: 1, text: 'First comment on first post' },
    { id: 2, text: 'First comment on second post' }
]

    routerPosts.get('/', (req, res) => {
        res.json(posts)
    })

routerPosts.get('/:postId', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.postId))
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post)
})

routerPosts.use('/:postId/comments', routerComments)

export default routerPosts;