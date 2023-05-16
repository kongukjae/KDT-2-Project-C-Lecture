/**
 * 메인 컴포넌트
 * @param {string} tagName - 태그 이름
 * @param {object} attributes - 속성 객체
 * @param {array} children - 자식 요소
 * @returns {string} HTML 문자열
 * @example
 * mainComponent({
 *  tagName: "div",
 *  attributes: {
 *    id: "main",
 *    className: "container",
 *  },
 *  children: [
 *    mainComponent({
 *      tagName: "h1",
 *      attributes: {
 *      className: "title",
 *    })
 *  ]
 *
 */

module.exports = ({ tagName = "div", attributes = {}, children = [] } = {}) => {
  // todo : default parameter 개념
  // work : 1. 기본 형태
  // work : 2. 위에 구조가 무엇을 의미하는지, nesting 된 상태를 어떻게 표현하는지 여부
  // 태그 속성을 문자열로 변환하는 변수
  let attributeString = "";

  for (const [key, value] of Object.entries(attributes)) {
    // 반복자를 구조분해할당으로 키와 값으로 나누어서 사용할 수 있다.
    attributeString += ` ${key}="${value}"`;
  }
  // 태그의 자식요소를 문자열로 변환하는 변수
  let childrenString = "";

  for (const child of children) {
    childrenString += child(); // 반복자방식으로 children배열 원소값을 함수로 실행시킬 수 있다.
  }

  return `
    <${tagName}${attributeString}>
      ${childrenString}
    </${tagName}>
  `;
};
