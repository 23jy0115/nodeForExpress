const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('index.html');  //仮にpublicファイルのindex.htmlを表示させる場合
})

app.listen(PORT, () => console.log(`server is running access to -> http://localhost:${PORT}`));