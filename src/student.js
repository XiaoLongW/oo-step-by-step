"use strict";
var Person = require('./person');

function Student (name,age,classs){
    Person.call(this,name,age);
    this.classs = classs;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.introduce = function(){
    return ('I am a Student, I am at Class '+this.classs+'.');
};

module.exports = Student;