const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
var mysql = require('mysql');

let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function boxesRowToObject(row) {
    return {
        id: row.id,
        text:row.text,
        image:row.image
    }
}

app.get('/Boxes/', (request, reponse) => {
    const query = 'SELECT id, text, image FROM Boxes';
    connection.query(query, (error, rows) => {
        response.send({
            ok: true,
            boxes: row.map(boxesRowToObject)
        });
    });
});

const port = 3000;
app.get('/aac', (request, response) => {
    //send what?
    response.sendFile('C:/Users/phill/IdeaProjects/aac-server/provider/aac.html');
});
app.listen(port, () => {
    console.log("We're live!");
});