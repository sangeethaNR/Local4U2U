// const Swal = require("sweetalert2")



// import Swal from 'sweetalert2'
function fetchApi(body, numerOfProduct) {
  //const data = JSON.parse(body);
  //console.log('inside fetchAPI' + JSON.stringify(body));
  //console.log('quantity:' + numerOfProduct)
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
