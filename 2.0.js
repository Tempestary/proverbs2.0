var partOne = ["Ученье свет",
               "Баба с возу",
               "Бабы каются",
               "Тише едешь",
               "Беда не приходит одна",
               "Седина в бороду",
               "С волками жить",
               "Не так страшен чёрт",
               "Семь раз отмерь",
               "На бога надейся",
               "В тихом омуте черти водятся",
               "Береги платье снову",
               "Готовь сани летом",
               "Была бы шея",
               "Был бы конь",
               "В гостях хорошо",
               "Яблоко от яблони недалеко падает",
               "У страха глаза велики",
               "Работа не волк",
               "Слово — не воробей",
               "Во дворе трава",
               "Дал бог зайку"
              ];
var partTwo = ["темнота - друг молодежи",
               "девки замуж собираются",
               "там хоть трава не расти",
               "честь — смолоду",
               "волки сыты",
               "аппетит приходит во время еды",
               "в сорок пять баба ягодка опять",
               "бабка надвое сказала",
               "кобыле легче",
               "большому куску и рот рад",
               "дуракам закон не писан",
               "семеро одного не ждут",
               "попытка - не пытка",
               "пьяному море по колено",
               "своя рубашка ближе к телу",
               "быстро только кошки родятся",
               "сытое брюхо к учению глухо",
               "у семи нянек дитя без глазу",
               "гусь свинье не товарищ",
               "в тихом омуте черти водятся",
               "баба и чёрта перехитрит",
               "волка ноги кормят",
               "на воре и шапка горит"
              ];
var partThree = [ ", а "]
function mix(x,y,z) {
var randIndexOne=Math.floor(Math.random(0,x.length)*x.length);
var randIndexTwo=Math.floor(Math.random(0,y.length)*y.length);
//var randIndexThree=Math.floor(Math.random(0,z.length)*z.length);
var phraseOne=x[randIndexOne];
var phraseTwo=y[randIndexTwo];
var phraseThree=z[0];
var saySmth=phraseOne + phraseThree + phraseTwo;
//var beautyPattern= /\s+([^\s]+)\s+\1\s+/;

    //return saySmth.replace(beautyPattern, ' $1 ');
   // console.log(phraseOne,"+", phraseThree, "+", phraseTwo);
    return saySmth;
}


console.log(mix(partOne,partTwo,partThree));
