var widthPass = document.getElementById("widthPassword");
var rangePass = document.getElementById("rangePassword");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var bukvi = document.getElementById("configBotRegistr");
var numbers = document.getElementById("configNumbers");
var symbolis = document.getElementById("configSymbols");


/*    конфигурация пароля    */
var optionsPassword = {
    alphabet: true,
    numbers: false,
    symbolis: false
};


// function configPassword ()  {
//     var mass = [];
//     if (optionsPassword.alphabet === true) {
//         return mass.concat(alphabet);
//     }

//     for (i = 0; i < lengthPassword(); i++) {
//         var rand = Math.floor(Math.random() * mass.length);
//         console.log(mass[rand]);
//     }
// }
// configPassword();

// function hi () {
//     for (i = 0; i < lengthPassword(); i++) {
//         var rand = Math.floor(Math.random() * mass.length);
//         console.log(mass[rand]);
//     }
// }

var mass = [];


function pars () {
    mass =[];
}
/*      Отслеживание нажатия чекбоксов       */

bukvi.onclick = function() {
    if (bukvi.checked) { 
        optionsPassword.alphabet = true;
        mass = mass.concat(alphabet);
    } else {
        optionsPassword.alphabet = false;
    }
};

numbers.onclick = function() {
    if (numbers.checked) { 
        optionsPassword.numbers = true;
        mass = mass.concat(number);
    } else {
        optionsPassword.numbers = false;
    }
};

symbolis.onclick = function() {
    if (symbolis.checked) { 
        optionsPassword.symbolis = true;
    } else {
        optionsPassword.symbolis = false;
    }
};

/*    Генерация пароля    */


// function configPassword ()  {
//     for (i = 0; i < lengthPassword(); i++) {
//         var rand = Math.floor(Math.random() * mass.length);
//         console.log(mass[rand]);
//     }
// }
// configPassword();
    


/*      Отслеживание ползунка       */
widthPass.addEventListener('input', function() {
    rangePass.value = widthPass.value;
    lengthPassword();
});

rangePassword.addEventListener('input', function() {
    widthPass.value = rangePass.value;
    lengthPassword();
});

/*  длина пароля выбранная пользователем  */
function lengthPassword () {
    var passValue = rangePassword.value;
    return passValue;
}
 








// var pressed = [];

// function configPress () {
//     if (configBotRegistr.checked) {
//         return true;
//     }
//     // } else if (configSymbols.checked) {
//     //     return false;
//     // } else if (configNumbers.checked) {
//     //     return false;
//     // }
// }


// configPress();

// widthPass.addEventListener('input', function() {
//     rangePass.value = widthPass.value;
//     lengthPassword();});

// rangePassword.addEventListener('input', function() {
//     widthPass.value = rangePass.value;
//     lengthPassword();
// });

// function lengthPassword() {
//     let passValue = rangePassword.value;
//     document.getElementById("passwordGenerator").value = widthPass.value;
// }

// lengthPassword();
// var rand = Math.floor(Math.random() * pressed.length);

// console.log(number[rand]);

// var password = document.getElementById("passwordGenerator").value = widthPass.value;
