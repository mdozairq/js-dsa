/*
Machine
--addItem
--displayItem
--insertMoney
--selectItem
--returnChange
Product
--Id
--name
--price
--quantity
User
--Id
--name
*/

class Product{
    constructor(id, name, price, quantity){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    reduceQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
            return true;
        }
        return false;
    }
}


class VendingMachine{
    constructor(){
        this.items = []
        this.balance = 0
    }

    addItem(item){
        this.items.push(item)
    }

    displayItems(){
        console.log('Available Items:');
        this.items.forEach(item => 
            console.log(`${item.id}. ${item.name} :  $${item.price}`)
        )
    }

    insertMoney(amount){
        this.balance += amount
        console.log(`Inserted $${amount}. Current balance: $${this.balance}`)
    }

    selectItem(itemId){
        let selectedItem = this.items.find(item => item.id === itemId)

        if(selectedItem.quantity <= 0){
            console.log(`Item is out of stock!`)
        }

        if(selectedItem.price > this.balance){
            console.log(`Insufficient Balance!`)
        }

        this.balance -= selectedItem.price
        selectedItem.reduceQuantity()

        console.log(`Dispensed: ${selectedItem.name}. Remaining balance: $${this.balance}`);
    }

    returnChange() {
        console.log(`Returning change: $${this.balance}`);
        this.balance = 0;
    }
}


class User{
    constructor(name){
        this.name = name
    }

    interact(vendingMachine){
        console.log(`Welcome ${this.name} to our Vending Machine`)
        vendingMachine.displayItems()
    }
}

const vendingMachine = new VendingMachine();
const user = new User('John');

vendingMachine.addItem(new Product(1, 'Soda', 1.50, 10));
vendingMachine.addItem(new Product(2, 'Chips', 1.00, 5));
vendingMachine.addItem(new Product(3, 'Candy', 0.75, 20));

user.interact(vendingMachine);

vendingMachine.insertMoney(2.00);
vendingMachine.selectItem(1);
vendingMachine.returnChange();