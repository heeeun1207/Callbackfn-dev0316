// 터미널 node pormis.js 로 확인합시다 
'use strict'

// 비동기적인 것을 표현할때 콜백함수 대신에 유용하게 사용할 수 있음. 
// asynchronous operation.
// 1 state 성공 실패했는지 확인하는것이 중요함
// 2 제공하는사람 producer - 소비자 consumer 차이점을 염두하자. 
// pormise  state: pending -> fulfilled or rejected  // 오늘 npm 자료 pending 떠서 해결한것처럼.


//1. producer         |class
// 이런식으로 새로운 프로미스를 만들어질때, 자동적으로 불필요한 네트워크 요청이 일어날수 있으니 유의하자 !. 
const promise = new Promise((resolve, reject) => {
      //doing some heavy work  시간이 걸리는일은 프로미스를 만들어서 비동기적으로 처리하는것이좋다 = 네트워크통신, 파일읽어올때 등 .. 
  console.log('doing something...');
  setTimeout(()=> {
    resolve('heeeun');
    // reject(new Error('no network'));
  },2000);
});

//2. consumer   :then , catch , finally 를 이용해서 pormise 를 사용한다.
// error case 처리법 -> catch 사용하기 
promise
  .then(value=>{
// 프로미스가 정상적으로 사용된다면 (.then)
  console.log(value);      // doing something ...  
})
 .catch(error => {
  console.log(error);     // heeeun
 })
 //3. finally 
 .finally(()=>{
  console.log('finally');
 });
 // resolve 이던지 reject 상관없이 콘솔에 호출된다. 
 // => promise 안에 .then .catch .finally  => chaining 

 //3. 프로미스 연결하기
 const fetchNumber = new Promise((resolve,reject)=> {
  setTimeout(() => resolve(1), 1000 );
 });

 fetchNumber 
  .then(num => num*2) //2
  .then(num => num*3) //6
  .then(num =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=> resolve(num -1), 1000);  
    });
  })
  .then(num => console.log(num));  //5 

  

