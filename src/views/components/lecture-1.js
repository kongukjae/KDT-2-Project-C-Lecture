const lectureOne = {
  first: "피카츄",
  second: "파이리",
  third: "꼬부기",
  fourth: "이상해씨"
}

/**
 * * Object 내장객체에서 지원하는 entries 메서드는 객체를 배열로 변환해준다.
 * * 배열의 원소는 [key, value] 형태로 구성된다.
 * * 좌표와 같은 쌍 형태와, 키이름과 값내용을 모두 사용할 때 매우 유용하다.
 * * 이차원 배열형태로 반환된다.
 */
console.log(Object.entries(lectureOne));// 이차원 배열 형태인 것을 확인

for (const [key, value] of Object.entries(lectureOne)) {
  console.log("이것은 key 부분 :", key);
  console.log("이것은 value 부분 :", value);
}

// for..in 와 for..of 의 차이점
// for..in 은 객체의 키를 순회한다.
// for..of 는 객체의 값을 순회한다.