let myFirstPromise = new Promise((resolve, reject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출, 실패한 경우 reject(...)를 호출

  setTimeout(function() {
    // resolve("성공!")  
    reject("실패!")
  }, 3000)
})
 // Uncaught (in promise) 실패!
 // async error 해결하는방법은?#### 
myFirstPromise
  .then((successMessage) => {
  // successMessage는 위에서 resolve(...) 호출에 제공한 값.
  // 문자열이어야 하는 법은 없다. -> npm pending 해결법 
  // ## 프로미스를 기본적으로 어떻게 쓰는지는 알것같은데, 어떻게 pending 오류를 해결할수 있을까? ## 
  console.log("와아아! " + successMessage)
  });
myFirstPromise
  .catch((errorMessage) =>{
  console.log("아이쿠!" + errorMessage)
  });
myFirstPromise 
  .finally(()=>{
    console.log("종료합니다.")
  })
