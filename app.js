const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'));
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true}));

app.get('/', (req, res) => {
    db.restaurant2.findAll().then((results => {
        res.json(results);
    }));
});

app.get('/newrestaurant2', (req, res) => {
    res.render('newrestaurant2', {
        title: 'Create a new restaurant'
    });
})

app.post('/newrestaurant2', (req, res) => {
    const name = req.body.name;
    db.restaurant2.create({
        name: name
    })
    .then(result => {
        res.json(result);
    });
});

app.put('')

app.get('/restaurant2/:id', (req, rest) => {
    db.restaurant.findByPk(req.params.id).then(result => {
        res.json(result);
    });
});


app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))