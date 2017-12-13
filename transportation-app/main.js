(function() {

    // -------------------- show exist data ------------ //
    const driversContainer = document.getElementById('drivers');
//"id":1,"name":"driver1","gender":"male"
    function Driver (id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }

    function buildForm(obj, $form1) {
        const keys = Object.keys(obj);
        console.log(keys);
    
        for (let i=0; i < keys.length; i++) {
            const $element = document.createElement('input');
            $element.placeholder =  $element.id = keys[i];
            $form1.appendChild($element);
            $element.value = obj[keys[i]];
        }
    }
    function buildList(obj, $divDrivers) {
        const keys = Object.keys(obj);
        console.log(keys);
    
        for (let i=0; i < keys.length; i++) {
            const $element = document.createElement('p');
            $divDrivers.appendChild($element);
            $element.innerHTML = obj[keys[i]];
        }
    }

    function getDrivers() {
        return new Promise(function(resolve, reject) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'data/drivers.json', true); 
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    resolve(xobj.responseText);
                }
            };
            xobj.send(null);          
        });
    }

    getDrivers().then(function(response) {
        const $divDrivers = document.getElementById('divDrivers');
        var drivers = JSON.parse(response);
        for (let i = 0; i < drivers.length; i++) {
            let driver = drivers[i]
            let p1 = new Driver(driver.id, driver.name, driver.gender);
            buildList(p1, $divDrivers);
           // buildForm(p1, $form1);
        }    

            // Code
            // Take driver template and attach drivers data, append all to driversContainer
        }).catch(function(error) {
            console.log('promise: ' + error); 
    });




    // -------------------- create new data ------------ //
    const addAddressButton = document.getElementById('addAddress');
}());
