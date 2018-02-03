const express = require('express')
const cors = require('cors')
const app = express()
const todo = require('./todo.json')
var bodyParser     =        require("body-parser");
var fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(todo))


})

app.post('/', function(request, response){
    console.log(request.body);      // your JSON
   
    
    fs.readFile('todo.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(request.body)
    
        fs.writeFile("todo.json", JSON.stringify(json),()=>{
            console.log(json)

            fs.readFile('todo.json', function (err, data) {
                response.send(data)
            })
         

        })
        
    } )
    

   
  });


  app.delete('/', function(request, response){
    console.log(request.body);      // your JSON
    const DelTodo= request.body.delTodo
    
    fs.readFile('todo.json', function (err, data) {
        var json = JSON.parse(data)
        json.splice(DelTodo, 1)
        
        fs.writeFile("todo.json", JSON.stringify(json),()=>{
            console.log(json)

            fs.readFile('todo.json', function (err, data) {
                response.send(data)
            })
         

        })
        
    } )
    

   
  });


  app.put('/', function(request, response){
    console.log(request.body);      
    const complateTodo= request.body.complateTodo
    
    fs.readFile('todo.json', function (err, data) {
        var json = JSON.parse(data)
        console.log('json[complateTodo]:',json[complateTodo]);
        
        json[complateTodo].complited=true
        
        fs.writeFile("todo.json", JSON.stringify(json),()=>{
            console.log(json)

            fs.readFile('todo.json', function (err, data) {
                response.send(data)
            })
         

        })
        
    } )
    

   
  });
  
  





  


app.listen(8000, () => console.log('Example app listening on port 8000!'))