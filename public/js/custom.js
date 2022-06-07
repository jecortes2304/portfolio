$(document).ready(function() {
	$('#root').fullpage({
            'verticalCentered': false,
            'scrollingSpeed': 600,
            'autoScrolling': false,
            'css3': true,
            'navigation': true,
            'navigationPosition': 'right',
        });
});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})