const restaurant = {
    name: "Bob's Burgers",
    orders: [ ],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getOrders: function() {
        console.table(this.orders);
    }
};

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"
};

const bigMac = {
    sandwichType: "beef",
    fries: false,
    drinkSize: "large"
};

const italian = {
    sandwichType: "salami, pep, ham",
    fries: true,
    drinkSize: "medium"
};

// Place an order
restaurant.placeOrder(bigMac);
restaurant.placeOrder(italian);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(bigMac);
restaurant.placeOrder(chickenComboMeal);
restaurant.getOrders();

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()