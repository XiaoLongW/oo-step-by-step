"use strict";
var Person = require("../src/person.js");

describe("Person", function(){

    var person;
    beforeEach(function () {
        person = new Person('Tom', 21);
    });

    it("should have name and age", function () {
        expect(person.name).toBe('Tom');
        expect(person.age).toBe(21);
    });

    describe("#introduce()", function () {
        it("should return right", function () {
            expect(person.introduce()).toEqual('My name is Tom, I am 21 years old.');
        });
    });
});

