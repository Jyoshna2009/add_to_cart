const products = [
    { id: 1, image: "images/bracelet.JPG", price: 250, title: "Bracelet" },
    { id: 2, image: "images/ring.JPG", price: 50, title: "Ring" },
    { id: 3, image: "images/necklace.WEBP", price: 400, title: "Necklace" },
    { id: 4, image: "images/hand_bag.WEBP", price: 500, title: "Hand Bag" },
    { id: 5, image: "images/pant.WEBP", price: 700, title: "Pant" },
    { id: 6, image: "images/shirt.WEBP", price: 1000, title: "Shirt" }
];

let cart = [];

document.getElementById("root").innerHTML = products.map((item, index) => `
    <div class="card">
        <img src="${item.image}">
        <h3>${item.title}</h3>
        <b>₹${item.price}</b><br>
        <button onclick="addCart(${index})">Add</button>
    </div>
`).join("");

function addCart(index) {
    cart.push(products[index]);
    displayCart();
}

function deleteItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;

    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML = "No Items";
        document.getElementById("total").innerHTML = 0;
        return;
    }

    document.getElementById("cartItems").innerHTML = cart.map((item, index) => {
        total += item.price;

        return `
            <div class="Items">
                <img src="${item.image}">
                <h3>${item.title}</h3>
                <b>₹${item.price}</b><br>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
    }).join("");

    document.getElementById("total").innerHTML = total;
}

displayCart();