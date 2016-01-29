var hours = ['10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

var pikePlace = {
  min: 17,
  max: 88,
  averageSales: 5.2,
  cookiesPerHour: [ ],
  totalSales: 0,
  randomCookies: function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  }
};



pikePlace.generateHourlyCookies =function(name) {
  for (var i = 0; i < hours.length; i++) {
    var rand = name.randomCookies()
    name.cookiesPerHour.push(rand);
    name.totalSales += rand;
  }
};

pikePlace.render = function(name) {
  name.generateHourlyCookies(name);
  var siteNameEl = document.getElementById('pikePlace');
  siteNameEl.textcontent = 'Pike Place';
  var ulEl = document.createElement('ul');
  var sectionEl = document.getElementById('pikePlaceList');
  var totalCookies = document.getElementById('pikePlaceListTotal');
  totalCookies.innerHTML = 'Total: ' + name.totalSales;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    console.log();
    liEl.textContent = hours[i] + pikePlace.cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  };
}



var seaTac = {
  min: 6,
  max: 24,
  averageSales: 1.2,
  cookiesPerHour: [ ],
  totalSales: 0,
  randomCookies: function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  }
};

seaTac.generateHourlyCookies =function(name) {
  for (var i = 0; i < hours.length; i++) {
    var rand = name.randomCookies()
    name.cookiesPerHour.push(rand);
    name.totalSales += rand;
  }
};

seaTac.render = function(name) {
  name.generateHourlyCookies(name);
  var siteNameEl = document.getElementById('seaTac');
  siteNameEl.textcontent = 'Sea Tac';
  var ulEl = document.createElement('ul');
  var sectionEl = document.getElementById('seaTacList');
  var totalCookies = document.getElementById('seaTacListTotal');
  totalCookies.innerHTML = 'Total: ' + name.totalSales;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    console.log();
    liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  };
}

var southCenter = {
  min: 11,
  max: 38,
  averageSales: 1.9,
  cookiesPerHour: [ ],
  totalSales: 0,
  randomCookies: function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  }
};

southCenter.generateHourlyCookies =function(name) {
  for (var i = 0; i < hours.length; i++) {
    var rand = name.randomCookies()
    name.cookiesPerHour.push(rand);
    name.totalSales += rand;
  }
};

southCenter.render = function(name) {
  name.generateHourlyCookies(name);
  var siteNameEl = document.getElementById('southCenter');
  siteNameEl.textcontent = 'South Center';
  var ulEl = document.createElement('ul');
  var sectionEl = document.getElementById('southCenterList');
  var totalCookies = document.getElementById('southCenterTotal');
  totalCookies.innerHTML = 'Total: ' + name.totalSales;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    console.log();
    liEl.textContent = hours[i] + southCenter.cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  };
}

var bellevueSquare = {
  min: 20,
  max: 48,
  averageSales: 3.3,
  cookiesPerHour: [ ],
  totalSales: 0,
  randomCookies: function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  }
};

bellevueSquare.generateHourlyCookies =function(name) {
  for (var i = 0; i < hours.length; i++) {
    var rand = name.randomCookies()
    name.cookiesPerHour.push(rand);
    name.totalSales += rand;
  }
};

bellevueSquare.render = function(name) {
  name.generateHourlyCookies(name);
  var siteNameEl = document.getElementById('bellevueSquare');
  siteNameEl.textcontent = 'Bellevue Square';
  var ulEl = document.createElement('ul');
  var sectionEl = document.getElementById('bellevueSquareList');
  var totalCookies = document.getElementById('bellevueSquareTotal');
  totalCookies.innerHTML = 'Total: ' + name.totalSales;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    console.log();
    liEl.textContent = hours[i] + bellevueSquare.cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  };
}

var alkiBeach = {
  min: 3,
  max: 24,
  averageSales: 2.6,
  cookiesPerHour: [ ],
  totalSales: 0,
  randomCookies: function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
  }
};

alkiBeach.generateHourlyCookies =function(name) {
  for (var i = 0; i < hours.length; i++) {
    var rand = name.randomCookies()
    name.cookiesPerHour.push(rand);
    name.totalSales += rand;
  }
};

alkiBeach.render = function(name) {
  name.generateHourlyCookies(name);
  var siteNameEl = document.getElementById('alkiBeach');
  siteNameEl.textcontent = 'Alki Beach';
  var ulEl = document.createElement('ul');
  var sectionEl = document.getElementById('alkiBeachList');
  var totalCookies = document.getElementById('alkiBeachTotal');
  totalCookies.innerHTML = 'Total: ' + name.totalSales;

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    console.log();
    liEl.textContent = hours[i] + alkiBeach.cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  };
}

  pikePlace.render(pikePlace);
  seaTac.render(seaTac);
  southCenter.render(southCenter);
  bellevueSquare.render(bellevueSquare);
  alkiBeach.render(alkiBeach);
