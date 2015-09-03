"use strict";
var Worker = require("../src/worker.js");
var Person = require("../src/person.js");

describe("Person", function(){

    var worker;
    beforeEach(function () {
        worker = new Worker('Tom', 21);
    });

    it("should have age name", function () {
        expect(worker.age).toEqual(21);
        expect(worker.name).toEqual("Tom");
    });

    it("should instance of Person", function () {
        expect(worker instanceof Person).toBe(true);
    });


    describe("#introduce()", function() {

        it("should return 'My name is Tom. I am 21 years old I am a Worker. I have a job.'", function () {
            expect(worker.introduce()).toEqual('My name is Tom, I am 21 years old.I am a Worker. I have a job.');
        });
    });
});