
const movier = require('./node_modules/movier');
const moviedate = movier.getTitleDetailsByName("interstellar 2014");
// // find a title and returns the first matched title data
  movier.getTitleDetailsByName("interstellar 2014")
  let getDatapromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(moviedate)
      // reject("전송실패!! ")
    }, 2000);
  })
  getDatapromise
   .then((moviedate)=>{
    console.log(moviedate)
   })
   .catch((moviedate)=>{
    console.log(moviedate)
   })
   .finally(()=>{
    console.log('왜????')
   })
  // const movier = require('./node_modules/movier');
  // // // find a title and returns the first matched title data
  //   movier.getTitleDetailsByName("interstellar 2014")
    // // get title info by its url
    // movier.getTitleDetailsByUrl("https://www.imdb.com/title/tt0816692")
    // // get title details by its IMDB id
    // movier.getTitleDetailsByIMDBId("tt0816692")
    // // find title by returned object from searchTitleByName function
    // movier.getTitleDetailsByFoundedTitleDetails(foundedDetails)
    // console.log(movier);
    // console.log(movier.getTitleDetailsByName("interstellar 2014"));
    
  