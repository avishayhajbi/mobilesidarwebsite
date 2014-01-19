// JavaScript Document
var keyboardActive = true;

var HOME = {
  xSmallMax: 767,
  smallMax: 991,
  medMax: 1199,

  onReady: function(){
    HOME.colorBox();
    HOME.carousel();
    HOME.resizeVideo();
    HOME.atStanford();
    jQuery("time.timeago").timeago(); // initialize timeago to keep featured tweet time up to date

    // add event handler to track carousel controls
    $('.carousel-indicators button, button.carousel-control').click(function() {
      var $this = $(this);
      var category = 'carousel';
      var label = $this.find('.screen-reader').text().replace(/[^:]*: /, ''); // remove "Prev / Next story: " or "Story m of n: "
      var action = 'click';
      if (typeof($this.data('slide')) != "undefined") {
        action = $this.data('slide');
      } else if (typeof($this.data('slide-to')) != "undefined") {
        var slide = parseInt($this.data('slide-to'), 10) + 1;
        action = 'slide ' + slide;
      }
      ga('send', 'event', category, action, label);
    });

    // add event handler to track clicks on links in featured tweet
    $('.tweet-link').click(function() {
      var $this = $(this);
      var category = 'tweetLink';
      var action = $this.data('ua-action') || ($this.is('a') && this.href) || 'click';
      var label = $this.data('ua-label') || $this.text();
      ga('send', 'event', category, action, label);
    });
  },

  colorBox: function (){
    var size = SUHOME.size(); // what size is our window (xs, sm, md or lg)
    if (size == 'xs') {
      $('.eventbox').each(function() { // if we're not using a light box, add param that tells PHP to redirect to full page
        if (!/&r=1/.test(this.href)) {
          this.href = this.href + '&r=1';
        }
      });
      $('.eventbox').colorbox.remove();
    } 
    else {
      $('.eventbox').each(function() { // if we're using a light box, remove param that tells PHP to redirect to full page
        this.href = this.href.replace(/&r=1/g, '');
      });
      $('.eventbox').colorbox({
        width:"650px", height:"750px", maxHeight:"90%", close: "<i class='fa fa-times'></i> Close",
        onOpen:function(){ keyboardActive = false; },
        onClosed:function(){ keyboardActive = true; }
      });
    }            
  },

  atStanford: function (){
    var numItems = $('#at-stanford').data('num-items');
    var item = Math.floor(Math.random() * numItems) + 1;
    if (item !== 1) { // we're displaying the first item by default, so don't fetch it again
      $.get("/rw_includes/homepage/at-stanford-" + item + ".html", function(snippet) {
        $("#at-stanford .item").replaceWith(snippet);
        $("#at-stanford .item").css('visibility', 'visible');
      });
    } else {
      $("#at-stanford .item").css('visibility', 'visible');
    }
  },  
  
  resizeVideo: function(){
    var video = $("#feature-banner").find('.item.active .videoblock');
    if (video.length == 0) return; // if we're not showing a video, don't bother resizing it

    var videoProps = {
     lg: {
       width: '600px',
       height: '339px',
       left: '470px',
       top: '45px'
     },
     md: {
       width: '480px',
       height: '270px',
       left: '390px',
       top: '100px'
     },
     sm: {
       width: '466px',
       height: '262px',
       left: '127px',
       top: '30px'
     }
    };
    var size = SUHOME.size(); // what size is our window (xs, sm, md or lg)
    if (size == 'xs') { // if it's xs, dynamically resize the video based on the image size
      var img = video.parent('.item').find('img').first();
      var imgW = img.width();
      var imgH = img.height();
      var vidW = Math.floor(imgH * 16 / 9);
      video.height(imgH);
      video.width(vidW);
      video.css( 'left', Math.floor((imgW - vidW) / 2 ));
      video.css( 'top', 0 );
    }
    else { // if not xs, use fixed properties
      video.css(videoProps[size]);
    }
  },
  
  carousel: function(){
    //if #emergency-alert is present, hide #feature-banner, otherwise, load carousel
    if($('#emergency-alert').length){
      $('#feature-banner').hide();
    }
    else {
      $('#feature-banner').carousel({interval: false});

      $(document.documentElement).keyup(function (event) {
        // handle cursor keys
        if (event.keyCode == 37 && keyboardActive) {
          $('button.carousel-control.left').click();
        } else if (event.keyCode == 39  && keyboardActive) {
          $('button.carousel-control.right').click();
        }
      });
      $("#feature-banner").swiperight(function() {
        $('button.carousel-control.left').click();
      });  
      $("#feature-banner").swipeleft(function() {  
        $('button.carousel-control.right').click();
      }); 

      // set labels on carousel controls to the title (h3) of the slide it points to (accessibility)
      var titles = $.makeArray($("#feature-banner").find('.carousel-caption h3'));
      var numIndicators = $('.carousel-indicators button').length;
      $('.carousel-indicators button span').each(function(i, el) {
        var title = titles.shift();
        this.innerHTML = 'Story ' + (i+1) + ' of ' + numIndicators + ': ' + title.innerHTML;
      });

      // set labels of prev / next buttons to the title (h3) of the slide they initially point to (accessibility)
      $('.carousel-control.left').children('.screen-reader').text('Previous story: ' + $("#feature-banner").find('.carousel-caption h3').last().text());
      $('.carousel-control.right').children('.screen-reader').text('Next story: ' + $("#feature-banner").find('.carousel-caption h3')[1].innerHTML);

      // when the carousel changes, update prev, next labels to announce the title of they now point to (accessibility)
      $("#feature-banner").on('slide.bs.carousel', function(e) {
        var prev, next;
        var slides = $(e.target);
        var currentSlide = slides.find('.item.active'); // the currently active slide
        var newSlide = $(e.relatedTarget); // the slide that will be current after this transition
        if (e.direction == 'left') {
          prev = currentSlide;
          next = newSlide.next().length ? newSlide.next() : slides.find('.item').first();
        } else {
          next = currentSlide;
          prev = newSlide.prev().length ? newSlide.prev() : slides.find('.item').last();
        }
        $('.carousel-control.left').children('.screen-reader').text('Previous story: ' + prev.find('.carousel-caption h3').text());
        $('.carousel-control.right').children('.screen-reader').text('Next story: ' + next.find('.carousel-caption h3').text());
      });

      // when sliding is complete set focus on newly revealed element (accessibility)
      $("#feature-banner").on('slid', function(e) {
        $(e.target).find('.item.active').focus();
        HOME.resizeVideo();
      }); 
    }
  }
};

$(document).ready( HOME.onReady );

// Call responsive funtion when browser window resizing is complete (resizeEnd triggered by timeout in base.js)
$(window).bind('resizeEnd', function() {
  //disable colorbox for mobile width
  HOME.colorBox();
  HOME.resizeVideo();
});
