/**
 * * index.js는 앱 서버로 사용하기로 결정했다.
 * * app.js를 import 하는 형태
 * 
 * 
 * 
 * 
 */

/**
 * 
 * * 설명
 * * css '작성 방식'을 번들링에서 사용하려면
 * * css-loader, style-loader가 필요하다.
 * * 해당 entry point 파일에 css 파일을 import 해야한다.
 * * 굳이 변수가 필요없으므로, require() commonJS 방식으로 읽어 들였다.
 */
require("./assets/css/index.css");
require("./assets/css/bundle-test-1.css");

const http = require('http');
const app = require('./app');
const port = 1234;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`서버가 여기에서 ${port} 돌아간다 에헤라디야`);
});
