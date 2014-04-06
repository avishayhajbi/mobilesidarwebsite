$(document).ready(function() {
});

$(document).ready(function() {
});

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
	
// PhoneGap is ready
function onDeviceReady() {
	var db = mysql.createPool({
		host : 'sql2.freemysqlhosting.net',
		user : 'sql233352',
		password : 'iB7!yK5%',
		database : 'work',
	});

	//var db = window.openDatabase(database_name, database_version, database_displayname, database_size);
	//var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
	//db = window.openDatabase("sidar", "1.0", "sidar", 200000);
	db.transaction(populateDB, errorCB, successCB);
}

function populateDB(tx) {
	alert("populateDB");
	tx.executeSql('DROP TABLE IF EXISTS DEMO');
	tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
	tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
	tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

function errorCB(err) {
	alert("Error processing SQL: " + err.code);
}

function successCB() {
	alert("successCB");
	// Query the database
	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	// Query the success callback
	function querySuccess(tx, results) {
		console.log("****************************in*********************************");
		var len = results.rows.length;
		console.log("DEMO table: " + len + " rows found.");
		for (var i = 0; i < len; i++) {
			console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
			alert(results.rows.item(i).id);
		}
	}


	console.log("***************************out*********************************");
}

// var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
// db.transaction(populateDB, errorCB, successCB);

