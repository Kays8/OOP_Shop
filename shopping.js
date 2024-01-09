//class Customer
class Customer {
    orders = [];
 constructor(name, address) {
  this.name = name;
  this.address = address;
 }
 addOrder(order){
    this.orders.push(order);
 }
}

// class Order
class Order {
    payment = null;
    orderDetails = [];
 constructor(date, status) {
  this.date = date;
  this.status = status;
 }
 calcSubTotal() {
        //return this.orderDetails.reduce((total, orderDetail) => total + orderDetail.subTotal(), 0);
        let subTotal = 0;
        for (let i = 0; i < this.orderDetails.length; i++) {
            subTotal += this.orderDetails[i].calcSubTotal();
        }
        return subTotal;
    }

 calcTax() {
        //return this.orderDetails.reduce((total, orderDetail) => total + orderDetail.subTotal(), 0);
        let tax = 0;
        for (let i = 0; i < this.orderDetails.length; i++) {
            tax += this.orderDetails[i].calcTax();
        }
        return tax;
    }

     calcTotal() {
        return this.calcSubTotal() + this.calcTax();
    }

calcTotalWeight() {
        //return this.orderDetails.reduce((total, orderDetail) => total + orderDetail.subTotal(), 0);
        let Weight = 0;
        for (let i = 0; i < this.orderDetails.length; i++) {
            Weight += this.orderDetails[i].calcTotalWeight();
        }
        return Weight;
      }

 addPayment(payment){
    this.payment =payment;
 }
 addOrderDetails(orderDetail){
    this.orderDetails.push(orderDetail);
 }
}

// class OrderDetail
class OrderDetail {
    item = null;
 constructor(quantity, taxStatus) {
  this.quantity = quantity;
  this.taxStatus = taxStatus;
 }
 calcSubTotal() {}
 calcWeight() {}
 calcTax() {}
 addItem(item){
    this.item = item;
 }
}

// class Item
class Item {
 constructor(shippingWeight, description, price) {
  this.shippingWeight = shippingWeight;
  this.description = description;
  this.price = price;
 }
 getPriceForQuantity() {}
 getTax() {}
 inStock() {}
}

// class Payment
class Payment {
 constructor(amount) {
  this.amount = amount;
 }
}

// class Cash
class Cash extends Payment {
 constructor(amount, cashTendered) {
  super(amount);
  this.cashTendered = cashTendered;
 }
}

// class Check
class Check extends Payment {
 constructor(amount, name, bankID) {
  super(amount); // Amount is not specified
  this.name = name;
  this.bankID = bankID;
 }
 authorized() {}
}

// class Credit
class Credit extends Payment {
 constructor(amount, number, type, expDate) {
   super(amount); // Amount is not specified
  this.number = number;
  this.type = type;
  this.expDate = expDate;
 }
 authorized() {}
}

