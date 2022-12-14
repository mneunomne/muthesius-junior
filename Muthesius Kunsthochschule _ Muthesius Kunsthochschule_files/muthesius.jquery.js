jQuery('document').ready(function($) {
   
// Switch active frame
$('#frame-right, .icn-wrapper.open-right').click(function() {
	if ($('#frame-left').hasClass('active')) { // right gets active
		$('#frame-right, .icn-wrapper.open-left').addClass('active').removeClass('not-active');
		$('#frame-left, .icn-wrapper.open-right').addClass('not-active').removeClass('active');		
	}		
});

$('#frame-left, .icn-wrapper.open-left').click(function() {		
	if ($('#frame-right').hasClass('active')) { // left gets active
		$('#frame-right, .icn-wrapper.open-left').addClass('not-active').removeClass('active');			
		$('#frame-left, .icn-wrapper.open-right').addClass('active').removeClass('not-active');
	}		
});

// Mobile switcher
var $nav = $('.nav');
var $navSwitcherIcon = $('.nav-switcher i');
var $navSwitcher = $('.nav-switcher');

$navSwitcher.click(function() {
  let clickStatus = $navSwitcher.data('click-status');
	
	if (!clickStatus || clickStatus == '1') {
		$navSwitcher.addClass('menu-open').removeClass('menu-closed');
		$navSwitcherIcon.addClass('icon-chevron-up').removeClass('icon-list');
		$nav.stop().slideDown('fast');
		
		$navSwitcher.data('click-status', '2');
	} else {
		$navSwitcher.removeClass('menu-open').addClass('menu-closed');
		$navSwitcherIcon.removeClass('icon-chevron-up').addClass('icon-list');
		$nav.stop().slideUp('fast');
		
		$navSwitcher.data('click-status', '1');
	}
});

// Blogmenu
$('#blogmenu-toggler-left').click(function() {
  let clickStatus = $('#blogmenu-toggler-left').data('click-status');
	
	if (!clickStatus || clickStatus == '1') {
		$('#blogmenu-left').slideDown(350);
		$('.blog-name', this).hide(0);
		$('.blog-selection', this).show(0);
		
		$('#blogmenu-toggler-left').data('click-status', '2');
	} else {
		$('#blogmenu-left').slideUp(350);
		$('.blog-name', this).show(0);
		$('.blog-selection', this).hide(0);
		
		$('#blogmenu-toggler-left').data('click-status', '1');
	}
});

$('#blogmenu-left li.has-children > a').click( function() {
	$thisSubmenu = $(this).next('.sub-menu');
	$('#blogmenu-left .sub-menu').not($thisSubmenu).slideUp(350);
	$thisSubmenu.slideToggle(350);
	return false;
});

$('#blogmenu-left .menu-item-depth-1.current-menu-item').closest('.menu-item-depth-0').addClass('current-menu-ancestor');

// Mainmenu
if ($('#frame-left section').hasClass('max-width')) {
	$('body').addClass('max-width-tpl');
} else {
	$('body').addClass('normal-width-tpl');
}

// Scroll to top
$('#totop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 750);
  return false;
});

// Collapsible tables and responsive tables

// Breadcrumbs show/hide
$(window).scroll( function() {
  if ($(this).scrollTop() > ($('#frame-right .header').height() - 35) && $('#frame-right').hasClass('active')) {
		$('#breadcrumbs').fadeIn('fast');
	} else {
    $('#breadcrumbs').fadeOut('fast');
	}
}).trigger('scroll');

$('.entry img').each( function() {
	var $img = $(this);
  $img.closest('a').addClass('img-link');
});

// Jump to content if right is active and pageWidth < 520px (smartphone)
$pageWidth = $('body').width();

if ($('#frame-right').hasClass('active') && $pageWidth < 520) {
	$(window).scrollTop(500);
}

}); 