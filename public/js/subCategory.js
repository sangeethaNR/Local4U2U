const buttons = document.querySelectorAll(".category_btn");
const productsContainer = document.querySelector(".products-container")

function fetchData(e) {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const category_id = e.target.dataset.id
  fetch(`/api/category/${id}/item/${category_id}`)
  .then(res => res.json())
  .then(data => {
      displayProducts(data)
  })
  .catch(err => console.log(err))
}

function displayProducts(data) {
    productsContainer.innerHTML = ""
    let name = ""
    console.log(data)
    let output = ""
    data.forEach(item => {
        if(item.produce_name) name = item.produce_name
        if(item.food_name) name = item.food_name
        if(item.product_name) name = item.product_name
        console.log(name)
        output = `
        <div class="card" style="width: 18rem;">
            <img src=${item.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${item.store_name}</p>
            <p class="card-text">In stock :${item.stock}</p>
            <p class="card-text">Price :$${item.price}</p>
            <label for="quantity">Quantity:</label>
           <input type="number" id="quantity" name="quantity" min="1" max="5" value ="1">
            <button data-id=${item.id} data-name=${name} class="btn btn-secondary" >Add to Cart </button>
            </div>
        </div>
        `;
        productsContainer.innerHTML += output
        document.querySelectorAll("button.btn-secondary").forEach(i => {
          i.setAttribute("onclick", `addToCart('${JSON.stringify(data)}', event)`)
        })
      })
}


buttons.forEach((button) => {
  button.addEventListener("click", (e) => fetchData(e));
});
