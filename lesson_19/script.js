const containerProducts = document.querySelector("#container-products");
const form = document.querySelector("#form-items")
const loader = document.querySelector("#loader")


async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.map((product) => {
        const card = document.createElement("section");
        card.classList.add("product-card");
        const heading = document.createElement("h4");
        heading.textContent = product.title;
        // цена товара
        const price = document.createElement("p");
        price.textContent = `Price: ${Math.floor(product.price)}€`;
        
        //создаем картинку
        const img = document.createElement("img");
        img.src = product.image;
        
        img.classList.add("card-img");
        // обьединяем
        card.append(heading, price, img);
        // добавляем 
        containerProducts.append(card);
    });
}
// getProducts();



async function getProductsAmount(value) {
    loader.classList.toggle("loader-hide")
    setTimeout(async() => {
        const res = await fetch(`https://fakestoreapi.com/products?limit=${value}`);
        const data = await res.json();
        data.map((product) => {
            const card = document.createElement("section");
            card.classList.add("product-card");
            const heading = document.createElement("h4");
            heading.textContent = product.title;
            // цена товара
            const price = document.createElement("p");
            price.textContent = `Price: ${Math.floor(product.price)}€`;
            
            //создаем картинку
            const img = document.createElement("img");
            img.src = product.image;
            
            img.classList.add("card-img");
            // обьединяем
            card.append(heading, price, img);
            // добавляем 
            containerProducts.append(card);
        })
        loader.classList.toggle("loader-hide")
    },150 )  
}

//очиска результата на странице
const cleanItems = () => {
    while(containerProducts.firstChild){
        containerProducts.removeChild(containerProducts.firstChild)
    }
}





form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const amount = event.target.amount.value
    event.target.amount.value = "";
    cleanItems();
    getProductsAmount(amount);
    
} )
