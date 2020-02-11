const Express = require('express');
const app = Express();
const fs = require('fs');
const https = require('https');

var PORT = process.env.PORT || 5000

app.get('/getaudio', (req, res) => {
    console.log("Server is running");
    res.sendFile("D:\\shubham\\sample_server\\3.2.mp3");
})

var aasa = fs.readFileSync(__dirname + '\\apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});


https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'tempid'
}, app)
.listen(PORT,()=>{
    console.log('Server is running in ' + PORT);
});

// app.listen(3000, () => {
//     console.log("server is running at 3000");
// });


