let id = -1

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
    let del = document.createElement("button");
    del.innerHTML = "delete";
    del.addEventListener("click", () => {
      console.log(ele.id)
      fetch(`http://localhost:3000/products/${ele.id}`, {
        method: 'DELETE',
      })
    });
    let upd = document.createElement("button");
    upd.innerHTML = "update";
    upd.addEventListener("click", () => {
      document.getElementById("title").value = ele.title;
      document.getElementById("img").value = ele.img;
      document.getElementById("price").value = ele.price;
      document.getElementById("category").value = ele.category;
      document.getElementById("btn").value = "Update";
      id = ele.id;
    })
    let div = document.createElement("div");
    div.append(img, title, price, category, del, upd);
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
  let value = document.getElementById("btn").value;
  console.log(value)
  let product = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  if (value == "submit") {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(product)
    })
  }
  else {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(product)
    })
  }

}

document.querySelector("form").addEventListener("submit", productdata);
