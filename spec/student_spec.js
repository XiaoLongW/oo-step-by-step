"use strict";
var Student = require("../src/student.js");

describe("Person", function(){

    var student;
    beforeEach(function () {
        student = new Student('Tom', 21, 2);
    });

    it("should have name age and class", function () {
        expect(student.age).toEqual(21);
        expect(student.name).toEqual("Tom");
        expect(student.classs).toEqual(2);
    });

    describe("#introduce()", function() {
        it("should return right", function () {
            expect(student.introduce()).toEqual('I am a Student, I am at Class 2.');
        });
    });
});