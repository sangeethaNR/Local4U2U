//Global
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//DIVS
var produceDIV = document.getElementById('produceDIV');
var accessoryDIV = document.getElementById('accessoryDIV');
var clothesDIV = document.getElementById('clothesDIV');
var foodDIV = document.getElementById('foodDIV');

//HTML
function HTMLproduce(con){
    let URL = ``;
    let btn = `btnProduce${con}`;
    return ` 
        <div class = "col-md-4">
            <div class = "card mb-4 shadow-sm">
                <img class = "card-img-top" style="height:15rem;" src = "${URL}" alt = "Card image cap">
                <div class = "card-body">
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <p class = "card-text"> ${Produce[con-1].name}</p>
                    <p class = "card-text"> Price: ${Produce[con-1].price}.00</p>
                    <div class = "d-flex justify-content-between align-items-center">
                        <div class = "btn-group">
                            <button type = "button" onclick = "cart2('${Produce[con-1].name}',
                            '${Produce[con-1].price}','${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" ><a 
                            style = "color:inherit;" href = "/cart"> Buy </a></button>
                            <button id = "${btn}" type = "button" onclick = "cart('${produce
                            [con-1].name}', '${Produce[con-1].price}', '${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" > Add to cart</button>
                        </div>
                        <small class = "text-muted"> Free Shipping </small>
                    </div>
                </div>
            </div>
        </div>
   `
}

function HTMLaccessory(con) {
    let URL =   `.jpeg`
    let btn = `btnAccessory${con}`;
    return `
    <div class = "col-md-4">
            <div class = "card mb-4 shadow-sm">
                <img class = "card-img-top" style="height:15rem;" src = "${URL}" alt = "Card image cap">
                <div class = "card-body">
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <p class = "card-text"> ${Accessory[con-1].name}</p>
                    <p class = "card-text"> Price: ${Accessory[con-1].price}.00</p>
                    <div class = "d-flex justify-content-between align-items-center">
                        <div class = "btn-group">
                            <button type = "button" onclick = "cart2('${Accessory[con-1].name}',
                            '${Accessory[con-1].price}','${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" ><a 
                            style = "color:inherit;" href = "/cart"> Buy </a></button>
                            <button id = "${btn}" type = "button" onclick = "cart('${Accessory
                            [con-1].name}', '${Accessory[con-1].price}', '${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" > Add to cart</button>
                        </div>
                        <small class = "text-muted"> Free Shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLclothes(con) {
    let URL =   `.jpeg`
    let btn = `btnClothes${con}`;
    return `
    <div class = "col-md-4">
            <div class = "card mb-4 shadow-sm">
                <img class = "card-img-top" style="height:15rem;" src = "${URL}" alt = "Card image cap">
                <div class = "card-body">
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <p class = "card-text"> ${Clothes[con-1].name}</p>
                    <p class = "card-text"> Price: ${Clothes[con-1].price}.00</p>
                    <div class = "d-flex justify-content-between align-items-center">
                        <div class = "btn-group">
                            <button type = "button" onclick = "cart2('${Clothes[con-1].name}',
                            '${Clothes[con-1].price}','${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" ><a 
                            style = "color:inherit;" href = "/cart"> Buy </a></button>
                            <button id = "${btn}" type = "button" onclick = "cart('${Clothes
                            [con-1].name}', '${Clothes[con-1].price}', '${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" > Add to cart</button>
                        </div>
                        <small class = "text-muted"> Free Shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLfood(con) {
    let URL =   `.jpeg`
    let btn = `btnFood${con}`;
    return `
    <div class = "col-md-4">
            <div class = "card mb-4 shadow-sm">
                <img class = "card-img-top" style="height:15rem;" src = "${URL}" alt = "Card image cap">
                <div class = "card-body">
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <i style = "color:orange;" class = "fa fa-star" ></i>
                    <p class = "card-text"> ${Food[con-1].name}</p>
                    <p class = "card-text"> Price: ${Food[con-1].price}.00</p>
                    <div class = "d-flex justify-content-between align-items-center">
                        <div class = "btn-group">
                            <button type = "button" onclick = "cart2('${Food[con-1].name}',
                            '${Food[con-1].price}','${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" ><a 
                            style = "color:inherit;" href = "/cart"> Buy </a></button>
                            <button id = "${btn}" type = "button" onclick = "cart('${Food
                            [con-1].name}', '${Food[con-1].price}', '${URL}','${con}','${btn}')"
                            class = "btn btn-sm btn-outline-secondary" > Add to cart</button>
                        </div>
                        <small class = "text-muted"> Free Shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

// Animation

function animation() {
    const toast = swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmationButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}


//Cart functions

function cart(name, price, url, con, btnCart){
    var item = {
        name : name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }

    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btnCart).style.display="none";
    animation();
}

function cart2(name, price, url, con, btnCart) {
    var item = {
        name : name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }

    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btnCart).style.display="none"; 
    }


(()=>{
    for (let index = 1; index <= 6; index++) {
        produceDIV.innerHTML+= `${HTMLproduce(index)}`;
    }
    for (let index =1; index <= 3; index++) {
        clothesDIV.innerHTML+= `${HTMLclothes(index)}`;
        accessoryDIV.innerHTML+= `${HTMLaccessory(index)}`;
        
    }
})