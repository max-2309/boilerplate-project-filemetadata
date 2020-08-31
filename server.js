'use strict';

const express = require('express');
const cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: './' })

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
    let {originalname:name, mimetype:type, size} = req.file;
    res.json({name, type, size});
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
