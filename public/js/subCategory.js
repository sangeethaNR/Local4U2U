const buttons = document.querySelectorAll(".category_btn");
const productsContainer = document.querySelector(".products-container .row")

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
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card" style="width: 12rem; align: center; height= auto; display: inline">
              <img src=${item.image} class="card-img-top" alt="..." style="height: 150px">
              <div class="card-bodystyle" width: 12rem; align: center; height= auto">
              <h5 class="card-title"  >${name}</h5>
              <p class="card-text">${item.store_name}</p>
              <p class="card-text">In stock :${item.stock}</p>
              <p class="card-text">Price :$${item.price}</p>
              <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
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

/*
  <parent>
    <child>
      <child>
      </child>
    </child>
  </parent>
*/


buttons.forEach((button) => {
  button.addEventListener("click", (e) => fetchData(e));
});
