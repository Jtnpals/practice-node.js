var calc = {};
calc.add = function(a, b){
    return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 호출 결과 : %d', calc.add(10, 10));

var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(20, 10));

//만약 파일이 없다면 폴더 이름을찾아 그 안의 index.js 파일을 불러들임
var foo = require('./foo');
console.log(foo.bar('tom'));
