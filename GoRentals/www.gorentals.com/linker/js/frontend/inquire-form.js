		var j = jQuery.noConflict(); 
		j(document).ready(function(){
			j(".royalSlider").royalSlider({
		    	autoScaleSlider: true,
		    	autoScaleSliderHeight: 600,
			    imageScaleMode: 'fill',
			    slidesSpacing: 0,
			    controlNavigation: 'thumbnails',
			    thumbs: {
			        // thumbnails options go gere
			    	spacing: 10,
			        arrowsAutoHide: true,
			        autoCenter: false,
			        fitInViewport: true

			    }
			});
			
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
			
			jQuery.validator.addMethod(
				"goRentalsTime",
				function(value, element) {
					// put your own logic here, this is just a (crappy) example
					return value.match(/^\d\d?:\d\d?$/);
				},
				"Please enter a valid time."
			);
			
			j("#form").validate({
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
					'pickup_state': {
						required: true
					},
					'pickup_location': {
						required: true
					},
					'return_state': {
						required: true
					},
					'return_location': {
						required: true
					},
					'pickup_date': {
						required: true,
						goRentalsDate : true
					},
					'return_date': {
						required: true,
						goRentalsDate : true
					},		
					'pickup_time': {
						required: true,
						goRentalsTime : true
					},
					'return_time': {
						required: true,
						goRentalsTime : true
					}, 
					//'captcha[input]': {
					//	required: true,
					//}, 
					
					
				},
				submitHandler: function(form) {
					/*var output = cleanHTML(j('#comment').val());
					j('#comment').val(output);*/
					
					j('#hiperlink-submit').attr('onclick', 'return false;');
					j('#form input[type="submit"]').prop('disabled', 'disabled');
					j('#div-request-in-progress').show();
					j('html, body').animate({scrollTop : 0},200);
					
					j('#div-request-with-errores').hide();
					
					Pace.restart();
		            jQuery.ajax({
		                'dataType'  : 'json',
		                'accept'    : 'application/json',
		                'method'    : 'post',
		                'url'       : jQuery('#form').attr('action'),
		                'data'      : jQuery('#form').serialize(),
		            }).done(function(response) {
		                if(response['success']) {
							ga('send', 'event', 'Request-to-Book', 'Click', 'Car-and-Location');
		                    window.location.href = response['data']		
		                } else {
		                	j('#div-request-with-errores').html(response['data']);
		        			j('#div-request-with-errores').show();
		                
		                }
		            }).fail(function( jqXHR, textStatus, errorThrown) {
		     			j('#div-request-with-errores').html(textStatus);
		        		j('#div-request-with-errores').show();
					
		            }).always(function() {
						j('#form input[type="submit"]').removeProp('disabled');
		            	j('#div-request-in-progress').hide();
		                Pace.stop();
		            });
		            return false;
					
					

					
					//form.submit();
				},
				invalidHandler: function(form, validator) {
					
				}
			});
			
			 j("#pickup_time").timepicker({
				 template: 'dropdown',
				 showInputs: false,
				 showMeridian: false,
	             defaultTime: false,
	             minuteStep: 30
		     });
			 
			 j("#return_time").timepicker({
				 template: 'dropdown',
				 showInputs: false,
				 showMeridian: false,
	             defaultTime: false,
	             minuteStep: 30
		     });
			
			 j("#return_date").datepicker({
				 format: 'mm-dd-yyyy',
			     startDate: '0d',
			     autoclose: true,
			     todayHighlight: true
		     });

			 j("#pickup_date").datepicker({
				 format: 'mm-dd-yyyy',
			     startDate: '0d',
			     autoclose: true,
			     todayHighlight: true
		     }).on('changeDate', function (selected) {
		        var minDate = new Date(selected.date.valueOf());
		        j('#return_date').datepicker('setStartDate', minDate);
		        
		        
		        minDate.setDate(minDate.getDate()+1);
		        

		        j('#return_date').datepicker('setDate', minDate);
		     });
			 
			 j( '#pickup_state').change(function() {
				 var options = j('#pickup_location').prop('options');
				 var max = options.length - 1;
				 for(i = max; i >= 0; i--) {
					 options[i] = null;
				 }
				 var c = 0;
				 for(i = 0; i < locations.length; i++) {
					if(j('#pickup_state').val() == locations[i][0]) {
					 	options[c++] = new Option(locations[i][2], locations[i][1]);
					 }
				 }
			 });
			 
			 j( '#return_state').change(function() {
				 var options = j('#return_location').prop('options');
				 var max = options.length - 1;
				 for(i = max; i >= 0; i--) {
					 options[i] = null;
				 }
				 var c = 0;
				 for(i = 0; i < locations.length; i++) {
					if(j('#return_state').val() == locations[i][0]) {
					 	options[c++] = new Option(locations[i][2], locations[i][1]);
					 }
				 }
			 });

		});