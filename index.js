const ui = (data) => {
    data.map((ele) => {
        let img = document.createElement('img');
        img.src = ele.img;
        let title = document.createElement("h3");
        title.innerHTML = ele.title;
        let price = document.createElement("h5");
        price.innerHTML = ele.price;
        let category = document.createElement("h5");
        category.innerHTML = ele.category;
        let div = document.createElement("div");
        div.append(img, title, price, category);
        document.getElementById("ui").append(div);
    })
  };
let get = async () => {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    ui(data);
    console.log(data)
};
get();
const productdata = (e) => {
  e.preventDefault();
  let product = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  fetch('http://localhost:3000/products',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(product)
  })
};

document.querySelector("form").addEventListener("submit", productdata);