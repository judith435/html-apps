(function() {
    // -------------------- show exist data ------------ //
    const driversContainer = document.getElementById('drivers');

    getDrivers().then(buildDrivers).then(getAddresses).then(buildAddresses);

    function buildDrivers(response) {
        const drivers = JSON.parse(response);
        for(let i=0; i < drivers.length; i++) {
            const $driverDiv = document.createElement('div');
            $driverDiv.className = 'driver';
            $driverDiv.id = 'driver' + i;
            $driverDiv.addEventListener('drop', drop_handler);
            $driverDiv.addEventListener('dragover', dragover_handler);
            $driverDiv.innerHTML = drivers[i].name;
            document.getElementById('drivers').appendChild($driverDiv);
        }
        
    }

    function buildAddresses(data) {
        const addresses = JSON.parse(data);
        for(let i=0; i < addresses.length; i++) {
            const $addressDiv = document.createElement('p');
            $addressDiv.className = 'drag-item';
            $addressDiv.id = 'address' + i;
            $addressDiv.draggable = true;
            $addressDiv.addEventListener('dragstart', dragstart_handler);
            $addressDiv.innerHTML = addresses[i].street + addresses[i].houseNumber + addresses[i].city ;
            document.getElementById('addresses').appendChild($addressDiv);
        }

    }
    // -------------------- create new data ------------ //
    const addAddressButton = document.getElementById('addAddress');
}());

