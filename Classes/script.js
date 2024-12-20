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

    class AnimalClass {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} издаёт звук в классе.`);
        }
    }

    class DogClass extends AnimalClass {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(`${this.name} лает в классе.`);
        }
    }

    class CatClass extends AnimalClass {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(`${this.name} мяукает в классе.`);
        }
    }

    const classAnimal = new AnimalClass("Зверь");
    const classDog = new DogClass("Бобик");
    const classCat = new CatClass("Мурзик");

    classAnimal.speak();
    classDog.speak();
    classCat.speak();
})();