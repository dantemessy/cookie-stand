'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shopNames = [];
var theForm = document.getElementById('shopsForm');

var container = document.getElementById('stores');
var articleEl = document.createElement('article');
container.appendChild(articleEl);
var tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

//start lab 07

function Shop(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.array = [];
  this.customersNumber = 0;
  this.cookies = 0;
  this.arrayTotal = 0;
  shopNames.push(this);
  // this.randomNumber();
  this.getNumber();
}
Shop.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
};
Shop.prototype.getNumber = function () {
  for (var a = 0; a < workHours.length; a++) {
    this.customersNumber = this.randomNumber();
    this.cookies = Math.ceil(this.customersNumber * this.avg);
    this.array.push(this.cookies);
    this.arrayTotal += this.array[a];
  }
};

// Shop.prototype.render = function () {

//   var container = document.getElementById('stores');
//   var articleEl = document.createElement('article');
//   container.appendChild(articleEl);
//   var tableEl = document.createElement('table');
//   articleEl.appendChild(tableEl);
//   var trEl = document.createElement('tr');
//   tableEl.appendChild(trEl);

// };
Shop.prototype.header = function () {

  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdeEl = document.createElement('th');
  trEl.appendChild(tdeEl);
  tdeEl.textContent = ' ';
  for (let i = 0; i < workHours.length; i++) {

    var thEl = document.createElement('th');
    thEl.textContent = workHours[i];
    trEl.appendChild(thEl);
  }
  var tdeEl1 = document.createElement('th');
  trEl.appendChild(tdeEl1);
  tdeEl1.textContent = 'Total';

};


Shop.prototype.tableData = function () {

  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  trEl.textContent = this.name ;
  for ( var i = 0 ; i < this.array.length ; i++){
    var tdrEl = document.createElement('td');
    trEl.appendChild(tdrEl);
    tdrEl.textContent = this.array[i];
  }
  var tdtoEl = document.createElement('td');
  trEl.appendChild(tdtoEl);
  tdtoEl.textContent = this.arrayTotal ;


};
Shop.prototype.footer = function () {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdtotalEl = document.createElement('td');
  trEl.appendChild(tdtotalEl);
  tdtotalEl.textContent = 'Total';
  var megaTotal = 0 ;
  for (let i = 0; i < workHours.length; i++) {
    var sum = 0 ;
    for ( var j = 0 ; j < shopNames.length ; j ++){
      sum += shopNames[j].array[i];
    }
    megaTotal += sum ;
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = sum;
  }

  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = megaTotal;


};


var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('tokyo', 3, 24, 1.2);
var dubai = new Shop('dubai', 11, 38, 3.7);
var paris = new Shop('paris', 20, 38, 2.3);
var lima = new Shop('lima', 2, 16, 4.6);

// for (let i = 0; i < shopNames.length; i++) {

//   shopNames[i].randomNumber();
//   shopNames[i].getNumber();
//   // shopNames[i].render();
// }

Shop.prototype.header();
seattle.tableData();
tokyo.tableData();
dubai.tableData();
paris.tableData();
lima.tableData();
Shop.prototype.footer();



theForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = event.target.name.value ;
  var min = event.target.min.value ;
  var max = event.target.max.value ;
  var avg = event.target.avg.value ;
  var newShop = new Shop(name,min,max,avg);

  var rowCount = tableEl.rows.length;
  tableEl.deleteRow(rowCount-1);
  newShop.tableData();
  newShop.footer();


});

// console.log(shopNames);



// seattle.randomNumber();
// seattle.getNumber();
// seattle.render();
// dubai.randomNumber();
// dubai.getNumber();
// dubai.render();



// console.log(seattle.array);
// console.log(seattle.cookies);
// console.log(seattle);

