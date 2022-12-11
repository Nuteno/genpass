<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>passGener</title>
</head>

<body>
<div class="container">  
    <!-- top Text -->
    <section class="topText">
        <div class="headText"></div>
            <h1>Генератор безопасных паролей</h1>
            <p class="descript">Используйте этот онлайн генератор паролей, что бы мгновенно создать безопасный случайный
                пароль.</p>
        </div>
    </section>
    <!-- Form for Password -->
    <section class="formPassword">
        <div class="formPass">
            <form>
                <input type="text" id="passwordGenerator" class="formCustom">
            </form>
        </div>
    </section>
    <!-- Configure Password -->
    <section class="configureFormPass">
        <div class="descTop">
            <h2>Настройте свой пароль</h2>
        </div>
        <div class="configurePass">
            <div class="configLeft">
                <form>
                    <div class="rangeBar">
                        <input type="number" id="widthPassword" min="4" max="24" value="4" />
                        <input type="range" id="rangePassword" min="4" max="24" value="4" />
                    </div>
                </form>
            </div>
        </div>
    
            <!-- <div class="configCenter"> -->
                <!-- <form>
                    <input type="radio" id="passEasy">
                    <label for="passEasy">Легко сказать</label><br />
                    <input type="radio" id="passEasyRead">
                    <label for="passEasyRead">Легко читается</label><br />
                    <input type="radio" id="passAllSymbols">
                    <label for="passAllSymbols">Все символы</label>
                </form> -->
            <!-- </div> -->
            <div class="configRight">
                <form>
                    <!-- <input type="checkbox" id="configTopRegistr">
                    <label for="configTopRegistr">Верхний регистр</label><br /> -->
                    <input type="checkbox" id="configBotRegistr" checked>
                    <label for="configBotRegistr">Нижний регистр</label><br />
                    <input type="checkbox" id="configNumbers">
                    <label for="configNumbers">Цифры</label><br />
                    <input type="checkbox" id="configSymbols">
                    <label for="configSymbols">Символы</label>
                </form>
            </div> 
        </div>
    </section>
</section>
</div>
<script src="script.js"></script>
</body>

</html>