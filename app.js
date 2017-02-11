const path = require('path');
var app = require('express')();

var fs = require('fs');

app.post('/events', function(request, response){
  response.send("GET");
});

// app.use(function (req, res, next) {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


// catch 404 and forward to error handler

var listener = app.listen(8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
