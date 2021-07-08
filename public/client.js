var btn = document.getElementById("myBtnShow");
btn.addEventListener("click", getProduct, false);

function getProduct(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText)
            let table = document.getElementById("test")
            table.innerHTML = ''
            for(i in data.products){
                let tr = document.createElement("TR")
                tr.class= "border-solid border-4 border-light-blue-500 ..."
                let name = document.createElement("TD")
                let price = document.createElement("TD")
                name.class = "border-solid border-4 border-light-blue-500 ..."
                price.class = "border-solid border-4 border-light-blue-500 ..."
                name.innerHTML = data.products[i].split("-")[0]
                price.innerHTML = data.products[i].split("-")[1]
                tr.appendChild(name)
                tr.appendChild(price)
                table.appendChild(tr)
            }
        }  
    };
    xhttp.open("GET", "http://localhost:3000/show", true);
    xhttp.send();
}