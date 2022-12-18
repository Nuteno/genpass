const dom = {
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

const data = {
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
    const randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}

// Generator

function passwordGenerator(symbols, passwordLength){
   const maxIdx = symbols.length - 1;
   let password = '';

   for (let i = 0; i < passwordLength; i++) {
        const idx = randomNumberGenerator(maxIdx);
        const randomLetter = symbols[idx];
        password = password + randomLetter;
    }
   return password;
}

// Settings Password
function generate() {
    let string = data.letters.down;
    
    if (dom.checkbox.uppercase.checked) {
        string = string + data.letters.up;
    }
    if (dom.checkbox.numbers.checked) {
        string = string + data.numbers;
    }
    if (dom.checkbox.symbols.checked) {
        string = string + data.symbols;
    }
    const pas = passwordGenerator(string, passwordLength);
    dom.password.value = pas;
}

