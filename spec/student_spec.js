"use strict";
var Student = require("../src/student.js");

describe("Person", function(){

    it("should have name age and class", function () {
        var student = new Student("Tom", 21,2);
        expect(student.age).toEqual(21);
        expect(student.name).toEqual("Tom");
        expect(student.classs).toEqual(2);
    });

    describe("#introduce()", function() {
        it("should return right", function () {
            var student = new Student("Tom", 21,2);
            expect(student.introduce()).toEqual('I am a Student, I am at Class 2.');
        });
    });
});