// function pdTemplate(id, img, nom, prix) {
//     return `<div class="pd">
//     <img src="${img}" alt="pd1" srcset="">
//     <div class="txt">
//         <label for="">${nom}</label>
//         <strong>${prix}</strong>
//     </div>
//     <button type="submit" class="ass" value="${id}">add</button>

//     </div>`
// }

function Template(id, img, nom, prix) {
    return `<div class="pd" id="${id}">
    <img src="${img}" alt="pd1" srcset="">
    <div class="txt" id="txt">
        <label for="">${nom}</label>
        <strong>${prix}</strong>
    </div>
    <button onclick="add(${id})" type="submit" class="ass" value="${id}">add</button>

    </div>`
}

function Template2(id, img, nom, prix) {
    return `<div class="pd" id="${id}">
    <img src="${img}" alt="pd1" srcset="">
    <div class="txt" id="txt">
        <label for="">${nom}</label>
        <strong>${prix}</strong>
    </div>
    </div>`
}
// let cart = document.querySelector("#add");
let somme=0;

function add(id) {
    console.log(document.getElementById(id));
    // document.getElementById(id).removeChild(2);
    for(let i=0;i<produits.length;i++){
        if(id==produits[i].id){
            // console.log(produits[i].prix)
            somme+=produits[i].prix;
            document.getElementById('add').innerHTML += Template2(id, produits[i].img,produits[i].nom,produits[i].prix);
        }
    }
    for(let i=0;i<plat.length;i++){
        if(id==plat[i].id){
            document.getElementById('add').innerHTML += Template2(id, plat[i].img,plat[i].nom,plat[i].prix);
            somme+=plat[i].prix;
        }
    }
    for(let i=0;i<salades.length;i++){
        if(id==salades[i].id){
            document.getElementById('add').innerHTML += Template2(id, salades[i].img,salades[i].nom,salades[i].prix);
            somme+=salades[i].prix;
        }
    }
}

let totale= document.querySelector("#totale");
totale.addEventListener("click",function(){
    alert("totale ="+somme);
    somme=0;
     clear2();
     })



let produits = [
    {
        "id": "1",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 50,

    },
    {
        "id": "2",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "3",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "4",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "5",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "6",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 50,

    }
];


let plat = [
    {
        "id": "7",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "plat",
        "prix": 50,
    },
    {
        "id": "8",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "plat",
        "prix": 30,

    },
    {
        "id": "9",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "10",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "11",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "12 ",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 50,

    }
];

let salades = [
    {
        "id": "13",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "ssalade",
        "prix": 50,

    },
    {
        "id": "14",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "ssalade",
        "prix": 30,

    },
    {
        "id": "15",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "ssalade",
        "prix": 30,

    },
    {
        "id": "16",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "ssalade",
        "prix": 30,

    },
    {
        "id": "17",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 30,

    },
    {
        "id": "18",
        "img": "public/playground_assets/imagei582-gws-300h.png",
        "nom": "nom1",
        "prix": 50,

    }
];






let var1 = document.querySelector(".produit");


for (let i = 0; i < produits.length; i++) {
    // var1.innerText="hhhhhhhh";

    // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
    var1.innerHTML += Template(produits[i].id,produits[i].img,produits[i].nom,produits[i].prix)
}   



















let check = document.querySelector("#add");
let heho = document.querySelectorAll('.ass');

// heho.forEach((item) => {
//     item.addEventListener('click', () => {
//         for (let i = 0; i < produits.length; i++) {
//             if (produits[i].id == item.value) {
//                 //alert(item.value);
//                 check.innerHTML += pdTemplate(produits[i].id,produits[i].img,produits[i].nom,produits[i].prix)
//                 // check.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div></div><br>';
//                 somme += item.prix;
//             }
//         }

//         for (let i = 0; i < plat.length; i++) {
//             if (plat[i].id == item.value) {
//                 alert(item.value);
//                 check.innerHTML += pdTemplate(plat[i].id,plat[i].img,plat[i].nom,plat[i].prix)
//                 // check.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div></div><br>';
//                 somme += item.prix;
//             }
//         }

//     })

    
// })




// debut slide 

let art= document.querySelector("#btnplat");
art.addEventListener("click",function(){
    //    var1.classList.add("pde");
    clear()
    for (let i = 0; i < produits.length; i++) {
        // var1.innerText="hhhhhhhh";
    
        // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
        var1.innerHTML += Template(plat[i].id,plat[i].img,plat[i].nom,plat[i].prix)
    }
     })


     let all= document.querySelector("#all");
    all.addEventListener("click",function(){
        //    var1.classList.add("pde");
        clear()
        for (let i = 0; i < produits.length; i++) {
            // var1.innerText="hhhhhhhh";
        
            // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
            var1.innerHTML += Template(produits[i].id,produits[i].img,produits[i].nom,produits[i].prix)
        }
        })

        let salade= document.querySelector("#salade");
        salade.addEventListener("click",function(){
            //    var1.classList.add("pde");
            clear()
            for (let i = 0; i < salades.length; i++) {
                // var1.innerText="hhhhhhhh";
            
                // var1.innerHTML += '<div class="pd"><img src="' + produits[i].img + '" alt="pd1" srcset=""><div class="txt" >' + produits[i].nom + produits[i].prix + ' </div><button type="submit" class="ass" value=' + produits[i].id + '>add</button></div><br>';
                var1.innerHTML += Template(salades[i].id,salades[i].img,salades[i].nom,salades[i].prix)
            }
            })

function clear() {
    while (var1.hasChildNodes()) {
        var1.removeChild(var1.firstChild)
    }
}

function clear2() {
    while (var1.hasChildNodes()) {
        check.removeChild(check.firstChild)
    }
}


//fin slide