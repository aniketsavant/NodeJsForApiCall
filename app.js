const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// const https = require('https');
const axios = require('axios');

app.post('/weather-info', function(req,res){
    var res_data = null;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city_name}&appid=0360b209f598c7ff935eb54b5cc7cc42`).then(
        function(response){
            res_data = response.data;
            res.json({data: res_data});
        })
        .catch(function(error){
            console.log('Error...', error);
            res.json({error: error});
        })
        
})

app.listen(8080, function(){
   console.log('server listing on port number :8080');
})