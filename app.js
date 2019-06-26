const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, function(error){
    if(error)
        console.log(error);
    console.log('Server is live on port 3000')
})