// Prototype object
const animalPrototype = {
    type: 'unknown',
    makeSound: function () {
      console.log('Some generic sound');
    },
    clone: function () {
      return Object.create(this); 
    },
  };

// Custom instances based on the prototype
const dog = animalPrototype.clone();
dog.type = 'Dog';
dog.makeSound = function () {
  console.log('Woof!');
};

const cat = animalPrototype.clone();
cat.type = 'Cat';
cat.makeSound = function () {
  console.log('Meow!');
};

// Client code using the customized instances
dog.makeSound();
cat.makeSound();