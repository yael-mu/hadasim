const express = require('express');
const app = express();

app.use(express.json());

app.get('/greet', (req, res) => {
    const timestamp = new Date().toISOString();
    res.json({ msg: `hi from get endpoint ${timestamp}` });
});

app.get('/greet/:name', (req, res) => {
    console.log(`i got name: ${req.params.name}`);
    res.json({ msg: `got name: ${req.params.name}` });
});

app.get('/test', async (req, res) => {
    const name = "yael"
    const response = await fetch('http://localhost:3000/greet/' + name);
    const data = await response.json();
    if (data.msg && data.msg.includes(name))
        res.json({ result: "ok" })
    else
        res.json({ result: "fail" })
});

app.post('/action', async (req, res) => {
    const actionType = req.body.action;
    if (!req.body || Object.keys(req.body).length !== 1 || !Object.hasOwn(req.body, 'action'))
        return res.status(400).json({ msg: 'body is malformed' });
    if (actionType !== 'joke' && actionType !== 'cat fact')
        return res.status(400).json({ msg: 'body is malformed' });
    if (actionType === 'joke') {
        const jokeFe = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        const data = await jokeFe.json();
        const joke = data.joke.toUpperCase();
        console.log(joke);
        res.json({ joke: joke });

    }
    if (actionType === 'cat fact') {
        const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=11',
            {
                headers: {
                    'x-api-key': 'live_NouAL5fs0ukWWB2M6Rd76YF1bnKlD8R503JP2RJjglfCnH29TNsavfWcUpXZWU4z'
                }
            });
        const data = await response.json();
        res.json({ length: String(data.length) });
    }
})

app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});
