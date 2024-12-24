# nodeForExpress
node.jsのパッケージ"express"を使ってサーバーを立ち上げる


> ## [!WARNING] 🧑‍💻 githubで管理する時の注意
>### .gitignoreとファイルを作り、以下を記入してからpushしてください
>```
>node_modules/
>```
>### cloneして動かす時は、以下のコマンドを実行
>```bash
>npm i
>```
>```bash
>npm run start
>```


## プロジェクトを立ち上げる

1. プロジェクトフォルダを作成し、そこで以下のコマンドをコマンドラインで入力し、プロジェクトを立ち上げる
```bash
npm init -y
```

2. index.jsをファイルに追加し、コマンドラインで以下を実行する
```bash
npm i express nodemon
```

3. package.jsonというファイルがあるのでそこに以下のように変更を加える
```diff
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1" //削除しておこう
+   "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.2",
    "nodemon": "^3.1.9"
  }
}
```

## 基本的なindex.js([expressの公式ドキュメント](https://www.npmjs.com/package/express)より)
```javaScript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(PORT, () => console.log(`server is running access to -> http://localhost:${PORT}`));
```

## htmlなどの静的ファイルを返す
1. プロジェクトにpublicフォルダを作る

2. index.jsに以下を加える
```diff
const express = require('express');
const app = express();
const PORT = 3000;
+ const path = require('path');

+ app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
-  res.send('Hello World'); //削除しておこう
+  res.send('index.html');  //仮にpublicファイルのindex.htmlを表示させる場合
})

app.listen(PORT, () => console.log(`server is running access to -> http://localhost:${PORT}`));
```

## バックエンドからフロントエンドに情報を返して表示させる
### *ejsをを使います、ご要望があれば説明いたします!*
