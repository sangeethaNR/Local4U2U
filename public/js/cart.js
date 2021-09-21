function addToCart(body, event) {
  const data = JSON.parse(body);
  const id = event.target.dataset.id;
  const name = event.target.dataset.name;
  const filteredItem = data.find((item) => item.id == id);
  console.log(filteredItem);

  fetch("/cart", {
    method: "POST",
    body: JSON.stringify({
      id: filteredItem.id,
      item_name: name,
      item_price: filteredItem.price,
      item_image: filteredItem.image,
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
