"use strict";
var Person = require('./person');

function Teacher (name,age,classs){
    Person.call(this,name,age);
    this.classs = classs;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.classs) {
        return this.super_introduce()+' I am a Teacher. I teach Class ' + this.classs + '.';
    }else{
        return this.super_introduce()+' I am a Teacher. I teach No Class.';
    }
};

Teacher.prototype.introduceWith = function(student){
  if(student.classs.number === this.classs){
      return this.super_introduce()+' I am a Teacher. I teach '+student.name+'.';
  }else{
      return this.super_introduce()+" I am a Teacher. I don't teach "+student.name+".";
  }
};

module.exports = Teacher;