

document.addEventListener('DOMContentLoaded', function(){
	

	// Часы в заказе - бегунки с выбором времени
	$( function() {

		var $inputRange = $('input[type="range"]');
		
		function valueOutput($element) {
			var $value = $element.value.replace(':', '');
			var $output = $($element).parent().children(".rangeslider__output")[0];		
			
			time1 = parseInt($value / 100);
			time2 = $value - parseInt($value / 100) * 100;
			if (time2 > 30) time2 = 30;
			if (time2 < 30) time2 = 00;
			if (time2 == 0) time2 = '00';
			if (time1 <= 9) time1 = '0' + time1;
			if (time1 == 0) time1 = '00';
			$($output).val( time1 +':'+ time2);
		}
		
		for (var i = $inputRange.length - 1; i >= 0; i--) {
			valueOutput($inputRange[i]);
		};

		$(document).on('input', 'input[type="range"]', function(e) {
			valueOutput(e.target);
		});
		$(document).on('change', 'input.rangeslider__output', function(e) {

			$(this).parent().find('input[type="range"]').val($(this).val().replace(':', ''));
			valueOutput(e.target);
		});

	});


});

