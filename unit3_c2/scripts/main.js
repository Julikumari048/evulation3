//document.querySelector("#wallet_balance").addEventListener("click",addUser);
let wallet = JSON.parse(localStorage.getItem("user")) || [];
function addUser(e){
    let form = document.getElementById("add");
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    let address = document.querySelector("#address").value;

    let amount = document.querySelector("#amount").value;
    
    let u1 = new Users(name,email,address,amount);
    wallet.push(u1);
    console.log("wallet",wallet);
    localStorage.setItem("user",JSON.stringify(wallet));
}

function Users(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;

}