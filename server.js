const mysql = require ("mysql");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
//const connection ---unique to system change to your requirements
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'OswegoHistory1848!',
  database: 'dbheritage'
});
connection.connect();


//EVERYTHING FROM BELOW NEEDS TO BE WORKED ON
// Endpoint
app.get('/dbsearch', (req, res) => {
  const { streetName, streetNumber, Town, lastName, historicalDistrict, village, stillExists, sideOfRoad, Architect, Style } = req.body;


  // query to search for matching records
  const query = `
    SELECT * FROM building_specifics`;


  const values = [`%${streetName}%`, `%${streetNumber}%`, `%${Town}%`, `%${lastName}%`, `%${historicalDistrict}%`, `%${village}%`, stillExists, `%${sideOfRoad}%`, `%${Architect}%`, `%${Style}%`];


  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result.rows); // results
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


