$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >=200){
			$('nav').addClass('scrolled');
		}
		else{
			$('nav'). removeClass('scrolled');
		}
	});
});

$(function(){
      $('a[href*="#"]:not([href="#"])').click(function(){
        if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
          var target = $(this.hash);
          target = target.length ? target: $('[name=' + this.hash.slice(1) +']');
          if(target.length){
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
      }
    }
  });
});

$(document).ready(function(){
	loadGallery(true, 'a.thumbnail');
	function disableButtons(counter_max, counter_current){
		$('#show-next-image, #show-previous-image').show();
		if(counter_max==counter_current){
			$('#show-next-image').hide();
		}else if(counter_current==1){
			$('#show-previous-image').hide();
		}
	}
	function loadGallery(setIDs, setClickAttr){
		var current_image,
		selector,
		counter = 0;
	$('#show-next-image, #show-previous-image').click(function(){
		if($(this).attr('id')=='show-previous-image'){
			current_image--;
		}else{
			current_image++;
		}
		selector= $('[data-image-id="' + current_image + '"]');
		updateGallery(selector);		
	});
	function updateGallery(selector){
		var $sel = selector;
		current_image = $sel.data('image-id');
		$('#image-gallery-caption').text($sel.data('caption'));
		$('#image-gallery-title').text($sel.data('title'));
		$('#image-gallery-image').attr('src', $sel.data('image'));
		disableButtons(counter, $sel.data('image-id'));
	}
	if(setIDs==true){
		$('[data-image-id]').each(function(){
			counter++;
			$(this).attr('data-image-id', counter);
		});
	}
	$(setClickAttr).on('click', function(){
		updateGallery($(this));
	});
	}
});