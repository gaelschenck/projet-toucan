let push = document.getElementById('push');
let hidden = document.getElementById('hidden');

push.addEventListener('click', () =>{
    let search = document.getElementById('search');
    let ean = search.value;
    console.log(search);
    console.log(ean);
    console.log(ean.length);
    
if (ean.length !== 13 ){
    alert(" On a dit 13 chiffres ! ");
} else{
        
fetch('https://fr.openfoodfacts.org/api/v0/product/'+ ean )
   .then((rep) =>
        {
            if (rep.ok === true) return rep.json();
            // si la réponse est true, je recupère le json
            else return Promise.reject (`Erreur HTTP => ${rep.status}`)
        }
    )
.then((data) => {
    console.log(data.product);
    hidden.style.display = "block";
    let product = data.product;
    document.getElementById("affichage").src = product.image_url;
    document.getElementById("nomProduit").innerHTML = "<strong>Nom du produit : </strong>" + product.product_name_fr;
    document.getElementById("codeBarre").innerHTML = "<strong>Code-barres : </strong>" + product.id;
    document.getElementById("quantité").innerHTML = "<strong>Quantité : </strong>" + product.quantity;
    document.getElementById("conditionnement").innerHTML = "<strong>Conditionnement : </strong>" + product.packaging;
    document.getElementById("marque").innerHTML = "<strong>Marque : </strong>" + product.brands;
    document.getElementById("paysVente").innerHTML = "<strong>Pays de vente : </strong>" + product.countries;
    document.getElementById("allergene").innerHTML = "<strong>Allergènes : </strong>" + product.allergens;
    document.getElementById("additif").innerHTML = "<strong>Additifs : </strong>" + product.additives_n;
    document.getElementById("nutriScore").innerHTML = product.nutriscore_grade;
    document.getElementById("nova").innerHTML = product.nova_group;
    document.getElementById("ecoScore").innerHTML = product.ecoscore_grade;
    document.getElementById("Nutrition").src = product.image_nutrition_url;
    document.getElementById("Conditionnement").innerHTML = "<strong>Conditionnement : </strong>" + product.packaging_text_fr;
    document.getElementById("Transport").innerHTML = "<strong>Service client : </strong>" + product.customer_service_fr;

    switch (product.nutriscore_grade){
        case "a" :
            document.getElementById("nutriScore").src = "./nutriscore_a.png";
            console.log("un trou");
            break;
        case "b" :
            document.getElementById("nutriScore").src = "./nutriscore_b.png";
            console.log( "juste un trou");
            break;
        case "c" :
            document.getElementById("nutriScore").src = "./nutriscore_c.png";
            console.log("seulement un trou");
            break;
        case "d" :
            document.getElementById("nutriScore").src = "./nutriscore_d.png";
            console.log("toujours un trou");
            break;
        case "e" :
            document.getElementById("nutriScore").src = "./nutriscore_e.png";
            console.log("pourquoi un trou");
            break; 
        default:
            null;   
    }
    switch (product.nova_groups){
        case "1" :
            document.getElementById("nova").src = "./nova_1.png";
            console.log("un trou");
            break;
        case "2" :
            document.getElementById("nova").src = "./nova_2.png";
            console.log( "juste un trou");
            break;
        case "3" :
            document.getElementById("nova").src = "./nova_3.png";
            console.log("seulement un trou");
            break;
        case "4" :
            document.getElementById("nova").src = "./nova_4.png";
            console.log("toujours un trou");
            break;
        default:
            null;
    }
    switch (product.ecoscore_grade){
        case "a" :
            document.getElementById("ecoScore").src = "./Eco-score_a.svg";
            console.log("un trou");
            break;
        case "b" :
            document.getElementById("ecoScore").src = "./Eco-score_b.svg";
            console.log( "juste un trou");
            break;
        case "c" :
            document.getElementById("ecoScore").src = "./Eco-score_c.svg";
            console.log("seulement un trou");
            break;
        case "d" :
            document.getElementById("ecoScore").src = "./Eco-score_d.svg";
            console.log("toujours un trou");
            break;
        case "e" :
            document.getElementById("ecoScore").src = "./Eco-score_e.svg";
            console.log("pourquoi un trou");
            break; 
        default:
            null; 
    }
})
.catch((err) => console.log(err));
}})

