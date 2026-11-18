// 1)Log da “Hello world” yazısını çıxarın
// 2)Adınızın mənimsədildiyi sabit dıyişən təyin edin bunun dəyərini log da göstərin
// 3)Bu adlardan hansının hansı səbəbdən istifadə oluna biləcəyini göstərin.Birdən çox variant seçin.
// 2user
// c@rt
// person
// title color
// console
// $add
// 4)İstifadəçidən ad,soyadını alıb log-a verin

// console.log("Hello world");
// const name = "Elnure";
// console.log(name);

// let names = "Elnure";
// let lastName= "Necefova";
// console.log("Adiniz: "+names+" Soyadiniz: "+lastName);

// 1)
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// let bookPrice = 750;
// let bookAmount = 14;
// let totalPrice= bookPrice*bookAmount;
// console.log("Umumi mebleg: "+totalPrice)

// 2)Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

// let kmhSpeed = 75;
// let msSpeed = kmhSpeed / 3.6;
// console.log(msSpeed);

// 3)İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığıgünlərin sayını göstərən proqram yazın.

// let date=2026;
// let userDate=2002;
// console.log("Istifadecinin dogum ili: "+(date-userDate));

// 4)Ədədlər üzərində əməliyyatları yerinə yetirin.num dəyişənində iki rəqəmli ədəd saxlanılır.
// Konsola çıxaran belə proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// let num = 25;
// console.log("Num: "+num**5)
// console.log("Num: "+num%3);

// 5) Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// let firstName = "Elnure ";
// let lastName= "Necefova\n";
// console.log("Sizin adiniz: "+ firstName+lastName+ "Tanışlığımıza çox şadam!");

// 6)

// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

// let firstName = "Elnure ";
// let lastName= "Necefova\n";
// console.log( "Sizi bir daha görməyimizə şadıq,"+ firstName+lastName);

// 7)

// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.

// let fullName = "Murad Orucov"
// let fullName = "Murad Orucov";
// console.log(fullName.length);

// 8)

// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// let firstName = "Elnure ";
// let lastName= "Necefova";
// console.log(firstName.charAt(0)+"\n" + lastName.charAt(0));
// let fullName= firstName.split(" ")+ lastName.split(" ");
// console.log(fullName);

// 9)

// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// 10)

// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// 11)

// İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.

// 12) +

// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın

// let a = 12345;
// let b = 98765;
// let result = a*b;
// result=result.toString();
// console.log(result[2]);

// 13) +

// Əməliyyatların nəticəsini müəyyənləşdirin.

//     "" + 1 + 0 = "10"

//     "" - 1 + 0 = -1

//     "true" - false = NaN

//     6 / "3" = 2

//     4 + 5 + "px" = 9px

//     "$" + 4 +5 =   $45

//     "4" - 2 =2

//     "4px" - 2 + "px" = NaNpx

//     7 / 0 = infinity

//     "-9" + 5 = =95

//     "-9" - 5 = -14

//     null + 1 = 1

//     undefined + 1 = NaN

// 14) +

// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let number = prompt("4 reqemli eded daxil edin: ");
// let newNumber = number.split("");

// let result = Number(newNumber[0])+Number(newNumber[1])+Number(newNumber[2])+Number(newNumber[3]);
// console.log(result)

// 15)+
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let fullName =prompt("Adinizi ve soyadinizi daxil edin");
// let  name = fullName.split(" ");
// console.log("Salam "+name[0] + "!");

// 16) +

// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let number = "530.90";
// let text = number.split(".");
// console.log(text[0]+ " manat "+ text[1]+ " qepik")

// 17) +

// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.

// let salary = prompt("Emek haqqini daxil edin: ")
// salary1=salary*0.13;
// console.log(salary-salary1);

// 18) +

// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName = "Necefova Elnure Necef";
// let char = fullName.split(" ");
// let result = char[0] + " " + char[1][0] + "." + char[2][0] + ".";
// console.log(result);

// 19) +

// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.

// let value = 50;
// value>20;
// value<6;
// value==10;
// value!=60;
// value>=50;

// 20)+

// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.

// let age=prompt("Yasinizi daxil edin: ")
// if(age<18){
//     console.log("Access denied");
// }
// else{
//     console.log("Access granted");
// }

// 21)+
// Üç ədədin ortancılını tapmaq üçün proqram yazın.İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
// "45 46 47"
// "47 46 45"
// "46 45 47"
// "46 47 45"

