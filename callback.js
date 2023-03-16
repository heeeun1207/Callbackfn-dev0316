
// <- request  response ->  
// 콜백을 부르고부르면 콜백지옥이 된다.  -> 프로미스랑 에이씽크어웨이트 배우면 이쁘게 작성가능하다는데..... ? 
//비동기 첫시작은  콜백함수 이다 . 
'use strict';
//synchronous  동기적이다 - > 코드가 순서에 맞춰서 하나씩 동기적으로 실행된다 = 자유롭게  
// 호이스팅에 맞춰서  = hoisting : var, function 선언이 젤위로 올라가는 것 
console.log('1');
// setTimeout(function(){
//   console.log('2')
// },3000);  // 1000ms = 1s
console.log('3');
// 1 , 3 , 3초뒤 '2'
setTimeout(()=> console.log('2'),2000);
// 콜백을 파라미터로 받아서 인자로 처리하는 함수 만들기
function printImmediately(print){
  print();
}
printImmediately(()=> console.log('hello'));
//함수의 선언은 호이스팅 됨으로, 가장먼저 컴퓨터가 해석함. 
//Asynchronous callback 비동기 콜백
function printWithDelay(print,timeout) {
  setTimeout(print,timeout);
}
printWithDelay(()=> console.log('async callback'), 3000);





//백엔드 사용안한다고 가정하에 , 
// class UserSotrage {
//   loginUser(id,password,onSuccess,onError){
//     setTimeout(()=>{
//         if(
//           (id=== 'ellie' && password === 'dream' ) ||   //이거나 or
//           (id=== 'heeeun' && password === '1207' )
//         ){
//           onSuccess(id); //id 전달해라 
//         }else{
//           onError(new error('not found'));
//         }
//     },2000);
//   }
//   getRoles(user, onSuccess, onError) {
//     setTimeout(()=> {
//       if (user === 'ellie') {
//         onSuccess({name : 'ellie', role : 'admin'});
//       }else {
//         onError(new Error('no access'));
//       }
//     }
//     )
//   }
// }
// const UserSotrage = new UserSotrage();
// const id = propmt('enter your id'); // 브라우저 api중하나인 prompt
// const password = prompt('enter your password');
// UserSotrage.loginUser(
//   id,
//   password,
//   (user)=> {
//     UserSotrage.getRoles(
//       user,
//       userWithRole =>{
//         alert(`hello ${userWithRole.name}, you have a ${user.role} role`);
//       },
//       error => {
//         console.log(error);
//       }
//     );
  
// },

// error => {
//   console.log(error);
// }
// );