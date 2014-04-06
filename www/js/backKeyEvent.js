$(document).ready(function() {
    $(document).bind("deviceready", function(){
        document.addEventListener("backbutton", backKeyDown, true); 
    });
});
function addToUserHistory(somepage){
    var len = userHistory.length;
    if(len==0){
        // just add
        userHistory.push(somepage);
    }else{
        // compare last and add if different
        lensub1 = len--;
        if(userHistory[lensub1] != somepage){
            userHistory.push(somepage);
        }
    }
}
function backKeyDown(){
    var len = userHistory.length;
    if(len<=1){
        // close application
        navigator.app.exitApp()
    }else{
        var popped = userHistory.pop(); // grabs current page
        var popped = userHistory.pop(); // grabs previous (desired) page
        // go to pop page
        if(popped.indexOf("|") != -1){
            // at least one pipe was found (vp/va)
            var split = popped.split("|");
            if(split.length==2){
                // 1 pipe found, set vp
                vp = split[1];
            } else if(split.length==3){
                // 2 pipes found, set vp & va
                vp = split[1];
                va = split[2];
            }
            popped = split[0];
        }
        switch(popped)
        {
            case 'paintLoginForm': mydb.transaction(paintLoginForm, function(){}, function(){}); break;
            case 'listBrief': mydb.transaction(listBriefDB, errorCB); break;
            case 'scheduleAppt': scheduleAppt(); break;
            case 'viewOneProperty': viewOneProperty(); break;
            case 'addAppliancePage': addAppliancePage(); break;
            case 'viewAppliance': viewAppliance(); break;
        }
    }
}


/*
The backKeyDown() function used here was designed for my application which had a page to pass, 
and possibly 1 or 2 other variables as well. I chose to set these values separated by pipes.


addToUserHistory('paintLoginForm');

addToUserHistory('addAppliancePage|'+vp);

addToUserHistory('viewAppliance|'+vp+'|'+va);
I think this could be re-done using an array of “pages” and an array of variables, which could be more re-usable for future use.
*/
