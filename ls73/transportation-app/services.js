function getDrivers() {
    return fetch('/html-apps-master/transportation-app/data/drivers.json');
}

function getAddresses() {
    return fetch('/html-apps-master/transportation-app/data/addresses.json');
}

function fetch(url) {
    return new Promise(function(resolve, reject) {
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", function() {
            resolve(this.responseText);
          });
          oReq.addEventListener("error", function() {
            reject(this.responseText);
          });
          
          oReq.open("GET", url);
          oReq.send();
    });
}