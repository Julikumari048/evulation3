
    const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    fetch(url)
    .then(function(res){
        return res.json();
    })
       
    .then(function(res){
        console.log(res[0].vouchers);
        append(res[0].vouchers);
    })
    .catch(function(err){
        console.log(err);
    })


function append(data){
  for(let i = 0; i<data.length; i++){
    
        let div = document.createElement("div");
        let img = document.createElement("img");
         //let img_div = document.createElement("div");
        img.src = data[i].image;
        // img_div.append(img);

        let name = document.createElement("h3");
        name.innerText = data[i].name;

        let price = document.createElement("p");
        price.innerText = data[i].price;

        let perButton = document.createElement("button");
        perButton.innerText = "Purchase";
        perButton.setAttribute=("class","buy_voucher");
        perButton.addEventListener("click",() =>{
            PurchaseFun(data[i]);
        })

        div.append(img,name, price,perButton);
        document.querySelector("#voucher_list").append(div);

}
}
    function PurchaseFun(purElement){
        localStorage.setItem("voucher_list",JSON.stringify(purElement));
        window.location.href = "purchase.html";
    }
