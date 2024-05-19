const target = {
    name: 'Alice',
    sayHello() {
      console.log(`Hello, my name is ${this.name} `);
    },
  };
  
  const handler = {
    get(target, prop, receiver) {
      console.log(`Property ${prop} accessed `);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      console.log(`Property ${prop} set to ${value} `);
      return Reflect.set(target, prop, value, receiver);
    },
  };
  
  const proxy = new Proxy(target, handler);
  
  proxy.name; 
  proxy.sayHello(); 
  proxy.name = 'Bob'; // Output: Property name set to Bob