/* Rotate Element */
$(document).ready(function() {
    var $elie = $("#openElement"), degree = 0, timer;
           
    function rotate() {
        $elie.css("cursor","pointer");
        $elie.css({ WebkitTransform: 'rotateY(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotateY(' + degree + 'deg)'});
        $elie.css({ '-ms-transform': 'rotateY(' + degree + 'deg)'});
                  
        timer = setTimeout(function() {
            ++degree; 
            rotate();
        },15);
    }
    
    $("#openElement").mouseout(function() {
            $elie.css({ WebkitTransform: 'rotateY(' + 0+ 'deg)'});  
        $elie.css({ '-moz-transform': 'rotateY(' + 0 + 'deg)'});
        $elie.css({ '-ms-transform': 'rotateY(' + 0 + 'deg)'});
        clearTimeout(timer);

    }); 
    // $("#openElement").mouseover(function() {
    //     rotate();
    // });

    // slideMenu();
    //Load the slideshow
    theRotator();
    $('section.rotator').fadeIn(1000);
    $('section.rotator ul li').fadeIn(1000); // tweek for IE


    moveBox();
    showKeyWords();
});

/* Forms functions  */
$(document).ready(function() {
    var $obj = $("#admission");
    $obj.css({"cursor": "pointer"});

    $($obj).click(function() {
        $("#admission_form").fadeToggle(3000);
    });
});

$(document).ready(function() {
    var $obj = $("#registration");
    $obj.css({"cursor": "pointer"});

    $($obj).click(function() {
        $("#registration_form").fadeToggle(3000);
    });
});


function goTo(choose)
{
    var selected = choose.options[choose.selectedIndex].value;
    if(selected != "")
    {
        location.href = selected;
    }
}

$(document).ready(function(){
    
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({rel:'group1'});
    $(".group2").colorbox({rel:'group2', transition:"fade"});
    $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
    $(".group4").colorbox({rel:'group4', slideshow:true});
    $(".ajax").colorbox();
    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
    $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
    $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
    $(".inline").colorbox({inline:true, width:"50%"});
    $(".callbacks").colorbox({
        onOpen:function(){ alert('onOpen: colorbox is about to open'); },
        onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
        onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
    });

    $('.non-retina').colorbox({rel:'group5', transition:'none'})
    $('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
                
    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function(){ 
        $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
        return false;
    });
});


function theRotator() {
    //Set the opacity of all images to 0
    $('section.rotator ul li').css({opacity: 0.0});
    
    //Get the first image and display it (gets set to full opacity)
    $('section.rotator ul li:first').css({opacity: 1.0});
        
    //Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds
    
    setInterval('rotate()',3000);
    
}

function rotate() { 
    //Get the first image
    var current = ($('section.rotator ul li.show')?  $('section.rotator ul li.show') : $('section.rotator ul li:first'));

    if ( current.length == 0 ) current = $('section.rotator ul li:first');

    //Get next image, when it reaches the end, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('section.rotator ul li:first') :current.next()) : $('section.rotator ul li:first'));
    
    //Un-comment the 3 lines below to get the images in random order
    
    //var sibs = current.siblings();
    //var rndNum = Math.floor(Math.random() * sibs.length );
    //var next = $( sibs[ rundNum ] );
            

    //Set the fade in effect for the next image, the show class has higher z-index
    next.css({opacity: 0.0})
    .addClass('show')
    .animate({opacity: 1.0}, 1000);

    //Hide the current image
    current.animate({opacity: 0.0}, 1000)
    .removeClass('show');
    
};


function moveBox() {

    $(".main_section ul li:nth-child(1)").mouseenter(function() {
        $(".main_section ul li:nth-child(1) ul.sld").css({"display": "block"}).animate({
            right: '+=112.6%'
        }, 1000, 'linear');
    });
        
    $(".main_section ul li:nth-child(1)").mouseleave(function() {
        $(".main_section ul li:nth-child(1) ul.sld").fadeOut('slow').animate({
            right: '-=112.6%'
        }, 10, 'linear');
    });

    $(".main_section ul li:nth-child(8)").mouseenter(function() {
        $(".main_section ul li:nth-child(8) ul.sld").css({"display": "block"}).animate({
            right: '+=112.6%'
        }, 1000, 'linear');
    });
        
    $(".main_section ul li:nth-child(8)").mouseleave(function() {
        $(".main_section ul li:nth-child(8) ul.sld").fadeOut('slow').animate({
            right: '-=112.6%'
        }, 10, 'linear');
    });

    $(".opening_text").mouseover(function() {
        $(".secondary_text").animate({
            top: '+=100'
        }, 600, 'linear');
    });
}

function showKeyWords() {
    $("#keywords").click(function() {
        $("#keywords ul").slideToggle('slow');
    });
}

function mark(obj)
{
	
	if (obj.style.fontWeight != "bold") 
		{
			obj.style.fontWeight="bold";
		}
		else
		{
			obj.style.fontWeight="normal";
		}
}
var interviewcheck=1;
function interview()
{
	
	if (interviewcheck==1)
	{
		document.getElementById("interview").style.display="block";
		document.getElementById("protoImg").style.display="none";

		interviewcheck =0;
	}
	else{
		document.getElementById("interview").style.display="none";
		document.getElementById("protoImg").style.display="block";
		interviewcheck=1;
	}
}
