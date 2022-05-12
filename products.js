const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];

function marketInit(){
  let inicioLoja = document.querySelector(".container")
  let categoryRepeat = []
  let element =["fruits", "drinks", "hygiene"]
  let elementId = [".fruits", ".drinks", ".hygiene"]
  for (let i = 0 ; i < products.length;  i++ ){
    categoryRepeat.push(products[i].category)
  }
  let categoria = Array.from(new Set(categoryRepeat))
  for(let i = 0 ; i < categoria.length ; i++){
    inicioLoja.innerHTML += 
    `<section class="products-section"> 
    <h1>`+ categoria[i]+`</h1>
    <main class="products-content `+element[i]+`">
    </main>
    </section>`

    let category = products.filter((item) => item.category === categoria[i] )
    let ulInit = document.createElement("ul")
   document.querySelector(elementId[i]).appendChild(ulInit)
    let product = document.querySelector(elementId[i] + " ul")

    for(let x = 0; x < category.length ; x++) {
    product.innerHTML += `
    <li class="product">
              <img
                src="`+category[x].image+`"
                alt="`+category[x].imageDescription+`"
                title="`+category[x].title+`"
                class="product-img"
              />
              <main class="product-main">
                <h1 class="product-title">`+category[x].title+`</h1>
                <h5 class="product-category">`+category[x].category+`</h5>
                <strong class="product-price">R$ `+category[x].price+`</strong>
              </main>
            </li>
    ` 
  }
    } 
}
marketInit()

nave()
function nave(){
  let navegacao = document.createElement("nav")
  let navi = document.querySelector("body")
  let y = document.querySelector(".container")

  navi.insertBefore(navegacao, y)
  let image = document.createElement("img")
  image.setAttribute("src", "./img/brand/logo.svg")
  document.querySelector("nav").appendChild(image)
  

}
