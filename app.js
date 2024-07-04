function pizzaCart() {
    return {
        cart: {
            small: { quantity: 0, price: 49.00 },
            medium: { quantity: 0, price: 89.00 },
            large: { quantity: 0, price: 129.00 }
        },
        paymentAmount: 0,
        totalCost: 0,
        message: '',
        isCheckingOut: false,

        addToCart(size) {
            this.cart[size].quantity++;
            this.updateTotalCost();
        },

        increment(size) {
            this.cart[size].quantity++;
            this.updateTotalCost();
        },

        decrement(size) {
            if (this.cart[size].quantity > 0) {
                this.cart[size].quantity--;
                this.updateTotalCost();
            }
        },

        updateTotalCost() {
            this.totalCost = Object.values(this.cart).reduce((total, item) => total + item.price * item.quantity, 0);
        },

        checkout() {
            this.isCheckingOut = true;
        },

        processPayment() {
            if (this.paymentAmount >= this.totalCost) {
                this.message = "Enjoy your pizzas!";
                this.cart = {
                    small: { quantity: 0, price: 49.00 },
                    medium: { quantity: 0, price: 89.00 },
                    large: { quantity: 0, price: 129.00 }
                };
                this.updateTotalCost();
            } else {
                this.message = "Sorry - that is not enough money!";
            }
            setTimeout(() => this.message = '', 3000);
            this.isCheckingOut = false;
        }
    }
}
