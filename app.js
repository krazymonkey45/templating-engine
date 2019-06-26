const express = require('express')
const app = express()
 
//adding middleware
app.set("view engine", "ejs"); // setting up templates

app.get('/', function (req, res) {
  res.render('home');
});
 
app.listen(3000, function(error){
    if(error)
        console.log(error);
    console.log('Server is live on port 3000')
})