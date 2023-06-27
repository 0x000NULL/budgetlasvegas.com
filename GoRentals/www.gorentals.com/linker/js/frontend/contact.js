		var j = jQuery.noConflict(); 
		j(document).ready(function(){
			jQuery.validator.setDefaults({
				 debug: true,
				 success: "valid"
			});
			
			jQuery.validator.addMethod(
				"goRentalsDate",
				 function(value, element) {
				     // put your own logic here, this is just a (crappy) example
				     return value.match(/^\d\d?-\d\d?-\d\d\d\d$/);
			     },
				"Please enter a valid date."
			);

			
			j("#formContact").validate({
				 debug: true,
				rules: {
					'fname': {
						required: true,
						minlength: 2
					 },
					'lname': {
						required: true,
						minlength: 2
					 },				     
					'email': {
				        required: true,
				        email: true
				     },
				    'phone': {
				        required: true,
				        digits: true
				     },					
				    'credicard': {
				        required: true,
				        digits: true,
				        minlength: 4
				     },
					'pickup_location': {
						required: true
					},
					'pickup_date': {
						required: true,
						goRentalsDate : true
					},
					'comment': {
						required: true,
						minlength: 3
					},	
				},
				submitHandler: function(form) {
					var output = cleanHTML(j('#comment').val());
					j('#comment').val(output);

					form.submit();
				},
				invalidHandler: function(form, validator) {
					
				}
			});
			
			 j("#pickup_date").datepicker({
				 format: 'mm-dd-yyyy',
			     autoclose: true,
			     todayHighlight: true
		     });


		
				

		});
		
