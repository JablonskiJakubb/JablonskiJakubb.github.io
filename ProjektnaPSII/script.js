function Samochody(){
    var select = document.getElementById("cars");
    select = select.value;
    var cars = document.getElementsByClassName("car");


    if (select == "all"){
        for (var i = 0; i < cars.length; i++) {
            cars[i].style.display = "block";
    }
    }
    else if (select == "Bmw"){
        for (var i = 0; i < cars.length; i++){
            if (cars[i].classList.contains("Bmw")) cars[i].style.display = "block";
            else cars[i].style.display = "none";
        }
    }
    else if (select == "Mercedes"){
        for (var i = 0; i < cars.length; i++){
            if (cars[i].classList.contains("Mercedes")) cars[i].style.display = "block";
            else cars[i].style.display = "none";
        }
    }
    else if (select == "Opel"){
        for (var i = 0; i < cars.length; i++){
            if (cars[i].classList.contains("Opel")) cars[i].style.display = "block";
            else cars[i].style.display = "none";
        }
    }
}