'use strict';

(function () {
  function saveCashe() {
    let forCashe = new Map();
    return function (argLikeKey, argLikeValue) {
      if (!forCashe.has(argLikeKey)) {
        console.log('Сохраняем в кеш...');
        forCashe.set(argLikeKey, argLikeValue);
        console.log(forCashe);
      } else if (forCashe.size > 10) {
        console.log('В кеше больше 10 вызовов.');
        forCashe.delete(argLikeKey)
        console.log(forCashe)
      } else {
        console.log('Достаём из кеша...');
        console.log(forCashe.get(argLikeKey));
      }
    }
  }

  function forSaveCashe(arg1, arg2){
    return arg1 + arg2;
  }

  let result = saveCashe(forSaveCashe);

  result(1,1);
  result(2,2);
  result(3,3);
  result(4,4);
  result(5,5);
  result(6,6);
  result(7,7);
  result(8,8);
  result(9,9);
  result(10,10);
  result(11,11);
  result(1,1);
  result(2,2);
}());
