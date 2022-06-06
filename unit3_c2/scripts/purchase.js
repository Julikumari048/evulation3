
let purchase = JSON.parse(localStorage.getItem("purchase"))
purchase.map((elem,i)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
     
    img.src = elem.image;

    let name = document.createElement("h3");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = elem.price;

    div.append(img,name,price);
    document.querySelector("#purchased_vouchers").append(div);
})