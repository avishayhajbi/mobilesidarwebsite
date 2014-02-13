/* scroll screen */
 $(document).ready(function(){
    touchMove = function(event) {
        event.preventDefault();
    }
    });
/* end scroll screen */

/*menu*/
 $(document).ready(function(){

	$('#cssmenu > ul > li:has(ul)').addClass("has-sub");
	$('#cssmenu > ul > li > a').click(function() {

	var checkElement = $(this).next();

	$('#cssmenu li').removeClass('active');
	$(this).closest('li').addClass('active');

	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	}

	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#cssmenu ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	}

	if (checkElement.is('ul')) {
		return false;
	} else {
		return true;
	}
});

});
/*end menu*/

/* page transport*/
$(document).on('pagebeforeshow', '#page', function(){ 
    $(document).on('click', '.home_page_img', function(){    
    	/*$.mobile.changePage( "searchresults.php", {
		  type: "post",
		  data: $("form#search").serialize()
		});*/
        //$.mobile.navigate( "workinfo.html", { transition : "pop", info: "" });
        //$.mobile.changePage( "workinfo.html", { transition: "slideup"});
    });   
});
/* end page transport */

$('.information').on("expand", function(e){
    $(e.target + '.ui-btn').addClass('ui-btn-active').collapsible("refresh");
});