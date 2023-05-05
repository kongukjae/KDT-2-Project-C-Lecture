import fs from 'fs'; // file system 모듈을 불러온다.

export default { // webpack 설정 파일을 export 한다.
  entry: './src/index.js', // entry point, "진입점 파일"을 지정한다. 모든 파일의 시작점역할
  output: {
    path: './dist', 
    /* 
      distribute의 준말로 보통 배포하는 파일을 모아두는 디렉토리 구성이다. 
      이렇게 path key를 사용해야 한다면, 일반적으로 fs 모듈을 사용해야 한다.
    */
    filename: './index.bundle.js'
    /*
      * 파일명은 위와 같이 정적으로 만들어줄 수 있고,
      * 정의(configuation)된 파일이긴 하지만 엄연히 모듈처리되는 파일이기 때문에
      * 필요에 따라서는 [name], [hash], [chunkhash] 등을 사용할 수 있다.
    */
  },
}