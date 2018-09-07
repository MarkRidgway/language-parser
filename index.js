const csv = require('csvtojson');

(async()=>{
  const jsonArray=await csv().fromFile('./data/translations.csv');

  for(translation of jsonArray){
    console.log(translation['string']);
  }
})();
