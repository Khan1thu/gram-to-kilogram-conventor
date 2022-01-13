function toKilogram(){
    let gram = Number(document.querySelector("#input").value);

    let kilo = gram / 1000;

    document.querySelector("#result").innerHTML = kilo+"Kilogram";

    document.querySelector("#input").value = "";

}

function toGram(){
    let kilo = Number(document.querySelector("#input").value);
  
    let gram = kilo * 1000;
  
    document.querySelector("#result").innerHTML = gram+"Gram";

    document.querySelector("#input").value = "";
}