var dom = {
    password: document.getElementById('password'),
    passwordSettings: {
        passLengthUser: document.getElementById("widthPassword"),
        passLengthCarousel: document.getElementById("rangePassword"),
        uppercase: document.getElementById('configTopRegistr'),
        numbers: document.getElementById('configNumbers'),
        symbols: document.getElementById('configSymbols')
    },
    checkbox: {
        uppercase: document.getElementById('configTopRegistr'),
        numbers: document.getElementById('configNumbers'),
        symbols: document.getElementById('configSymbols'),
    }
};

var data = {
    letters: {
        up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        down: 'abcdefghijklmnopqrstuvwxyz'
    },
    numbers: '1234567890',
    symbols: '!\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~'
};

// Копируем текст
dom.password.onclick = function() {
    dom.password.select();
    document.execCommand("copy");
    alert('Скопировано в буфер обмена');
};

/*      Отслеживание ползунка       */
passwordLength = 4;
dom.passwordSettings.passLengthUser.addEventListener('input', function() {
    passwordLength = (dom.passwordSettings.passLengthCarousel.value = dom.passwordSettings.passLengthUser.value);
    generate();
});

dom.passwordSettings.passLengthCarousel.addEventListener('input', function() {
    passwordLength = (dom.passwordSettings.passLengthUser.value = dom.passwordSettings.passLengthCarousel.value);
    generate();
});

// generator random number

function randomNumberGenerator(maxNumber) {
    var randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}

// Generator

function passwordGenerator(symbols, passwordLength){
   var maxIdx = symbols.length - 1;
   var password = '';

   for (var i = 0; i < passwordLength; i++) {
        var idx = randomNumberGenerator(maxIdx);
        var randomLetter = symbols[idx];
        password = password + randomLetter;
    }
   return password;
}

// Settings Password
function generate() {
    var string = data.letters.down;
    
    if (dom.checkbox.uppercase.checked) {
        string = string + data.letters.up;
    }
    if (dom.checkbox.numbers.checked) {
        string = string + data.numbers;
    }
    if (dom.checkbox.symbols.checked) {
        string = string + data.symbols;
    }
    var pas = passwordGenerator(string, passwordLength);
    dom.password.value = pas;
}

