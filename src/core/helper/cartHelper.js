

const handleAddToCart = (product, next) => {
    let cart = [];
    let subCart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            subCart = JSON.parse(localStorage.getItem("cart"));
        }
        subCart.push(product);
        cart.push(subCart);
        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }
}


const removeFromCart = (product, next) => {
    let cart = [];
    if (typeof window !== "undefined") {




        next();
    }

}