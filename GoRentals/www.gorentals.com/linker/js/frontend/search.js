		var j = jQuery.noConflict(); 
		j(document).ready(function(){
			j('.car-type').click(function(){
				j('#car_type').val(j(this).attr('data-id'));
				search();
			}) 

			j( '#state' ).change(function() {
				 var options = j('#location').prop('options');
				 var max = options.length - 1;
				 for(i = max; i >= 0; i--) {
					 options[i] = null;
				 }
				 var c = 0;
				 for(i = 0; i < locations.length; i++) {
					if(j('#state').val() == locations[i][0]) {
					 	options[c++] = new Option(locations[i][2], locations[i][1]);
					 }
				 }
				 
				search();
			 });
			
			 j( '#location' ).change(function() {
				 search();
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

			 
			j('.inquire-btn').click(function(){
				car 	= j(this).attr('data-id')
				pickup_date	= j('#pickup_date').val().trim();
				return_date	= j('#return_date').val().trim();
				location_id	= j('#location option:selected').val();
				
				
				
				location_name 	= '';
				fbo				= '';

				
				var max = locations.length;
				for(i = 0; i < max ; i++) {
					if(location_id == locations[i][1]) {
						location_name 	= locations[i][3];
						fbo				= locations[i][4];
						break;
					}
				}
				
				s = '/location/' + location_name + '/inquire/car/' + car + '/fbo/' + fbo;
				
				if(pickup_date.length > 0 && return_date.length > 0) {
				 	s = s + '/pickup_date/' + pickup_date + '/return_date/' + return_date; 
				}
				
				ga('send', 'event', 'Inquire', 'Click-Car-location', 'Search-Results');
				window.location.href = s
			}) ;
			
		});	

	    
		function search() {
			car_type 	= jQuery('#car_type').val();
			pickup_date	= jQuery('#pickup_date').val().trim();
			return_date	= jQuery('#return_date').val().trim();
			location_id	= jQuery('#location option:selected').val();
	
			location_name 	= '';
			fbo				= '';
	
				
			var max = locations.length;
			for(i = 0; i < max ; i++) {
				if(location_id == locations[i][1]) {
					location_name 	= locations[i][3];
					fbo				= locations[i][4];
					break;
				}
			}
			
			s = '/location/' + location_name + '/car_type/' + car_type + '/fbo/' + fbo;
			
			if(pickup_date.length > 0 && return_date.length > 0) {
			 	s = s + '/pickup_date/' + pickup_date + '/return_date/' + return_date; 
			}
			
	
			window.location.href = s;
		} 
		


