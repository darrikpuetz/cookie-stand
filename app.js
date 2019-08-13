'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var oneandMain = {
  name: '1st and Main',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  randomCookHourly: [],
  randomCook: function() {
    var randomCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
    return Math.floor(randomCust * this.avgCookie);
    
  },
};

console.log(oneandMain.randomCook());

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  randomCookHourly: [],
  randomCook: function() {
    var randomCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
    return Math.floor(randomCust * this.avgCookie);
  },
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  randomCookHourly: [],
  randomCook: function() {
    var randomCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
    return Math.floor(randomCust * this.avgCookie);
  },
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  randomCookHourly: [],
  randomCook: function() {
    var randomCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
    return Math.floor(randomCust * this.avgCookie);
  },
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  randomCookHourly: [],
  randomCook: function() {
    var randomCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
    return Math.floor(randomCust * this.avgCookie);
  },
};

var stores = [oneandMain, seaTac, seattleCenter, capitolHill, alki];


for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 15; j++) {
    stores[i].randomCookHourly.push(stores[i].randomCook());
  }

  console.log(stores[i].randomCookHourly);
}

for (var k = 0; k < stores.length; k++) {
  var elListOne = document.getElementById ('storeList');
  var newList = document.createElement ('ul');
  newList.textContent = stores[k].name;
  elListOne.appendChild(newList);
  newList.id = stores[k].name;
   
  for (var h = 0; h < alki.randomCookHourly.length; h++) {
    if (h + 6 < 12) {
      var elListTwo = document.getElementById (stores[k].name);
      var newListCookie = document.createElement ('ul');
      newListCookie.textContent = h + 6 + 'am: ' + stores[k].randomCook();
      elListTwo.appendChild(newListCookie);
    }
    else if (h + 6 > 12) {
      elListTwo = document.getElementById (stores[k].name);
      newListCookie = document.createElement ('ul');
      newListCookie.textContent = h - 6 + 'pm: ' + stores[k].randomCook();
      elListTwo.appendChild(newListCookie);
    }
    else if (h === 12) {
      elListTwo = document.getElementById (stores[k].name);
      newListCookie = document.createElement ('ul');
      newListCookie.textContent = '12pm: ' + stores[k].randomCook();
      elListTwo.appendChild(newListCookie);

    }
  }
}
