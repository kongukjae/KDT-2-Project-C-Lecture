/**
 * 웹팩 설정 객체입니다.
 * @typedef {Object} WebpackConfig
 * @property {string} mode - 빌드 모드. 'development' 또는 'production' 중 선택.
 * @property {string} entry - 애플리케이션의 진입점. JS 파일 경로.
 * @property {Object} output - 번들링 결과물 설정 객체.
 * @property {string} output.path - 번들링 결과물이 생성될 경로. 절대경로로 지정.
 * @property {string} output.filename - 생성된 번들링 파일의 이름.
 */

/**
 * path 모듈입니다.
 * @typedef {Object} PathModule
 * @property {function} resolve - 상대 경로를 절대 경로로 변환하는 함수.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

  // * 배포, 개발 모드 설정
  mode: "production",
  // * load(적재) 할 메인 파일(진입점)
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), 
    // * 번들링 완료된 파일이름
    filename: "./index.bundle.js"
  },

  plugins: [

    new HtmlWebpackPlugin({
      // * load(적재) 할 html 파일의 경로
      template: "./src/assets/index.html",
      // * 번들링 완료된 파일이름
      filename: "index.bundle.html"
    }),
  ],

  module : {
    rules: [
      {
        test: /\.css$/,
        // * css 파일을 읽어들이기 위해 필요한 로더
        // * 배열의 맨 마지막 로더가 가장 먼저 실행됨
        use: ["style-loader", "css-loader"]
      }
    ]
  }


};
