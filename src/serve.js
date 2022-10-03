var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
const path = require('path')

// Добавляем информацию заголовка для решения междоменных проблем
app.all('*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");// Разрешить доступ к источнику, путь внешнего доступа к стоимости и прибыли - "http: // localhost: 8080"
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

// Используйте bodyParse для объяснения данных отправки интерфейса
app.use(bodyParse.urlencoded({extended:true})) ;
app.use(bodyParse.json());

// Обрабатываем запрос на получение корневого каталога
app.get('/',function(req,res){
}) ;

// Обработка / запрос на вход
app.post('/login',function(req,res){
    // Получаем логин и пароль
    name=req.body.name ;
    pwd=req.body.pwd;
    // Обратная связь на стойку регистрации
    res.status(200).send(
        "Фоновая обратная связь: учетная запись входа:"+name+"| Пароль для входа:"+pwd
      ) ;
});
// считывание файла с массивом
const fs = require('fs')
fs.readFile('C:/vue projects/electronapp/src/test.txt', 'utf8', (err, data) => {
    if (err) throw err;
  
    console.log(data);
//    var text = data.toString();
 // var results = {};
 // var lines = text.split('\n');
 
//lines.forEach(function(line) {
   // var parts = line.split(' ');
  //  var letter = parts[1];
   // var count = parseInt(parts[2]);
 
//if(!results[letter]) {
   //   results[letter] = 0;
//}
 
//});
 
//console.log(results);
  });
  

// слушаем порт 3000
var server=app.listen(3000);

console.log("Сервер уже запущен");
console.log("URL мониторинга: http://127.0.0.1:3000/");
