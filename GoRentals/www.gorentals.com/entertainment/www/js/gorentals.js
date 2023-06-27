jQuery( document ).ready(function( $ ) {
	$.fn.showError = function(message) 
	{
		$.notify({
			message: message,
		},{
			element: 'body',
			position: null,
			type: 'danger',
			allow_dismiss: true,
			newest_on_top: true,
			showProgressbar: false,
			placement: {
				from: 'top',
				align: 'right'
			},
			offset: 20,
			spacing: 10,
			z_index:1052,
			timer: 500,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
		});
	}
		
	$.fn.showWarning = function(message) 
	{
		$.notify({
			message: message,
		},{
			element: 'body',
			position: null,
			type: 'warning',
			allow_dismiss: true,
			newest_on_top: true,
			showProgressbar: false,
			placement: {
				from: 'top',
				align: 'right'
			},
			offset: 20,
			spacing: 10,
			z_index:1052,
			timer: 500,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
		});
	}
		
	$.fn.showInfo = function(message) 
	{
		$.notify({
			message: message,
		},{
			element: 'body',
			position: null,
			type: 'info',
			allow_dismiss: true,
			newest_on_top: true,
			showProgressbar: false,
			placement: {
				from: 'top',
				align: 'right'
			},
			offset: 20,
			spacing: 10,
			z_index:1052,
			timer: 500,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
		});
	}
		
	$.fn.showSuccess = function(message) 
	{
		$.notify({
			message: message,
		},{
			element: 'body',
			position: null,
			type: 'success',
			allow_dismiss: true,
			newest_on_top: true,
			showProgressbar: false,
			placement: {
				from: 'top',
				align: 'right'
			},
			offset: 20,
			spacing: 10,
			z_index:1052,
			timer: 500,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
		});
	}
});