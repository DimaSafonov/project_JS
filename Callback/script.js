'use strict';

function first() {
  //Do something
  setTimeout(() => {
    console.log(12);
  },500);
}

function second() {
  console.log(22);
}
first();
second();

function learnJS(lang, callback){
  console.log(`Я учу: ${lang}`);
  callback();
}

//  learnJS('JavaScript', () => {
//    console.log('I see sky!!!');
//  });
function done(){
  console.log('I see blue sky');
}
learnJS('JavaScript', done); 