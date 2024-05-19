// class OrderProcessor {
//     constructor(orderCalculator) {
//         this.orderCalculator = orderCalculator;
//     }

//     calculateTotal(order) {
//         return this.orderCalculator.calculate(order);
//     }
// }

// class NormalOrderCalculator {
//     calculate(order) {
//         return order.items.reduce((total, item) => total + item.price, 0);
//     }
// }

// class DiscountedOrderCalculator {
//     calculate(order) {
//         return order.items.reduce((total, item) => total + item.price, 0) * 0.9;
//     }
// }

// // Usage
const order = { items: [{ price: 10 }, { price: 20 }], type: 'discounted' };
const normalOrder = { items: [{ price: 10 }, { price: 20 }], type: 'normal' };
// const calculator = new DiscountedOrderCalculator();
// const processor = new OrderProcessor(calculator);
// console.log(processor.calculateTotal(order)); // Outputs 27


// class OrderProcessor {
//     calculateTotal(order) {
//         if (order.type === 'normal') {
//             return order.items.reduce((total, item) => total + item.price, 0);
//         } else if (order.type === 'discounted') {
//             return order.items.reduce((total, item) => total + item.price, 0) * 0.9;
//         }
//     }
// }

class OrderProcessor{
    constructor(calculator){
        this.calculator = calculator
    }

    calculate(orders){
        return this.calculator.calculate(orders)
    }
}

class NormalOrderCalculator{
    calculate(orders){
        return orders.items.reduce((total, ele)=> total +=ele.price, 0)
    }
}


class DiscountOrderCalculator{
    calculate(orders){
        return orders.items.reduce((total, ele)=>
             total += ele.price
        ,0) * 0.9
    }
}


let discountCalculator = new DiscountOrderCalculator(order)
let normalCalculator = new NormalOrderCalculator(normalOrder)
let normalOrderProcessor = new OrderProcessor(normalCalculator)
let discountOrderProcessor = new OrderProcessor(discountCalculator)

console.log(normalOrderProcessor.calculate(normalOrder))
console.log(discountOrderProcessor.calculate(order))


