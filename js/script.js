 'use strict;'
 var test = {
    title: "Тест по программированию",
    questions: ["Год выхода стандарта ES6:","Какие символы обозначают начало и конец шаблона?","С помощью какого цикла мы сможем обойти все поля объекта?"],
    answers : [["2016;","2015;","2014;"],
    ["<...>;","{{...}};","<%...%>;"],
    ["do while;","for in;","for;"]],
    right:[1,2,1],
  }
  
  var str_ls = JSON.stringify(test);
  
  localStorage.setItem("str", str_ls);

  
  str_ls = localStorage.getItem("str");
  console.log(str_ls);
  var test1 = JSON.parse(str_ls)
  console.log(test1);
  
  $(function(){
    var results = document.getElementById("results");
    results.innerHTML = tmpl("test_tmpl", test1);
  });


