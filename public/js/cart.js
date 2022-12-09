
function fetchApi(body, numerOfProduct) {
  fetch("/cart", {
    method: "POST",
    body: JSON.stringify({
      product_id: body.id,
      item_name: body.name,
      item_price: parseInt(body.price),
      item_image: body.image,
      quantity: parseInt(numerOfProduct),
    total :parseInt(body.price) * parseInt(numerOfProduct)
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("item added");
      //Sweetalert2 Pop up feature
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: err,
        showConfirmButton: false,
        timer: 1500,
      });
    });
}

//Function that adds products to cart
function addToCart(body, event) {
  const data = JSON.parse(body);
 
  const id = event.target.dataset.id;
  const name = event.target.dataset.name;
  
  const filteredItem = data.find((item) => item.id == id);
  filteredItem.name = name

  let quantityElement = event.target.previousElementSibling
  quantityElement.defaultValue = 1 // set the default value for the inputfield to be 1
  const quantity = quantityElement.value;

  fetchApi(filteredItem, quantity)
  
}
