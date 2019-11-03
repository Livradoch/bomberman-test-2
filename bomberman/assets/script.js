let cube = document.getElementById("cube");
let ennemy = document.getElementById("ennemy");

// je veux bouger le cube//

function move(element, direction) {
    let top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
    );
    let left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
    );


    switch (direction) {
        case "bas":
            top_element = parseInt(
                window.getComputedStyle(element).getPropertyValue("top")
            );
            if (top_element < 750) {
                top_element += 50;
                element.style.top = top_element + "px";

            }
            break;
        case "haut":
            top_element = parseInt(
                window.getComputedStyle(element).getPropertyValue("top")
            );
            if
                (top_element > 0) {
                top_element -= 50;
                element.style.top = top_element + "px";
            }
            break;
        case "right":
            left_element = parseInt(
                window.getComputedStyle(element).getPropertyValue("left")

            );
            if (left_element < 750) {
                left_element += 50;
                element.style.left = left_element + "px";
            }
            break;
        case "left":
            right_element = parseInt(
                window.getComputedStyle(element).getPropertyValue("left")
            );
            if (left_element > 0) {
                left_element -= 50;
                element.style.left = left_element + "px";
            }
            break;






    }
}
console.log("bonjour")
window.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        //haut//

        case 38:
            //code quand on va en haut
            move(cube, "haut");
            break;
        //droite
        case 39:
            //code quand on va à droite
            move(cube, "right");
            break;

        //bas
        case 40:
            move(cube, "bas");
            //code quand on va à bas
            break;

        //gauche
        case 37:
            //code quand on va à gauche
            move(cube, "left");
            break;
    }

});
console.log("bonjour");


// faire apparaître des bombes  

let bombes= document.getElementById("bombes");

bombes_prime = bombes.cloneNode(true);