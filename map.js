const paperOrderTwo = [];
const countTwo = 10; 
const content ="example-";
const tagname = "div";

//초기화 한 배열에 example - 이라는 문자열을 일단 담았다. 
for (let i = 0 ; i < countTwo; i++){
  paperOrderTwo.push(content);
};

//배열이 담긴 문자열을 map()을 사용하여 
// 요소마다 문자열을 추가하는 형태로 활용했다
const mapping = paperOrderTwo.map(function(value,index){
  return `div ${value}${index+1} </div>`
});
console.log(mapping);
//.map() 메서드는 매개변수로 함수를 받는다.
// 메서드의 매개변수자리에 함수가 들어왔으므로 '콜백함수'라고 부른다 
// 첫번째 매개변수 가 value는 배열의 요소를 담고 있다.
// 두번째 매개변수 index는 배열의 인덱스를 담고 있다.
//,map은 메서드가 내장 메서드이기 때문에 언어적 차원으로 정해져 있다.
//"div example-1 </div>" ~~ "div example-10 </div>"




