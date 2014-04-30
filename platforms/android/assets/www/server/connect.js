var myDomain = "http://avishay.eu5.org/";

$(document).ready(function() {
	// connect to DB when app starts
	ajaxConnection();
	
	// init main screen
	var url = $.mobile.activePage[0].baseURI;
	alert (url);
	if (url.lastIndexOf("index")!= -1){
		intitializeMainScreen();
	}
});

   
document.addEventListener("deviceready", onDeviceReady, false);

// initialized main screen with photos
function ajaxConnection() {
$.ajax({
	  type:'GET',
	  url: myDomain,
	  //url:'127.0.0.1/functions.php?=function_to_call=0',
	  data:"function_to_call=0", 
	  success: function(data){
	  	if (data != ""){
			alert ("Connected"); // remove
		}
		else alert ("No Internet Connection");
	  },
	  error: function (data){
	  	alert ("No Internet Connection");
	  }
	});
}

// save work id when pressed and get all information
function onWorkClick (workId){
	alert(workId);
	window.localStorage.removeItem("key");
    window.localStorage.setItem("key", workId);
	// http://avishay.eu5.org/?function_to_call=2
var getJSONdata=$.ajax({
        type: "GET",
        url: myDomain,
        data: "function_to_call=2",
        async: false,
        dataType: 'json'
    });
    var jsonArray = getJSONdata.responseText;
    	// alert(jsonArray); // display --works
	var myObject = JSON.parse(jsonArray);
		// alert(myObject['name']); // display --works
		// alert(myObject.name2); // display --works
}

// init main screen
function intitializeMainScreen (){
	alert ("init main screen");
var getJSONdata=$.ajax({
        type: "GET",
        url: myDomain,
        data: "function_to_call=1",
        async: false,
        dataType: 'json'
    });
    /*
    var jsonArray = getJSONdata.responseText;
    	 alert(jsonArray); // display --works
	var myObject = JSON.parse(jsonArray);
		// alert(myObject['name']); // display --works
		// alert(myObject.name2); // display --works
	*/
}



/* COMMENTS -- nothing to do JUST to remember */

/*
function displayWorkIdSelected(){
	var value = window.localStorage.getItem("key");
	if (value != null)
    alert(value);
}
*/

/*
// PhoneGap is ready
   function onDeviceReady() {
	// window.localStorage.setItem("key", 'AAA');
    // var keyname = window.localStorage.key(i);
    // keyname is now equal to "key"
    // var value = window.localStorage.getItem("key");
    // alert(value);
    // value is now equal to "value"
    // window.localStorage.removeItem("key");
    // window.localStorage.setItem("key2", "value2");
    // window.localStorage.clear();
    // localStorage is now empty
}
*/

/*remember things*/	
/*
	sessionStorage.getItem('label')
	sessionStorage.setItem('value', 'label')
	localStorage.getItem('label')
	localStorage.setItem('value', 'label')
*/
   	
/*	
	$.ajax({
	  type:'GET',
	  url:'http://avishay.eu5.org/',
	  data:"function_to_call=2",
	  crossDomain: true,
	  //data : 
         //{
                // 'select' : select // the variable you're posting.
         //},
	  //url:'127.0.0.1/functions.php?=function_to_call=0',
	  //async: false,
      //jsonpCallback: 'callback',
      contentType: "application/json",
      //dataType: 'json',
      //dataType: 'jsonp',
	  //contentType: "application/json; charset=utf-8",
      //cache: false,
	  success: function(data){
	  	alert ("data received..");
	  	alert(data);
	  	var json_x = data;
   		alert(json_x['id']);

		for(var i in data){
		alert(data[i]);
		}
		    
	  }
	});
*/