// Shop.getNumber(23,65);
// console.log(Shop);

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var Seattle = {

//   customersNumber : 0 ,
//   name : 'Seattle',
//   min : 23 ,
//   max : 65 ,
//   avg : 6.3,
//   cookies : 0 ,
//   array : [] ,
//   arrayTotal : 0 ,


//   getNumber: function(min, max){
//     for( var a = 0 ; a < workHours.length ; a++ ){
//       this.customersNumber = randomNumber(min, max) ;
//       this.cookies = Math.ceil(this.customersNumber * this.avg) ;
//       this.array.push(this.cookies);
//       this.arrayTotal += this.array[a] ;

//     }
//   },

//   render: function(){
//     var container = document.getElementById('stores');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name ;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for ( var i = 0 ; i < workHours.length ; i++ ){
//       var liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

//     }
//     var totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


//   }
// };
// Seattle.getNumber(23,65);
// Seattle.render();
// console.table(Seattle);

// //  NUmber2222222

// var Tokyo = {

//   customersNumber : 0 ,
//   name : 'Tokyo',
//   min : 3 ,
//   max : 24 ,
//   avg : 1.2 ,
//   cookies : 0 ,
//   array : [] ,
//   arrayTotal : 0 ,


//   getNumber: function(min, max){
//     for( var a = 0 ; a < workHours.length ; a++ ){
//       this.customersNumber = randomNumber(min, max) ;
//       this.cookies = Math.ceil(this.customersNumber * this.avg) ;
//       this.array.push(this.cookies);
//       this.arrayTotal= this.array[a] +this.arrayTotal ;

//     }
//   },

//   render: function(){
//     var container = document.getElementById('stores');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name ;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for ( var i = 0 ; i < workHours.length ; i++ ){
//       var liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

//     }
//     var totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


//   }
// };
// Tokyo.getNumber(3,24);
// Tokyo.render();



// // 3333333333333333333333333333333333333333

// var Dubai = {

//   customersNumber : 0 ,
//   name : 'Dubai',
//   min : 11 ,
//   max : 38 ,
//   avg : 6.3,
//   cookies : 0 ,
//   array : [] ,
//   arrayTotal : 0 ,


//   getNumber: function(min, max){
//     for( var a = 0 ; a < workHours.length ; a++ ){
//       this.customersNumber = randomNumber(min, max) ;
//       this.cookies = Math.ceil(this.customersNumber * this.avg) ;
//       this.array.push(this.cookies);
//       this.arrayTotal= this.array[a] +this.arrayTotal ;

//     }
//   },

//   render: function(){
//     var container = document.getElementById('stores');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name ;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for ( var i = 0 ; i < workHours.length ; i++ ){
//       var liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

//     }
//     var totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


//   }
// };
// Dubai.getNumber(11,38);
// Dubai.render();


// //4444444444444444444444444444444444

// var Paris = {

//   customersNumber : 0 ,
//   name : 'Paris',
//   min : 20 ,
//   max : 38 ,
//   avg : 2.3,
//   cookies : 0 ,
//   array : [] ,
//   arrayTotal : 0 ,


//   getNumber: function(min, max){
//     for( var a = 0 ; a < workHours.length ; a++ ){
//       this.customersNumber = randomNumber(min, max) ;
//       this.cookies = Math.ceil(this.customersNumber * this.avg) ;
//       this.array.push(this.cookies);
//       this.arrayTotal= this.array[a] +this.arrayTotal ;

//     }
//   },

//   render: function(){
//     var container = document.getElementById('stores');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name ;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for ( var i = 0 ; i < workHours.length ; i++ ){
//       var liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

//     }
//     var totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


//   }
// };
// Paris.getNumber(20,38);
// Paris.render();



// //55555555555555555555555

// var Lima = {

//   customersNumber : 0 ,
//   name : 'Lima',
//   min : 2 ,
//   max : 16 ,
//   avg : 4.6 ,
//   cookies : 0 ,
//   array : [] ,
//   arrayTotal : 0 ,


//   getNumber: function(min, max){
//     for( var a = 0 ; a < workHours.length ; a++ ){
//       this.customersNumber = randomNumber(min, max) ;
//       this.cookies = Math.ceil(this.customersNumber * this.avg) ;
//       this.array.push(this.cookies);
//       this.arrayTotal= this.array[a] +this.arrayTotal ;

//     }
//   },

//   render: function(){
//     var container = document.getElementById('stores');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name ;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for ( var i = 0 ; i < workHours.length ; i++ ){
//       var liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

//     }
//     var totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


//   }
// };
// Lima.getNumber(2,16);
// Lima.render();







// console.table(Seattle);
// console.log(Seattle.array);
//rhe e e e
