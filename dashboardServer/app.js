const express = require('express'); //require == import
const cors = require('cors');
const mysql = require('mysql');
const app = express(); //app 실핼 express
const port = 8080; //port number
const connectInfo = require('./env');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: connectInfo.host,
    user: connectInfo.user,
    password: connectInfo.password,
    database: connectInfo.database,
});

app.use(cors());
//cors error 났을 때 설정

app.use(bodyParser.json());
//post body data 받을 때 설정

//app.get -> 주소를 요청할 때
//post -> get의 경로(데이터....)를 숨겨서 보내줌
//put ->  update(수정)처리할 때
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//req(request) 내가 요청한 내용
//res (response) 내가 응답받는 내용
app.get('/what', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

// API 만들기.

app.get('/boards', (req, res) => {
    console.log(req.query);
    const SQL = 'SELECT * FROM board';
    connection.query(SQL, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({
                status: 'SELECT FAIL',
            });
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

// seq

app.get('/board/:seq', (req, res) => {
    console.log(req.query);
    const SQL = 'SELECT * FROM board where seq=?';
    connection.query(SQL, [req.params.seq], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({
                status: 'SELECT FAIL',
            });
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

// INSERT

app.post('/board', (req, res) => {
    console.log(req.body.title);
    console.log(req.body.content);
    const SQL = 'INSERT into board(title, content,register_at ) values(?,?,?)';
    connection.query(
        SQL,
        [req.body.title, req.body.content, req.body.register_at],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({
                    status: 'SELECT FAIL',
                });
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
});

// update

app.put('/board', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.age);
    const SQL =
        'UPDATE board set title=?,content=?,update_at=? where seq=?';
    connection.query(
        SQL,
        [
            req.body.title,
            req.body.content,
            req.body.update_at,
            req.body.seq,
        ],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({
                    status: 'SELECT FAIL',
                });
            } else {
                console.log(result);
                res.send(result);
            }
        }
    );
});

// DELETE

app.delete('/board/:seq', (req, res) => {
    if (req.params.seq) {
        const SQL = 'DELETE FROM board where seq=?';
        connection.query(SQL, [req.params.seq], function (err, result, fields) {
            if (err) {
                res.send({
                    status: 'fail',
                });
                console.log(err);
            } else {
                res.send({
                    status: 'success',
                    ...result,
                });
                console.log(result);
            }
        });
    } else {
        res.send('BOARD DELETE FAIL');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
