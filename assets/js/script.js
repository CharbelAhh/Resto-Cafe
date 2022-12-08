var nav=document.getElementsByClassName("nav")[0];

document.addEventListener("scroll",()=>{
    if (scrollY>document.getElementById("menu").getBoundingClientRect().top){
        nav.style.backgroundColor="var(--theme-color)";
        nav.getElementsByTagName("a")[0].classList.remove("active");
        nav.getElementsByTagName("a")[1].classList.add("active");
    }
    else{
        nav.style.backgroundColor="transparent";
        nav.getElementsByTagName("a")[0].classList.add("active");
        nav.getElementsByTagName("a")[1].classList.remove("active");
    }
})

const menu={
    "Coffee":{
        "icon":"coffee",
        "items":{
            "Expresso":3,
            "Double Expresso":5,
            "Cappocino":4,
            "Latte":4,
            "Americano":3,
            "Mocha":4,
        }
    },
    "Sandwiches":{
        "icon":"burger",
        "items":{
            "Cheese Salad":4,
            "Tuna Salad":4,
            "Hummous":4,
            "Brie Cheese":4,
            "Egg Mayo":4
        }
    }
}

var currentScroll=0;

document.addEventListener("scroll",()=>{
    if (scrollY>currentScroll){
        nav.style.transform="translateY(-100%)"
    }
    else {
        nav.style.transform="translateY(0%)"
    }
    currentScroll=scrollY;
})

for (var section in menu){
    let m=document.getElementById("menu").getElementsByClassName("row")[0];
    
    let col=document.createElement("div");
    col.className="col mb-0 mb-lg-3";
    
    let h1=document.createElement("h1");
    
    let icon=document.createElement("i");
    icon.className="fas fa-"+menu[section].icon;
    
    h1.appendChild(icon);
    h1.innerHTML+="&nbsp;"+section;

    col.appendChild(h1);
    let ul=document.createElement("ul");
    ul.type="square";
    
    for (item in menu[section].items){
        let li=document.createElement("li");
        
        let dotsnum=17-item.length;
        let dots=".";

        for (var i=0;i<dotsnum;i++) dots+="."
        li.innerHTML=item+dots+menu[section].items[item]+"$";
        ul.appendChild(li);

        col.appendChild(ul);
    }


    m.appendChild(col);
}


var stars=document.getElementById("stars")
for (var k=0;k<5;k++){
    let btn=document.createElement("button");
    btn.id=k+1;
    btn.selected=false;
    let i=document.createElement("i");
    i.className="fa fa-star-o";

    btn.addEventListener("mouseover",()=>{
        i.className="fa fa-star";
    })
    btn.addEventListener("mouseout",()=>{
        if (!btn.selected)
            i.className="fa fa-star-o";
    })
    btn.addEventListener("click",()=>{
        if (!btn.selected)
        for (var j=0;j<stars.children.length;j++)
        {
            if (j+1>btn.id){
                stars.children[j].getElementsByTagName("i")[0].className="fa fa-star-o";
                stars.children[j].selected=false;
            }
            else{
                stars.children[j].getElementsByTagName("i")[0].className="fa fa-star";
                stars.children[j].selected=true;
            }
        }
        else for (var j=0; j<stars.children.length;j++)
        {
            stars.children[j].getElementsByTagName("i")[0].className="fa fa-star-o";
            stars.children[j].selected=false;
        }
    })

    btn.appendChild(i);

    stars.appendChild(btn);
}

var options=document.getElementById("menu-options");

for (item in menu){
    
}