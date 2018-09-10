const fs = require('fs');
const csv = require('csvtojson');

(async()=>{
  const translations = {
    'en': {},
    'fr': {},
    'de': {},
    'es': {},
    'pt': {},
    'ru': {}
  };

  const jsonArray=await csv().fromFile('./data/translations.csv');

  for(translation of jsonArray){
    translations['en'][translation['string']] = translation['en'];

    if(translation['fr']){
      translations['fr'][translation['string']] = translation['fr'];
    }
    if(translation['de']){
      translations['de'][translation['string']] = translation['de'];
    }
    if(translation['es']){
      translations['es'][translation['string']] = translation['es'];
    }
    if(translation['pt']){
      translations['pt'][translation['string']] = translation['pt'];
    }
    if(translation['ru']){
      translations['ru'][translation['string']] = translation['ru'];
    }
  }

  fs.writeFileSync('./data/en.json', JSON.stringify(translations['en']));
  fs.writeFileSync('./data/fr.json', JSON.stringify(translations['fr']));
  fs.writeFileSync('./data/de.json', JSON.stringify(translations['de']));
  fs.writeFileSync('./data/es.json', JSON.stringify(translations['es']));
  fs.writeFileSync('./data/pt.json', JSON.stringify(translations['pt']));
  fs.writeFileSync('./data/ru.json', JSON.stringify(translations['ru']));
})();