// let array = prompt("3 ferqli ikireqemli eded daxil edin:");
// array = array.split(" ");
// let a = Number(array[0]);
// let b = Number(array[1]);
// let c = Number(array[2]);

// if(a.length!= 2 || b.length!=2 || c.length!=2){
//     console.log("Xeta")
// }
// else if (a == b || b == c || a == c) {
//     console.log("Xeta" );
// }
// else if (a > b && a < c || a < b && a > c) {
//     console.log(a);
// }
// else if (b > a && b < c || b < a && b > c) {
//     console.log(b);
// }
// else{
// console.log(c);
// }

// 22)+

// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.
// let il = prompt("Ili daxil edin: ") ;
// if(il%4==0){
//     console.log("Il uzundur");
// }
// else{
//     console.log("Il uzun il deyil");
// }

// 23)+

// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let gender =prompt("Genderi daxil edin: ");
// if(gender==="M"){
//     gender ="male";
// }
// else if(gender==="F"){
// gender="female";
// }
// else{
//     gender = "Yanlis secim";
// }
// console.log(gender)

// 1-50 qeder sade murekkeb eded tapilmasi

// let sadeSay = 0;
// let murekkebSay = 0;

// for (let i = 3; i <= 50; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       murekkebSay++;
//       break;
//     } else {
//       sadeSay++;
//     }
//   }
//   console.log(i);
//   console.log("Sade say: " + sadeSay);
//   console.log("Murekkeb say: " + murekkebSay);
// }



//////////////////////////////////////FOR//////////////////

// 1) +

// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.

// let number = Number(prompt("Eded daxil edin: "));
// let length = number.length;

// for (let i = 0; number < 100;) {
//     number = number + 7;
//         console.log(number);
// }

// 2) +
// Konsola N dəfə «I know how to use cycles» mesajı  yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let n=Number(prompt("Eded daxil edin: "));
// let length=n.length;

// for (let i = 0; i < n; i++) {
//   console.log("I know how to use cycles");
// }

// 3) +
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// for (let i = 99; i < 999; i++) {
//   if(i%10==0){
//     console.log(i);
//   }
// }


// 4) +

// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let sum=0;
// for(let i=11;i<100;i++){
// if(i%2!=0){
//   sum+=i;
//   console.log(i)
// }
// }

// 5)+

// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.

// let number = Number(prompt("Eded daxil edin: "));
// let sum=0;
// for (let i = 100; i <= 999; i++) {
//     if(i%number==0){
//      sum+=i;
//     }
// }
//     console.log(sum)



// 6) +
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// let n = Number(prompt("Eded daxil edin: "));

// for (let i = n; i >= 2; i--) {
//     let count = 0;

//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         console.log(i);
//     }
// }


// 7) +

// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.
// let hasil =1;
// for (let i = 1;i< 10; i++) {
//   hasil=hasil*i;
//   console.log(hasil)
// }

// 8)+

// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let text=prompt("Text daxil edin: ");
//  let result=text.split("").reverse(text);
//  console.log(result);

// 9)+

// Mətndə "." simvolunun ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.
// let text=prompt("Text daxil edin: ");
// console.log(text.indexOf("."));

// 10)+

// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.
// let text=prompt("Text daxil edin: ");
// let result = text.split("");
// console.log(typeof result)
// let countNum=0;
// let countText=0;
// console.log(result);
// for (let i = 0; i < result.length; i++) {
//     if(result[i] >= "0" && result[i] <= "9"){
//     countNum++;
// }
// else{
// countText++;
// }
// }
// console.log("Reqem sayi: "+ countNum);
// console.log("Text sayi: "+ countText);

///////////////////////////////////////////////////////////////////
// HTML KOD
// <h1>GeForce 20</h1>
// <ul>
//   <li>GTX 1650</li>
//   <li>GTX 1660</li>
//   <li class="primary">GTX 1660 Ti</li>
//   <li>RTX 2070</li>
//   <li>RTX 2080</li>
//   <li class="primary">RTX 2080 Ti</li>
// </ul>



// 1)

// HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.
console.log(document.querySelector("li"))


// 2)

// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .
console.log(document.querySelector("h1").remove);
let li = document.createElement("li");
li.textContent = "TITAN RTX";
document.querySelector("ul").appendChild(li);

// 3)

// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - başlıq mətnini «GeForce 20 Series» -a;
// - fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// document.querySelector("h1").textContent("GeForce 20 Series");
// let elements = document.querySelectorAll(".primary");
// elements.style

// 4)

// HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

console.log(document.querySelectorAll(".primary"));


