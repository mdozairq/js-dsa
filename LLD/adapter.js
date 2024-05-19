class OldSystem{
    request(name){
        console.log("Old System:",name);
    }
}

class NewSystem{
    requestFromNewSystem(firstName, lastName){
        console.log("New System:", firstName+" "+lastName)
    }
}

class Adapter{
    constructor(system){
        this.system = system
    }

    request(name){
        const nameArr = name.split(" ")
        this.system.requestFromNewSystem(nameArr[0], nameArr[1])
    }
}

let oldSystem = new OldSystem()
oldSystem.request("Ozair Qayam")

let newSystem = new NewSystem()
let adapter = new Adapter(newSystem)
adapter.request("Ozair Qayam")