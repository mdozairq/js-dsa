class Person{
    constructor(name){
        this.name = name
        this.email = null
        this.address = null
    }

    withEmail(email){
        this.email = email
        return this
    }

    withAddress(address){
        this.address = address
        return this
    }

    build(){
        const person = new Person({
            name: this.name,
            email: this.email,
            address: this.address
        })

        return person
    }
}

const newPerson = new Person("Ozair")
.withEmail("mdozairq@gmail.com")
.withAddress("Bangalore")
.build()

console.log(newPerson);

