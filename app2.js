var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var places = [];

function Stores(whichPlace, minCust, maxCust, averageCook) {
  this.whichPlace = whichPlace;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCook = averageCook;
  this.hourlyCook = [];
  this.dailyCook = 0;
  places.push(this);

  this.cookCount = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.hourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCook.push(Math.floor(this.averageCook * this.cookCount()));
      this.dailyCook += this.hourlyCook[i];
    }
  };
  this.printOut = function() {
    this.hourlySales();

    var row = document.createElement('tr');
    var place = document.createElement('th');
    place.textContent = this.whichPlace;
    row.appendChild(place);

    for(var i = 0; i < hours.length; i++){
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlyCook[i];
      row.appendChild(numCookie);
      andChairs.appendChild(row);
    }
    var totalCookie = document.createElement('td');
    totalCookie.setAttribute('class', 'total');
    totalCookie.textContent = this.dailyCook;
    row.appendChild(totalCookie);
    andChairs.appendChild(row);
  };
};
var oneAndMain = new Stores('1st and Main', 23, 65, 6.3);
var seaTac = new Stores('SeaTac Airport', 3, 24, 4.2);
var seattleCenter = new Stores('Seattle Center', 11, 38, 4.7);
var capitolHill = new Stores('Capitol Hill', 23, 65, 6.3);
var alki = new Stores('Alki', 2, 16, 4.6);

var elTable = document.getElementById ('saleTable');


var andChairs = document.createElement('table');
var headerRow = document.createElement('thead');


var emptyCell = document.createElement('td');
headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = hours[i]; //Source: https://www.w3schools.com/js/js_htmldom_html.asp
  headerRow.appendChild(td);
};

var dailyCook = document.createElement('th');
dailyCook.textContent = 'Total';

headerRow.appendChild(dailyCook);

andChairs.appendChild(headerRow);

function printOutPlaces(){
  for (var i = 0; i < places.length; i++) {
    places[i].printOut();
  }
}
printOutPlaces();
elTable.appendChild(andChairs);

var newStore = document.getElementById('newStoreAdded')
var eventForm = function(event) {
  event.preventDefault();

var place = event.target.place.value;
var minimum = event.target.minimum.value;
var maximum = event.target.maximim.value;
var average = event.target.average.value;

var newStoreAdded = new Stores(places, minimum, maximum, average);

places.push(newStoreAdded);
newStore.printOut();

};

newStore.addEventListener('submit', eventForm);

// var form = document.getElementById('newstore');
// var Event = function(formEvent) {
//   formEvent.preventDefault();

//   if(event.target.location.value) {
//     return 
// }

// var store = event.target.store.value;
// var minCook = event.target.minCook.value;
// var maxCook = event.target.maxCook.value;
// var avgCook = event.target.avgCook.value;



// var form = document.getElementById('sample_form');
// var table = document.getElementById('student_table');
// var data = []

// function UserFeedback(first, last, status, future, plans) {
//   this.first = first;
//   this.last = last;
//   this.enrolled = status;
//   this.future_classes = plans;
// }

// function formData(event) {
//   event.preventDefault();

//   var first = event.target.first.value;
//   var last = event.target.last.value;
//   var enrolled = event.target.enrolled.checked;
//   var futureClasses = event.target.future_classes.value;
  
//   data.push(new UserFeedback(first, last, enrolled, futureClasses));

//   createTable();
//   form.reset();
//   console.log('History of data');
// }

// function createTable() {
//   var row;

//   for ( var i = 0; i < data.length; i++) {
//     row = document.createElement('tr');
//     row.innerHTML = '<td>' + data[i].first +'</td>' + '<td>' + data[i].last + '</td>' + '<td>' + data[i].enrolled + '</td>' + '<td>' + data[i].futureClasses + '</td>';
//   }

//   table.appendChild(row);

//   form.addEventListener('submit', formData);
// }
