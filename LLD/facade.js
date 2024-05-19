// Complex Module
class ComplexModule {
    initialize() {
      // Complex initialization logic
    }
  
    operation1() {
      // Complex operation 1
    }
  
    operation2() {
      // Complex operation 2
    }
  }
  
  // Client Code
//   const complexModule = new ComplexModule();
//   complexModule.initialize();
//   complexModule.operation1();
//   complexModule.operation2();

  class Facade{
    constructor(){
        this.complexModule = new ComplexModule()
    }

    performOperation(){
        this.complexModule.initialize();
        this.complexModule.operation1();
        this.complexModule.operation2();
    }
  }