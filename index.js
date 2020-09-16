const express      = require('express');
const Parser       = require('body-parser');
const sqlite3      = require('sqlite3').verbose();

const server       = express();

let path_services  = (   __dirname   +   '/public/static/img/services/'   );
let path_html      = (   __dirname   +   '/public/index.html'             );
let path_font      = (   __dirname   +   '/public/static/font/'           );
let path_css       = (   __dirname   +   '/public/static/css/'            );
let path_img       = (   __dirname   +   '/public/static/img/'            );
let path_js        = (   __dirname   +   '/public/static/js/'             );
let path_db        = (   __dirname   +   '/Main.db'                       );

const Body_Parser = Parser.urlencoded({extended: false});

server.get('/', Body_Parser , function(request, response) {
    response.sendFile(path_html);
});

server.post('/', Body_Parser, function(request, response) {
    let firstname = request.body.ghostName;
    let lastname = request.body.ghostSurname;
    let email = request.body.ghostEmail;
    let phone = request.body.ghostPhone;
    let message = request.body.ghostMessage;
    let id = 1;
    let db = new sqlite3.Database(path_db, sqlite3.OPEN_READWRITE, (err) => {
        if(err) {
            console.error(err.message);
        }
        console.log('Connected to Database!');
    });
    db.run('INSERT INTO Client(id, firstname, lastname, email, phone, message) VALUES($id, $firstname, $lastname, $email, $phone, $message)', {
        $id:id,
        $firstname: request.body.ghostName,
        $lastname: request.body.ghostSurname,
        $email: request.body.ghostEmail,
        $phone: request.body.ghostPhone,
        $message: request.body.ghostMessage
    }, function(err) {
        if(err) {
            console.log(err.message);
        }
        console.log('Good!');
        response.end('Ok!');
    });
    db.close();
});



server.use(express.static  (path_services) );
server.use(express.static  (path_font)     );
server.use(express.static  (path_css)      );
server.use(express.static  (path_img)      );
server.use(express.static  (path_js)       );

server.listen(8000);