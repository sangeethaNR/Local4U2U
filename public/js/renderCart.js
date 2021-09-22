 function addToCart(id,name,store_name,stock,price,image) {
  // function addToCart(name){
  //  console.log(name);
  // }
  console.log("imsg:" + name)
 // const data = JSON.parse(body);
  // const id =obj.id;
  // const name = obj.access_name;

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
  // fetch("/cart", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     product_id: obj.id,
  //     item_name: obj.access_name,
  //     item_price: obj.price,
  //     item_image: obj.image,
  //     quantity: 1,
  //   }),
  //   headers: {
  //     "Content-Type": "Application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     console.log("item added");
  //   });
}
