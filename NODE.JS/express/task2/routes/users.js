import express from 'express';

const routerUsers = express.Router()

let users = [{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' }];

routerUsers.get('/', (req, res) => {
  res.json(users);
});

routerUsers.post('/', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

routerUsers.get('/:id',(req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
})

routerUsers.put('/:id',(req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    user.name=req.body.name;
    res.json(user)
})

routerUsers.delete('/:id',(req,res)=>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json(users);
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
})


export default routerUsers;
