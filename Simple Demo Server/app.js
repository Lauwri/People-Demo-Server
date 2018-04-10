const port = 3000;
const host = '0.0.0.0'

const express = require('express');
const bodyParser = require('body-parser');

//use express
const app = express();

//Enable bodyparser
app.use(bodyParser.json());

var id = 4;

//Json to hold people objects
var people = [
  {
    id: '1',
    name: 'John Well',
    description: 'Master of all things,',
    dateTime: '2018-03-31T03:00:00Z',
  },
  {
    id: '2',
    name: 'Tyree Mccaa',
    description: 'Super great cook. Also sings in the shower.',
    dateTime: '2018-03-31T15:22:11Z',
  },
  {
    id: '3',
    name: 'Nicol Beaudoin',
    description: "A very nice person, also this description should be really long just for the testing purposes. That's why I am telling you this useless stuff :)",
    dateTime: '2018-03-11T18:00:00Z',
  },
  {
    id: '4',
    name: 'Barry Jasinski',
    description: '2011 hotdog eating contest winner. Knows a lot of facts',
    dateTime: '2018-03-15T23:59:00Z',
  }
];


//get, post and delete people
app.get('/people', (req, res) => {
  res.json(people);
});

app.post('/people', (req, res) => {
  id += 1;
  req.body.id = (id).toString();
  people.push(req.body);
  res.json(req.body);
});

app.delete('/people/:id', (req, res) => {
  console.log("routed " + req.params.id);
  var deleted;
  deleted = people.find(person => person.id === req.params.id);
  people = people.filter(person => {
    
    return person.id !== req.params.id
  });
  res.end(JSON.stringify(deleted));
});


app.listen(port, host, () => {
    console.log("Server listening on port %s", port);
});
