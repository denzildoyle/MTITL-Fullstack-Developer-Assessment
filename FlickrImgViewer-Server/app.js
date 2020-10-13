const express = require('express')
const fetch = require('node-fetch');

const app = express()
const port = 8000

// fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json')
//     .then(res => res.json())
//     .then(json => console.log(json));

    fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json')
    .then(res => res.json())
    .then(json => console.log(json))

app.get('/', (req, res) => res.send(

))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))