//? SHOW AND NOT SHOW CART

const iconCart = document.querySelector('.iconCart');
const cart = document.querySelector('.cart'); 
const equis = document.querySelector('.equis');


iconCart.addEventListener('click', () => {
  cart.classList.add("cart_btn");
})

equis.addEventListener('click', () => {
  cart.classList.remove('cart_btn');
})


//? ADD OR REMOVE QUANTITY //?/////////////////////////////////////////////////////////????????????????


const cards = [
  {
    id: 1,
    img: "./img/featured1.png",
    tipo: "Hoodies",
    element:"hod",
    price: 14.0,
    stock: 10,
  },
  {
    id: 2,
    img: "./img/featured2.png",
    tipo: "Shirts",
    element:"shrt",
    price: 24.0,
    stock: 15,
  },
  {
    id: 3,
    img: "./img/featured3.png",
    tipo: "Sweatshirts",
    element:"swts",
    price: 24.0,
    stock: 20,
  }
];

const logicCart = document.querySelector('.logicCart');
const print = document.querySelector('.print');
const products = document.querySelector('.products')
const add = document.querySelector('.add')


function printProductos() {
  let html = "";
  cards.forEach(({id, img, tipo, element, price, stock}) => {
    html += `
    <div class="producto1">
    <div class="img-in">
      <img src="${img}" alt="">
    </div>
    <div class="text-below" id = "${id}">
      <button class="add-btn">
        <i class="bx bx-plus add"></i>
      </button>
      <div class="price-stock">
        <h2>$14.99</h2>
        <p><span>| Stock: 10</span></p>
      </div>
      <h3>Hoddies</h3>
    </div>
    </div>
    `
  });

print.innerHTML = html;

  
}

printProductos();

const carrito = {};

function printOnCart(){
  let html = ""; 
  const arrayCart = Object.values(carrito);
  arrayCart.forEach(({amount, img, id}) =>{
      html += `
      <div class="item_cart" >
            <div class="item_cart-img">
                <img src="${img}" alt="">
            </div>  
            <div class = "item-body" id="${id}"> 
                <i class='bx bx-minus'></i>
                <span id="amount">${amount}</span>
                <i class='bx bx-plus-medical'></i>
                <i class='bx bx-trash'></i>
                
            </div>
    </div>`;
      
  })
  cart.innerHTML = html
  
}

print.addEventListener("click", (e) => {
  
  if(e.target.classList.contains("add")){
    
      const idproducto = +e.target.parentElement.parentElement.id
      const producto = cards.find((item) => item.id === idproducto);
    
      if(carrito[idproducto] && carrito[idproducto].amount < 10){
          carrito[idproducto].amount ++;
      }else if(!carrito[idproducto]){
          carrito[idproducto] = producto;
          carrito[idproducto].amount = 1
      }
      printOnCart()
  }
})

cart.addEventListener("click", (e) => {
  const idproducto = +e.target.parentElement.id;
  if(e.target.classList.contains("bx-minus")){
      carrito[idproducto].amount --;
      if(carrito[idproducto].amount === 0){
          let respuesta = confirm("¿seguro de eliminar este producto?")
          if(respuesta)
              delete carrito[idproducto];
          else
           carrito[idproducto].amount ++; 
      }
  }        

  if(e.target.classList.contains("bx-plus-medical")){
      if(carrito[idproducto].amount < carrito[idproducto].stock){
          carrito[idproducto].amount ++;
      }else{
          alert(`lo siento`);
      }
  }
  if(e.target.classList.contains("bx-trash")){
      delete carrito[idproducto];
  }
  printOnCart();
})

mixitup('.img-product-detail', {
  selectors:{
    target: '.icons-img'
  },
  animation:{
    duration: 300
  }
}).filter('all')

