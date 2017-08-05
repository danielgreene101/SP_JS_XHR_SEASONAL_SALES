var productsInfo = [];
var salesInfo = [];
var sale = '';
var placeToGo = document.getElementById('prodInput');
var disc = document.getElementById('discount')
var name = '';
var price = '';
var id='';
var category = '';

////XML requests/////
var one = new XMLHttpRequest();
one.addEventListener('load', function() {
    this.readyState == 4 && this.status == 200;
    productsInfo.push(JSON.parse(one.responseText));
    printProd();
});
one.open("GET", "products.JSON", true);
one.send();

var two = new XMLHttpRequest();
two.addEventListener('load', function() {
    salesInfo.push(JSON.parse(two.responseText));
});
two.open("GET", "categories.JSON", true);
two.send();



//////////products//////////
function printProd(){
        for (var i = 0; i < one.responseText.length; i++){
            var name = document.createElement("h2");
            name.innerHTML = productsInfo[0].products[i].name;
            placeToGo.appendChild(name);
            
            var price = document.createElement("h5");
            price.innerHTML = productsInfo[0].products[i].price;
            placeToGo.appendChild(price);
            
            var id = document.createElement("p");
            id.innerHTML = productsInfo[0].products[i].id;
            placeToGo.appendChild(id);
            ////add name to catagory//// 
            var category = document.createElement("p");
            if (productsInfo[0].products[i].category_id === 1){
                category.innerHTML = 'Apparel';
                price.className = "Apparel";
            }else if(productsInfo[0].products[i].category_id === 2){
                category.innerHTML = 'Furniture';
                price.className = "Furniture";
            }else if(productsInfo[0].products[i].category_id === 3){
                category.innerHTML = 'Household'
                price.className = "Household";
            }
            placeToGo.appendChild(category);
            console.log("why ARENT YOU PRINTING!?!?!?!?!?");
        }

};
//////////DISCOUNT WORK///////
function addDiscount (a, b) {
    for (var i = 0; i < a.length; i++){
        let discounts = a[i].innerHTML;
        console.log(a[i].innerHTML);
        let finalPrice =  a[i].innerText * (1 -salesInfo[0].categories[b].discount);///applies discount to finals price////
        a[i].innerHTML = finalPrice.toFixed(2);////apends price with two decimals////
    }
};


////Calling discounts to be applied//// 
disc.addEventListener('change', function (){
    seas = disc.value;
    console.log('FOR THE LOVE OF ALL THAT IS HOLY PRINT', seas);
    if (seas === '0'){
        addDiscount(document.getElementsByClassName('Apparel'), 0)
        console.log("what can i do to make this work?");
    }else if(seas === '1'){
        addDiscount(document.getElementsByClassName('Furniture'), 0)
    }else if(seas === '2'){
        addDiscount(document.getElementsByClassName('Household'), 0) 
    }
    
    
    
});



