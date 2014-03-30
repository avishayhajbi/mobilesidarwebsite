 // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    }

   //Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }
    }

