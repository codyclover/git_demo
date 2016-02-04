var hours = ['10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('South Center', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alkiBeach = new Store('Alki Beach', 3, 24, 2.6);
var siteNameEl = document.getElementById('mainSection');

var btnEl = document.getElementById('submit');
var nameInput = document.getElementById('storeName');
var minInput = document.getElementById('storeMin');
var maxInput = document.getElementById('storeMax');
var averageInput = document.getElementById('averageCookies');

btnEl.addEventListener('click', function(event) {
  event.preventDefault();
  var getName = nameInput.value;
  var getMin = minInput.value;
  var getMax = maxInput.value;
  var getAverage = averageInput.value;
  var userStore = new Store(getName, getMin, getMax, getAverage);
  userStore.render();
});

function Store(name, min, max, averageCookies) {
  this.store = name;
  this.min = min;
  this.max = max;
  this.averageSales = averageCookies;
  this.totalSales = 0;
  this.cookiesPerHour = [];
  this.randomCookies = function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  };
this.generateHourlyCookies = function() {
  for(var i = 0; i < hours.length; i += 1) {
    var rand = this.randomCookies();
    this.cookiesPerHour.push(rand);
    this.totalSales += rand;
  };
};

this.render = function() {
  this.generateHourlyCookies();
  var ulEl = document.createElement('tr');
  ulEl.textContent = this.store;
  var totesMaGoats = document.createElement('td');
  totesMaGoats.innerHTML = 'Total: ' + this.totalSales;

for(i = 0; i < hours.length; i += 1) {
  var liEl = document.createElement('td');
  liEl.textContent = this.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  siteNameEl.appendChild(ulEl);
};
ulEl.appendChild(totesMaGoats);
  };
};

headerGenerator = function () {
  var tHeader = document.createElement('tr');
  tHeader.innerHTML = 'Stores';
    for (i = 0; i < hours.length; i += 1) {
    var tHours = document.createElement('td');
    tHours.innerHTML = hours[i];
    tHeader.appendChild(tHours)
    siteNameEl.appendChild(tHeader);
  };
};

headerGenerator();
pikePlace.render();
seaTac.render();
southCenter.render();
bellevueSquare.render();
alkiBeach.render();










// var pikePlace = {
//   min: 17,
//   max: 88,
//   averageSales: 5.2,
//   cookiesPerHour: [ ],
//   totalSales: 0,
//   randomCookies: function() {
//     return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
//   }
// };
//
//
//
// pikePlace.generateHourlyCookies =function(name) {
//   for (var i = 0; i < hours.length; i++) {
//     var rand = name.randomCookies()
//     name.cookiesPerHour.push(rand);
//     name.totalSales += rand;
//   }
// };
//
// pikePlace.render = function(name) {
//   name.generateHourlyCookies(name);
//   var siteNameEl = document.getElementById('pikePlace');
//   siteNameEl.textcontent = 'Pike Place';
//   var ulEl = document.createElement('ul');
//   var sectionEl = document.getElementById('pikePlaceList');
//   var totalCookies = document.getElementById('pikePlaceListTotal');
//   totalCookies.innerHTML = 'Total: ' + name.totalSales;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     console.log();
//     liEl.textContent = hours[i] + pikePlace.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   };
// }
//
//
//
// var seaTac = {
//   min: 6,
//   max: 24,
//   averageSales: 1.2,
//   cookiesPerHour: [ ],
//   totalSales: 0,
//   randomCookies: function() {
//     return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
//   }
// };
//
// seaTac.generateHourlyCookies =function(name) {
//   for (var i = 0; i < hours.length; i++) {
//     var rand = name.randomCookies()
//     name.cookiesPerHour.push(rand);
//     name.totalSales += rand;
//   }
// };
//
// seaTac.render = function(name) {
//   name.generateHourlyCookies(name);
//   var siteNameEl = document.getElementById('seaTac');
//   siteNameEl.textcontent = 'Sea Tac';
//   var ulEl = document.createElement('ul');
//   var sectionEl = document.getElementById('seaTacList');
//   var totalCookies = document.getElementById('seaTacListTotal');
//   totalCookies.innerHTML = 'Total: ' + name.totalSales;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     console.log();
//     liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   };
// }
//
// var southCenter = {
//   min: 11,
//   max: 38,
//   averageSales: 1.9,
//   cookiesPerHour: [ ],
//   totalSales: 0,
//   randomCookies: function() {
//     return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
//   }
// };
//
// southCenter.generateHourlyCookies =function(name) {
//   for (var i = 0; i < hours.length; i++) {
//     var rand = name.randomCookies()
//     name.cookiesPerHour.push(rand);
//     name.totalSales += rand;
//   }
// };
//
// southCenter.render = function(name) {
//   name.generateHourlyCookies(name);
//   var siteNameEl = document.getElementById('southCenter');
//   siteNameEl.textcontent = 'South Center';
//   var ulEl = document.createElement('ul');
//   var sectionEl = document.getElementById('southCenterList');
//   var totalCookies = document.getElementById('southCenterTotal');
//   totalCookies.innerHTML = 'Total: ' + name.totalSales;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     console.log();
//     liEl.textContent = hours[i] + southCenter.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   };
// }
//
// var bellevueSquare = {
//   min: 20,
//   max: 48,
//   averageSales: 3.3,
//   cookiesPerHour: [ ],
//   totalSales: 0,
//   randomCookies: function() {
//     return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
//   }
// };
//
// bellevueSquare.generateHourlyCookies =function(name) {
//   for (var i = 0; i < hours.length; i++) {
//     var rand = name.randomCookies()
//     name.cookiesPerHour.push(rand);
//     name.totalSales += rand;
//   }
// };
//
// bellevueSquare.render = function(name) {
//   name.generateHourlyCookies(name);
//   var siteNameEl = document.getElementById('bellevueSquare');
//   siteNameEl.textcontent = 'Bellevue Square';
//   var ulEl = document.createElement('ul');
//   var sectionEl = document.getElementById('bellevueSquareList');
//   var totalCookies = document.getElementById('bellevueSquareTotal');
//   totalCookies.innerHTML = 'Total: ' + name.totalSales;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     console.log();
//     liEl.textContent = hours[i] + bellevueSquare.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   };
// }
//
// var alkiBeach = {
//   min: 3,
//   max: 24,
//   averageSales: 2.6,
//   cookiesPerHour: [ ],
//   totalSales: 0,
//   randomCookies: function() {
//     return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
//   }
// };
//
// alkiBeach.generateHourlyCookies =function(name) {
//   for (var i = 0; i < hours.length; i++) {
//     var rand = name.randomCookies()
//     name.cookiesPerHour.push(rand);
//     name.totalSales += rand;
//   }
// };
//
// alkiBeach.render = function(name) {
//   name.generateHourlyCookies(name);
//   var siteNameEl = document.getElementById('alkiBeach');
//   siteNameEl.textcontent = 'Alki Beach';
//   var ulEl = document.createElement('ul');
//   var sectionEl = document.getElementById('alkiBeachList');
//   var totalCookies = document.getElementById('alkiBeachTotal');
//   totalCookies.innerHTML = 'Total: ' + name.totalSales;
//
//   for (var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     console.log();
//     liEl.textContent = hours[i] + alkiBeach.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   };
// }
