"use strict";
var Teacher = require("../src/teacher.js");
var Student = require("../src/student.js");
var Class = require("../src/class.js");

describe("Person", function () {

    var teacher;
    beforeEach(function () {
        teacher = new Teacher('Tom', 21, 2);
    });

    it("should have age name and class", function () {
        expect(teacher.age).toEqual(21);
        expect(teacher.name).toEqual("Tom");
        expect(teacher.classs).toEqual(2);
    });

    describe("#introduce()", function () {

        it("should return right", function () {
            expect(teacher.introduce()).toEqual('My name is Tom, I am 21 years old. I am a Teacher. I teach Class 2.');
        });

        it("should return right", function () {
            var teacher_other = new Teacher('Tom', 21);
            expect(teacher_other.introduce()).toEqual('My name is Tom, I am 21 years old. I am a Teacher. I teach No Class.');
        });
    });

    describe("#introduceWith()", function () {

        it("should return right", function () {
            var classs = new Class(2);
            var student = new Student("Jerry",21,classs);
            expect(teacher.introduceWith(student)).toEqual('My name is Tom, I am 21 years old. I am a Teacher. I teach Jerry.');
        });

        it("should return right", function () {
            var classs = new Class(3);
            var student = new Student("Jerry",21,classs);
            expect(teacher.introduceWith(student)).toEqual("My name is Tom, I am 21 years old. I am a Teacher. I don't teach Jerry.");
        });
    });
});