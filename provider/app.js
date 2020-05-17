const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
var mysql = require('mysql');

let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function devRTO(row) {
    return{
        id:row.id,
        name:row.name
    };
}
function rowToObject(row) {
    return {
        id: row.id,
        text:row.text,
        image:row.image
    };
}

app.get('/Devices', (request, response) => {
    const query= 'SELECT * FROM DEVICES';
    connection.query(query, (error, rows) => {
        response.send({
            ok:true,
            Devices: row.map(devRTO),
        });
    });
});

app.get('/Boxes', (request, response) => {
    const query ='SELECT * FROM Boxes';
    connection.query(query, (error, rows) => {
        response.send({
            ok:true,
            Boxes: rows.map(rowToObject),
        });
    });
});

app.post('/Boxes', (requset,response) => {
    const query = 'INSERT INTO Boxes(id, text, image) VALUES (?,?,?)';
    const params = [request.body.id, request.body.text, request.body.image];
    connection.query(query, params, (error, result) => {
        response.send({
            ok:true,
            id:result.insertId,
        });
    });
});

app.post('/Devices', (request,response) => {
    const query = 'INSERT INTO Devices(id, name) VALUES (?,?)';
    const param = [request.body.id, request.body.name];
    connection.query(query, params, (error, result) => {
        response.send({
            ok:true,
            id:result, insertId,
        });
    });
});

const port = 3000;