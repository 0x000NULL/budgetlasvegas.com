		var i = 0 ;
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
			
			j("#form").validate({
				 debug: true,
				rules: {
					'state': {
						required: true
					},
					'location': {
						required: true
					},
					'pickup_date': {
						required: true,
						goRentalsDate : true
					},
					'return_date': {
						required: true,
						goRentalsDate : true
					}					
				},
				submitHandler: function(form) {
					 window.location = '/location/' + j('#location').val()  
					 	+ '/search/pickup_date/' + encodeURIComponent(j('#pickup_date').val()) 
					 	+ '/return_date/' + encodeURIComponent(j('#return_date').val())
				},
				invalidHandler: function(form, validator) {
					
				}
			});
			j("#form-select").validate({

				rules: {
					'state_select': {
						required: true
					},
					'location_select': {
						required: true
					},
			
				},
				submitHandler: function(form) {
					 window.location = '/location/' + j('#location_select').val()  
					 	+ '/search/car_type/' + encodeURIComponent(j('#car_type').val())
				},
				invalidHandler: function(form, validator) {
					
				}
			});
			
		 	j('#state option').eq(0).prop('selected', true);
		 	j('#location option').eq(0).prop('selected', true);
		 	
		 	j('#state_select option').eq(0).prop('selected', true);
		 	j('#location_select option').eq(0).prop('selected', true);
		 	

		 	
		 	j('.view-cars-btn').click(function(){
		 		j('#location-select-modal').modal()		
				j('#car_type').val(j(this).attr('data-id'))
			})
			
			 j( '#state' ).change(function() {
				 var options = j('#location').prop('options');
				 var max = options.length - 1;
				 for(i = max; i > 0; i--) {
					 options[i] = null;
				 }
				 var c = 1;
				 for(i = 0; i < locations.length; i++) {
					if(j('#state').val() == locations[i][0]) {
					 	options[c++] = new Option(locations[i][1], locations[i][2]);
					 }
				 }
			 });
			
			 j( '#state_select').change(function() {
				 var options = j('#location_select').prop('options');
				 var max = options.length - 1;
				 for(i = max; i > 0; i--) {
					 options[i] = null;
				 }
				 var c = 1;
				 for(i = 0; i < locations.length; i++) {
					if(j('#state_select').val() == locations[i][0]) {
					 	options[c++] = new Option(locations[i][1], locations[i][2]);
					 }
				 }
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
			 
			 j('#pickup_date').val('');
			 j('#return_date').val('');

			 
		 
		});
