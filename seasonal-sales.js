var productsInfo = [];
var salesInfo = [];
var sale = '';
var placeToGo = document.getElementById('prodInput');
var disc = document.getElementById('discount')



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
    salesInfo.push(JSON.parse(two.responseText).categories);
});
two.open("GET", "categories.JSON", true);
two.send();



//////////products//////////
function printProd(){
        for (var i = 0; i < one.responseText.length; i++){
            let name = document.createElement("h2");
            name.innerHTML = productsInfo[0].products[i].name;
            placeToGo.appendChild(name);
            
            let price = document.createElement("p");
            price.innerHTML = productsInfo[0].products[i].price;
            placeToGo.appendChild(price);
            
            let id = document.createElement("p");
            id.innerHTML = productsInfo[0].products[i].id;
            placeToGo.appendChild(id);
            
            let category = document.createElement("p");
            if (productsInfo[0].products[i].category_id === 1){
                category.innerHTML = 'Apparel';
            }else if(productsInfo[0].products[i].category_id === 2){
                category.innerHTML = 'Furniture';
            }else if(productsInfo[0].products[i].category_id === 3){
                category.innerHTML = 'Household'
            }
            placeToGo.appendChild(category);
        }

};



////////discounts/////////
//        for (var i = 0; i < cats.length; i++){
//            var catDiscount = cats[i].discount;
//            var catSeason = cats[i].season_discount;
//            var catName = cats[i].name;
//            var catId = cats[i].id;