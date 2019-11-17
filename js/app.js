'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Seattle = {

  customersNumber : 0 ,
  name : 'Seattle',
  min : 23 ,
  max : 65 ,
  avg : 6.3,
  cookies : 0 ,
  array : [] ,
  arrayTotal : 0 ,


  getNumber: function(min, max){
    for( var a = 0 ; a < workHours.length ; a++ ){
      this.customersNumber = randomNumber(min, max) ;
      this.cookies = Math.ceil(this.customersNumber * this.avg) ;
      this.array.push(this.cookies);
      this.arrayTotal= this.array[a] +this.arrayTotal ;

    }
  },

  render: function(){
    var container = document.getElementById('stores');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name ;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for ( var i = 0 ; i < workHours.length ; i++ ){
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';

    }
    var totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;


  }
};
Seattle.getNumber(23,65);
Seattle.render();

//  NUmber2222222

var Tokyo = {

    customersNumber : 0 ,
    name : 'Tokyo',
    min : 23 ,
    max : 65 ,
    avg : 6.3,
    cookies : 0 ,
    array : [] ,
    arrayTotal : 0 ,
  
  
    getNumber: function(min, max){
      for( var a = 0 ; a < workHours.length ; a++ ){
        this.customersNumber = randomNumber(min, max) ;
        this.cookies = Math.ceil(this.customersNumber * this.avg) ;
        this.array.push(this.cookies);
        this.arrayTotal= this.array[a] +this.arrayTotal ;
  
      }
    },
  
    render: function(){
      var container = document.getElementById('stores');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var h1El = document.createElement('h1');
      articleEl.appendChild(h1El);
      h1El.textContent = this.name ;
  
      var ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
  
      for ( var i = 0 ; i < workHours.length ; i++ ){
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';
  
      }
      var totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;
  
  
    }
  };
  Tokyo.getNumber(23,65);
  Tokyo.render();


  // 3333333333333333333333333333333333333333

  var Dubai = {

    customersNumber : 0 ,
    name : 'Dubai',
    min : 23 ,
    max : 65 ,
    avg : 6.3,
    cookies : 0 ,
    array : [] ,
    arrayTotal : 0 ,
  
  
    getNumber: function(min, max){
      for( var a = 0 ; a < workHours.length ; a++ ){
        this.customersNumber = randomNumber(min, max) ;
        this.cookies = Math.ceil(this.customersNumber * this.avg) ;
        this.array.push(this.cookies);
        this.arrayTotal= this.array[a] +this.arrayTotal ;
  
      }
    },
  
    render: function(){
      var container = document.getElementById('stores');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var h1El = document.createElement('h1');
      articleEl.appendChild(h1El);
      h1El.textContent = this.name ;
  
      var ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
  
      for ( var i = 0 ; i < workHours.length ; i++ ){
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';
  
      }
      var totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;
  
  
    }
  };
  Dubai.getNumber(23,65);
  Dubai.render();

  
  //4444444444444444444444444444444444

  var Paris = {

    customersNumber : 0 ,
    name : 'Paris',
    min : 23 ,
    max : 65 ,
    avg : 6.3,
    cookies : 0 ,
    array : [] ,
    arrayTotal : 0 ,
  
  
    getNumber: function(min, max){
      for( var a = 0 ; a < workHours.length ; a++ ){
        this.customersNumber = randomNumber(min, max) ;
        this.cookies = Math.ceil(this.customersNumber * this.avg) ;
        this.array.push(this.cookies);
        this.arrayTotal= this.array[a] +this.arrayTotal ;
  
      }
    },
  
    render: function(){
      var container = document.getElementById('stores');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var h1El = document.createElement('h1');
      articleEl.appendChild(h1El);
      h1El.textContent = this.name ;
  
      var ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
  
      for ( var i = 0 ; i < workHours.length ; i++ ){
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';
  
      }
      var totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;
  
  
    }
  };
  Paris.getNumber(23,65);
  Paris.render();



//55555555555555555555555

var Lima = {

    customersNumber : 0 ,
    name : 'Lima',
    min : 23 ,
    max : 65 ,
    avg : 6.3,
    cookies : 0 ,
    array : [] ,
    arrayTotal : 0 ,
  
  
    getNumber: function(min, max){
      for( var a = 0 ; a < workHours.length ; a++ ){
        this.customersNumber = randomNumber(min, max) ;
        this.cookies = Math.ceil(this.customersNumber * this.avg) ;
        this.array.push(this.cookies);
        this.arrayTotal= this.array[a] +this.arrayTotal ;
  
      }
    },
  
    render: function(){
      var container = document.getElementById('stores');
      var articleEl = document.createElement('article');
      container.appendChild(articleEl);
      var h1El = document.createElement('h1');
      articleEl.appendChild(h1El);
      h1El.textContent = this.name ;
  
      var ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
  
      for ( var i = 0 ; i < workHours.length ; i++ ){
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = workHours[i] +' ' + this.array[i] + ' cookies ';
  
      }
      var totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = 'Total: ' + this.arrayTotal + ' cookies ' ;
  
  
    }
  };
  Lima.getNumber(23,65);
  Lima.render();







// console.table(Seattle);
// console.log(Seattle.array);
