function pdTemplate(id, img, nom, prix) {
    return `<div class="pd">
    <img src="${img}" alt="pd1" srcset="">
    <div class="txt">
        <label for="">${nom}</label>
        <strong>${prix}</strong>
    </div>
    <button type="submit" class="ass" value="${id}">add</button>

    </div>`
}




let produits = [
    {
        "id": "1",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "50",

    },
    {
        "id": "2",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "3",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "4",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "5",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "6",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "50",

    }
];


let plat = [
    {
        "id": "1",
        "img": "ublic/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "50",

    },
    {
        "id": "2",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "3",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "4",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "5",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "30",

    },
    {
        "id": "6",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": "50",

    }
];








let var1 = document.querySelector(".produit");


for (let i = 0; i < produits.length; i++) {
    // var1.innerText="hhhhhhhh";

    // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
    var1.innerHTML += pdTemplate(produits[i].id,produits[i].img,produits[i].nom,produits[i].prix)
}



















let check = document.querySelector("#add");
let heho = document.querySelectorAll('.ass');
let somme;
heho.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < produits.length; i++) {
            if (produits[i].id == item.value) {
                alert(item.value);
                check.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div></div><br>';
                somme += item.prix;
            }
        }
    })
})
let art= document.querySelector("#btnplat");
art.addEventListener("click",function(){
    //    var1.classList.add("pde");
    clear()
    for (let i = 0; i < produits.length; i++) {
        // var1.innerText="hhhhhhhh";
    
        // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
        var1.innerHTML += pdTemplate(plat[i].id,plat[i].img,plat[i].nom,plat[i].prix)
    }
     })

function clear() {
    while (var1.hasChildNodes()) {
        var1.removeChild(var1.firstChild)
    }
}