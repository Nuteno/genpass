<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>passGener</title>
</head>

<body onload="generate()">

<section class="generator">  
    <!-- top Text -->
    <section class="generator__header">
        <div class="generator__header-text"></div>
            <h1>Генератор безопасных паролей</h1>
            <p class="generator__header-textDescription">Используйте этот онлайн генератор паролей, что бы мгновенно создать безопасный случайный пароль.</p>
        </div>
    </section>
    <!-- Form for Password -->
    <section class="generator__form">
        <div class="generator__form-item">
            <form>
                <input id="password" class="generator__form-inputDecorated" />
            </form>
        </div>
    </section>
    <!-- Configure Password -->
    <section class="generator__settings">
        <div class="generator__settings-text">
            <h2>Настройте свой пароль</h2>
        </div>
        <div class="generator__settings__configs">
            <div class="generator__settings__configs-left">
                <form>
                    <div class="generator__settings__configs-rangeBar">
                        <input type="number" id="widthPassword" min="4" max="24" value="4" />
                        <input type="range" id="rangePassword" min="4" max="24" value="4" />
                    </div>
                </form>
            </div>
        </div>
            <div class="generator__settings__configs-right">
                <form>
                    <input type="checkbox" onchange="generate()" id="configTopRegistr">
                    <label for="configTopRegistr">Верхний регистр</label><br />
                    <input type="checkbox" onchange="generate()" id="configNumbers">
                    <label for="configNumbers">Цифры</label><br />
                    <input type="checkbox" onchange="generate()" id="configSymbols">
                    <label for="configSymbols">Символы</label>
                </form>
            </div> 
        </div>
    </section>
</section>
<script src="script.js"></script>
</body>

</html>