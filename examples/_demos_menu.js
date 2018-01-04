
$(document).ready(function()
{
	var menuOptions_OBJ = {
		"default": "Choose Demo",
		"index": "About",
		"simple": "Simple Use",
		"css3": "CSS3",
		"easing": "Easing",


		"activeSlide": "Default Section and Slide",
		"apple": "Apple iPhone Demo (animations)",
		"autoHeight": "Auto-Height",
		"autoplayVideoAndAudio": "Auto-play Video and Audio",
		"gradientBackgrounds": "Background Gradients",
		"backgrounds": "Background Images",
		"backgroundsFixed": "Background Images, Fixed",
		"backgroundVideo": "Background Videos",
		"callbacks": "Callbacks",
		"callbacks2": "Callbacks in Use",
		"continuousVertical": "Continuous Vertical Scroll (Looping)",
		"fixedElements": "Fixed Elements",
		"lazyLoad": "Lazy Loading",
		"methods": "API Methods",
		"navigationV": "Navigation Dots, Sections",
		"navigationH": "Navigation Dots, Slides",

		"noAnchor": "No Anchor Links",
		"normalScroll": "Normal Scrolling",
		"scrollBar": "Scrollbar Enabled",
		"normalScrollElements": "In-View Scroll Areas",
		"oneSection": "Mixing with Regular Page Content",
		"responsiveHeight": "Responsive Height",
		"responsiveWidth": "Responsive Width",
		"responsiveAutoHeight": "Responsive Width - Auto-Height",
		
		"scrollOverflow": "Normal Scroll in Overflow Areas",
		"scrollingSpeed": "Set Scrolling Speed",

		// Below Pages Execute Redirects to Online Pages
		"scrollHorizontally": "Scroll horizontally",
		"responsiveSlides": "Responsive Slides",
		"resetSliders": "Reset sliders",
		"parallax": "Parallax",
		"offsetSections": "Offset sections",
		"interlockedSlides": "Interlocked Slides",
		"continuousHorizontal": "Continuous horizontal",
		"dragAndMove": "Drag And Move",
		"fadingEffect": "Fading Effect"
	};

	var selectMenu = $("<select></select>").attr("id", "demosMenu").attr("name", "Demos Menu");
	$( "body" ).append( selectMenu );
		
	$.each(menuOptions_OBJ, function(key, value) {   
		$('#demosMenu')
			.append($("<option></option>")
						.attr("id",key)
						.text(value)); 
	});

	$("#demosMenu").change(function(){
		window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});