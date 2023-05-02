import fs from 'fs';
/**
 * * npm install --save-dev html-webpack-plugin 정보 정리
 * * - webpack의 플러그인 중 하나로, webpack 자체에도 지원하는 다른 모듈들을 끼워 조립하는 형태이다.
 * * - 그중 html-webpack-plugin은 대표적인 정적 파일을 생성해주는 플러그인이다.
 * * - 플러그인이 상당히 많고 업데이트가 활발하므로, 그때그때 필요한 데이터와 정보를 확인하여 사용하는 편이다.
 * * - 새로운 모듈이나 플러그인을 설치했을 때 간단히 역할에 대해 아래와 같이 설명하는 편이다.
 */

/**
 * ? html-webpack-plugin
 * * HTML 파일을 처리하는데 사용하는 플러그인
 * * 자바스크립트 번들을 html 파일 내부에 삽입하는 용도
 * * 파일 최적화(빈공백 제거, 주석제거)
 * * 추가 옵션 (css 등등)
 * 
 */

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode:'production', // "제품 모드", 즉 사용자에게 배포할 코드를 생성하는 모드
  entry: './src/index.js',
  output: {
    path: './dist', 
    filename: './index.bundle.js'
  },
}