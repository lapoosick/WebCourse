"use strict";

(function () {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function () {
        console.log(`${this.name} издаёт звук.`);
    }

    function Dog(name) {
        Animal.call(this, name);
    }

    Dog.prototype.speak = function () {
        console.log(`${this.name} лает.`);
    }

    function Cat(name) {
        Animal.call(this, name);
    }

    Cat.prototype.speak = function () {
        console.log(`${this.name} мяукает.`);
    }

    Object.setPrototypeOf(Dog.prototype, Animal.prototype);
    Object.setPrototypeOf(Cat.prototype, Animal.prototype);

    const animal = new Animal("Животное");
    const dog = new Dog("Шарик");
    const cat = new Cat("Мурка");

    animal.speak();
    dog.speak();
    cat.speak();
})();

(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} издаёт звук.`);
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(`${this.name} лает.`);
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(`${this.name} мяукает.`);
        }
    }

    const animal = new Animal("Зверь");
    const dog = new Dog("Бобик");
    const cat = new Cat("Мурзик");

    animal.speak();
    dog.speak();
    cat.speak();
})();