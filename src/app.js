/**
 * 
 * 
 * * entry point of the application
 * * src 디렉토리에서 작업 & 연산되는 모든 작업은 app.js에서 관리된다.
 * 
 */

module.exports = function (request, response) {
  if(request.method === "GET") {
    // 메인페이지에 해당하는 컴포넌트를 조립한다.
    // 노션, VScode 처럼 좌측에 메뉴바 형식으로 메인 매뉴를 처리하고,
    // 메인 메뉴에 선택된 중간메뉴(2depth)에 해당하는 컴포넌트를 조립한다.
    // 최종적으로는 우측에 컨텐츠 영역에 해당하는 컴포넌트를 조립한다.

    // 해당 부분에 조립 및 response 처리

    // 어지간한건 모두 번들링해서 보내주는것이 좋겠다.
  }
  else if(request.method === "POST") {
  }
  else if(request.method === "PATCH") {
    // 소개 예정
  }
  else if(request.method === "PUT") {
    // 소개 예정
  } 
  else if(request.method === "DELETE") {
    // 소개 예정
  }
}