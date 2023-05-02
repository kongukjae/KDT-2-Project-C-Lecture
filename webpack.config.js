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

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {

  // * @property {string} mode - 빌드 모드. 'development' 또는 'production' 중 선택.
  mode: "production",
  // * @property {string} entry - 애플리케이션의 진입점. JS 파일 경로.
  entry: "./src/index.js",

  // * @property {Object} output - 번들링 결과물 설정 객체.
  output: {
    // * @property {string} output.path - 번들링 결과물이 생성될 경로. 절대경로로 지정.
    // ! resolve() : node.js commonJS 메서드 상대경로를 절대경로로 변환
    path: path.resolve(__dirname, "dist"), 
    // * @property {string} output.filename - 생성된 번들링 파일의 이름.
    filename: "./index.bundle.js"

  },



  plugins: [
    // * @property {Object} plugins - 웹팩 플러그인 설정 객체.
    new HtmlWebpackPlugin({
      // * @property {string} template - 템플릿 HTML 파일 경로.
      template: "./src/assets/index.html",
      // * @property {string} filename - 결과 파일 이름.
      filename: "test.html"
    }),
    // * @property {Object} plugins - 웹팩 플러그인 설정 객체.
    new CopyWebpackPlugin({
      // * @property {Array} patterns - 복사할 파일 목록.
      patterns: [
        {
          // * @property {string} from - 복사할 파일 경로.
          from: "./src/assets",
          // * @property {string} to - 복사될 파일 경로.
          to: "./assets"
        }
      ]
    })
  ]
};
