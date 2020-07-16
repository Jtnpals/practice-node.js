function Person(name, age){
    this.name = name;
    this.age = age;
}

//Person.walk로 만들지 않은 이유 : 실제 데이터를 담기 위한 것이 아닌 다른 인스턴스 객체를 담기위한 틀로 만들어졌기 때문
Person.prototype.walk = function(speed){
    console.log(speed + '속도로 걸어갑니다.');
}

var person01 = new Person('tom', 20);
var person02 = new Person('mike', 17);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);