// function addToCart(id,image,access_name,store_name,stock,price) {
  function addToCart(){
//   console.log(obj.id);
//   console.log("imsg:" + obj.access_name)
//  // const data = JSON.parse(body);
//   const id =obj.id;
//   const name = obj.access_name;

fetch("/cart", {
  method: "POST",
  body: JSON.stringify({
    product_id: 1,
    item_name: "Shell Bracelet",
    item_price: 4,
    item_image: '/images/shell-bracelet.jpg',
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
