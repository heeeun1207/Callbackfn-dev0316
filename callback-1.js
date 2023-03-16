// 동일한 실행결과를 내는 간단한 로직을 가진 두 개의 함수  
// 하지만, 접근 방식은 판이하게 다르다 . 
// 난이도가있지만 자바스크립트, 특히 node.js 에서는 거의 모든 함수, 메서드를 콜백함수로 동작한다고 본다.
// '인자를 전달한다' 라는 개발자들의 술어를 이해하는데 해당 개념이 매우 중요하게 작용한다.
// 점점 복잡해지는 논리와 패턴을 하고 있으므로 , 콜백자체를 하나하나 뜯어서 기본기를 다지도록 해보자.

function exampleOneInnerFunc(message) {
  console.log(message);
}

function exampleOne(message) {
  exampleOneInnerFunc(message);
}
exampleOne("첫번째 함수 예제입니다.");

// exampleOne 이라는 함수는 임의의 함수를 호출하는 기능을 한다.
// 하지만 함수의 입장에서는 console.log 를 실행하는 것인지 모른다 . 
// exampleOneInnerFunc 함수는 호출당한 함수이고, exampleOne 이 어떤기능을 하는지 알 필요가 없다.
// 이러한 형태를 '콜백' 이라고한다.
// 두개의 함수로 역할을 분리하는 점에서 작성의도에 따라 매우 변리하게 분리해서 관리할 수 있다. 



function exampleTwo(message,callback) {
  callback(message);
}
exampleTwo("두번째 함수 예제입니다", function(message){
  console.log(message);
});
// exampleOne 과 다르게 호출된 함수의 기능을 직접 작성하는 형태이다
// 이러한 형태도 '콜백'이라고 한다.
// 해당 방식을 더욱 많이 사용하는 경향이다
// 기능을 분리하여 작성하는것이 아닌, 호출된 함수의 기능을 직접 작성하기 때문에 , 
//호출된 함수의 기능을 호출함과 동시에 작성하고 파악할 수 있다.
//   함수는 exampleTwo 라는 함수 하나이며 , 콜백함수 하나를 가진다.
// exampleTwo 첫번째 매개변수 message 는 익명함수(콜백) 매개변수로 전달한다 .
// '인자가 전달되었다라" 라고 개발자들이 표현함. 



