//var a = 21, b = 654565465166
//console.log (  a * b  );
//alert ( " Hello, Котик " );
//confirm ( " Message " );
//prompt ( " Message " );
//var a = parseInt (prompt());
//if ( 3===19 ){
 //   alert ( " you are welcome " );
//}else{

//}

// var monthYear = parseInt ( prompt ("введите номер месяца"));
//if ( userAge  >=18){
//    console.log ("Hello");
//} else{
//    console.log ("Off");
//}
// if (monthYear === 1){
    // console.log ( " January " );
// } else if (monthYear === 2){
//    console.log ( "February" );
// } else if (monthYear === 3){
    // console.log ( "March" );
// } else if (monthYear === 4){
    // console.log ( "April" );
// } else if (monthYear === 5){
    // console.log ( "May" );
// } else if (monthYear === 6){
    // console.log ( "June" );
// } else if (monthYear === 7){
//    console.log ( "July" );
// } else if (monthYear === 8){
    // console.log ( "August" );
//  } else if (monthYear === 9){
    // console.log ( "September" );
//  } else if (monthYear === 10){
    // console.log ( "October" );
//  } else if (monthYear === 11){
    // console.log ( "November" );
//  } else if (monthYear === 12){
    // console.log ( "December" );
//  } else {
    // alert ();
//  } 

// switch (monthYear){
    // case 1:
        // console.log ( " january " );
    // case 2:
        // console.log ( " february" );
    // case 3:
        // console.log ( " march " );
    // case 4:
        // console.log ( " april " );
    // case 5:
        // console.log ( " may ");
    // case 6:
        // console.log ( " june ");
    // case 7:
        // console.log ( " july ");
    // case 8:
        // console.log ( "august");
    // case 9:
        // console.log (" september");
    // case 10:
        // console.log ( " october ");
    // case 11:
        // console.log ("november");
    // case 12:
        // console.log ("december");
    
// }

/*var previousMonthDay = parseInt (prompt("показатель за прошлый месяц, День"))
var previousMonthNight = parseInt (prompt("показатель за прошлый месяц, Ночь"))
var initialMonthDay = parseInt (prompt("показатель за прошлый месяц, День"))
var initialMonthNight = parseInt (prompt("показатель за прошлый месяц, Ночь"))

var originalDay = initialMonthDay - previousMonthDay;
var originalNight = initialMonthNight - previousMonthNight;

if ( originalDay < 100 ){
    console.log (originalDay*0.456 + (originalNight*0.456)/50);
} else if ( originalDay < 600) {
    console.log (originalDay*0.789 + (originalNight*0.789)/50);
} else if ( originalDay > 600 ) {
    console.log (originalDay*1.479 + (originalNight*1.479)/50);
} else {
    console.log ( "Eror404" );
}
*/
 /*var a = parseInt( promt ("enter a"));
 var b = parseInt( promt ("enter b"));   
 var c = parseInt( promt ("enter a*c"));

 if (a*b == c){
     console.log("true");
 } else {
     console.log("false");
 }
 */



/*var a = parseInt( prompt ("enter a"));
var b = parseInt( prompt ("enter b"));   
var c = parseInt( prompt ("enter a*c"));

if (b*b - 4 * a * c > 0){
    x1 = 
    x2
}
*/



/*var step = 1
while ( step <= 100){
    if ( step % 2 == 0 ){
        alert ( step );
    }else{

    }
    step++;
}
*/

    //Число 12345 а затем 54321

/*for ( var i = 2; i<100 ; i+=2){
    console.log ( "Крок №" + i );
}
*/

/*var a = +prompt("a ?");
var b = +prompt("b ?");
var amount = 0;

for ( var i = a; i<=b; i++){
    amount+=i;
}
console.log (amount);*/


/*var a1 = parseInt( prompt ("enter a")); 
var step = parseInt( prompt ("enter b"));   
var number = parseInt( prompt ("enter c"));
for ( var i=1; i<=number; i++){
    a1+=step;
}
console.log (a1);*/

/*var n = +prompt("n ?");
var result = 1;

for (var i = 1; i<=n; i++ )
    result*=i;
console.log(result);*/
/*var i=0;
var a=+(prompt("Кто помогал рыцарю облачаться в тяжелые доспехи? \n 1. Кучер \n 2. Оруженосец \n 3. Дворецкий \n 4. Лакей \n"));
if ( a==2) {
    alert ("Ваш Ответ правильный!");
    i++;
    a=+(prompt("Как называется место в пустыне, где есть вода и растительность? \n 1. Оазис \n 2. Пальмовая роща \n 3. Рай \n 4. Мираж \n"));
    if (a==1) {
        alert ("Ваш Ответ правильный!");
        i++;
    }else{
        alert ("Ваш ответ Неверный");
    }
} 
else {
alert ("Ваш ответ Неверный");
}*/

/*do{
var correctPas =+ (prompt("password"));
} while (correctPas !=1286);
alert ("Ura");*/

/*function Summa (a, b) {
    return a+b;
}

function Minus (a, b) {
    return a-b;
}
function Umnoz (a, b) {
    return a*b;
}
function Delit (a, b) {
    return a+b;
}*/




/*var a = parseInt (prompt("Введите число А"));
var b = parseInt (prompt("Введите число B"));

console.log (Summa(a, b));
console.log (Minus(a, b));
console.log (Umnoz(a, b));
console.log (Delit(a, b));
*/


/*function Fac (n){
    if (n==0)
        return 1;
    return n*Fac(n-1);
}*/

/*var list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for ( var i=0; i<list.length; i++){
    console.log (list[i]);
}*/

/*var arr = [3,2,5,6];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);*/

// var arr = [3,2,5,6];
// function arraySum(array){
// var sum = 0;
//     for(var i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }
// console.log (arraySum(arr));

// var arr = [3,2,5,6];
// function arraySum(array){
// var sum = 0;
//     for(var i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// console.log (arraySum(arr));

// var arr = [3,2,5,6];
// function min(a){
// var min = a[0];
//     for(var i = 0; i < arr.length; i++){
//         if ( a[i]<min){
//             min = a[i];
//         }
//     }
//     return min;
// }
// console.log(min(arr));



// var arr=[1, 2, 3, 4, 5];
// function html(a) {
//     for( var i=0; i<a.length; i++) {
//         document.write (a[i]+"<br/>");
//     }
// }
// html(arr);

// var arr = [7, 18, 3, 6, 0];
// var index = -1; /*номер ячейки где находиться элемент*/
// var findMe=0;
// for ( var i=0; i<arr.length; i++){
//     if ( arr[i]===findMe){
//         index=i;
//         break;
//     }
// }
// console.log (index);

/*функция поиска в массиве*/
// function find ( arr, findMe){
//     for ( var i=0; i<arr.length; i++) {
//         if ( arr[i]===findMe){
//             return i;
//         }
//     }
//     return -1;
// }

/*бинарный поиск*/
// var arr = [7, 12, 46, 53, 71, 72, 80];
// function binSearch (arr, findMe) {
//     var left = 0;
//     var right = arr.length - 1;
//     var middle = (left+right)/2;
//     while (left <= right) {
//         if (findMe>middle) {
//             left=middle+1;
//         }
//         else if (findMe<middle) {
//             right=middle-1;
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }
// console.log(binSearch(arr, 71));

/*Обработка событий на экране*/
// function buttonClicked () {
//     alert ("clicked");
// }

