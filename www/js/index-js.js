/* scroll screen */
$(document).ready(function() {
	touchMove = function(event) {
		event.preventDefault();
	};
});

/*scroll body
 $(document).ready(function() {
 scrolling_page();
 });
 var checkscrollingpage = 1;
 function scrolling_page() {
 if (checkscrollingpage == 0) {
 $('html, body').css({
 'overflow' : 'hidden',
 'height' : '100%'
 });
 checkscrollingpage = 1;
 } else {
 $('html, body').css({
 'overflow' : 'auto',
 'height' : 'auto'
 });
 checkscrollingpage = 0;
 }
 }

 /*end scroll body*/
/* end scroll screen */

/*menu*/
$(document).ready(function() {

	$('#cssmenu > ul > li:has(ul)').addClass("has-sub");
	$('#cssmenu > ul > li > a').click(function() {

		var checkElement = $(this).next();

		$('#cssmenu li').removeClass('active');
		$(this).closest('li').addClass('active');

		if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}

		if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
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

/* page transport
$(document).on('pagebeforeshow', '#page', function() {
	$(document).on('click', '.home_page_img', function() {
		$.mobile.changePage( "searchresults.php", {
		type: "post",
		data: $("form#search").serialize()
		});
		//$.mobile.navigate( "workinfo.html", { transition : "pop", info: "" });
		//$.mobile.changePage( "workinfo.html", { transition: "slideup"});
	});
});
/* end page transport */

/* */
$(document).ready(function() {
	$(".inner_menu_collapse, .collapse").hide();
           
	$(".Binfo").click(function() {
		$(".collapse").toggle("fast", function() {
			 $('html, .Binfo').css({
			 'margin-bottom' : '10px'
			 });
		});
	});
	$(".Bsearch").click(function() {
		$(".inner_menu_collapse").toggle("fast", function() {
			$('html, .Bsearch').css({
			 'margin-bottom' : '10px'
			 });
		});
	});
});
/* */