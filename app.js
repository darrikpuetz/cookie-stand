var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var places = [];

function Stores(whichPlace, minCust, maxCust, averageCook) {
  this.whichPlace = whichPlace;
  this.minCust = minCust;
  this.maxCust =  maxCust;
  this.averageCook = averageCook;
  this.hourlyCook = [];
  this.dailyCook = 0;
  places.push(this);

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.calcHourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCook.push(Math.floor(this.averageCook * this.custCalc()));
      this.dailyCook += this.hourlyCook[i];
    }
  };
  this.prinOut = function() {
    this.calcHourlySales();

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


var andChairs = document.createElement('table');
var headerRow = document.createElement('thead');

var emptyCell = document.createElement('td');
emptyCell.setAttribute('class', 'empty');
headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');

  td.setAttribute('class', 'cell');
  td.setAttribute('class', 'hours');

  td.innerHTML = hours[i]; //Source: https://www.w3schools.com/js/js_htmldom_html.asp
  headerRow.appendChild(td);
};

var dailyCook = document.createElement('th');
dailyCook.textContent = 'Total';

headerRow.appendChild(dailyCook);

andChairs.appendChild(headerRow);

function printOutPlaces(){
  for (var i = 0; i < places.length; i++) {
    places[i].prinOut();
  }
}
printOutPlaces();
document.body.appendChild(andChairs);
