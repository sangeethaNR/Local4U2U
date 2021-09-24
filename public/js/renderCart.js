 function addToCart(id,name,store_name,stock,price,image) {
  console.log("imsg:" + name)
fetch("/cart", {
  method: "POST",
  body: JSON.stringify({
    product_id: id,
    item_name: name,
    item_price: price,
    item_image: image,
    quantity: 1,
  }),
  headers: {
    "Content-Type": "Application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("item added");
  });
}
