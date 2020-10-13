const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/customers', (req, res) => {
        res.send([  {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name':'James',
            'birthday': '980505',
            'gender': 'Male',
            'job': 'Student'
          },
          {
              'id': 2,
              'image': 'https://placeimg.com/64/64/1',
              'name':'John',
              'birthday': '920413',
              'gender': 'Male',
              'job': 'Teacher'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/2',
            'name':'Kate',
            'birthday': '960824',
            'gender': 'Female',
            'job': 'Waitress'
          }]);
      }
)

app.listen(port, () => console.log(`Listening on port ${port}`));