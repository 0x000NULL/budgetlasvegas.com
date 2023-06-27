
$(document).ready(function() {

	/*
    $(".royalSlider").royalSlider({
        // general options go gere
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

    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });


    $('#bx-pager img').each(function(i, item) {

        var bx_width = $('.slide-wrapper').width();
        console.log(bx_width)

        var thumb_width = $('#bx-pager img').width();
        console.log(thumb_width)

        //var number_of_thumbs = $('')


    });
    
    */

    /*
    $('.datepicker').datepicker({
        format: 'mm-dd-yyyy',
        startDate: '0d',
        autoclose: true,
        todayHighlight: true
    });

    $('#pickup-date').datepicker({ 
     todayBtn: "linked", 
     keyboardNavigation: false, 
     todayHighlight: true 
    }); 

    $('#return-date').datepicker({ 
         todayBtn: "linked", 
         keyboardNavigation: false, 
         todayHighlight: true 
    }); 

    $('#pickup-date') 
         .on('changeDate', function(e){ 
             $('#return-date').datepicker('setStartDate', e.date); 
             $('#return-date').val('')
     }); 

    if($('#pickup-date').length > 0 && $('#pickup-date').val())
        $('#return-date').datepicker('setStartDate', $('#pickup-date').val()); 
    //$('#pickup-date').datepicker('setEndDate', $('#return-date').val()); 

    // FOR HERO SECTION
    $('#pickup').datepicker({ 
     todayBtn: "linked", 
     keyboardNavigation: false, 
     todayHighlight: true 
    }); 

    $('#return').datepicker({ 
         todayBtn: "linked", 
         keyboardNavigation: false, 
         todayHighlight: true 
    }); 

    $('#pickup') 
         .on('changeDate', function(e){ 
             $('#return').datepicker('setStartDate', e.date); 
     }); 

    $('#return') 
         .on('changeDate', function(e){ 
             $('#pickup').datepicker('setEndDate', e.date); 
     }); 

    
    */

    $(function() {
        var $affixElement = $('div[data-spy="affix"]');
        $affixElement.width($affixElement.parent().width());
    });


    $(function(){
            $("#sidebar ul li").each(function(){
                var href = $(this).find('a').attr('href');
                if (href == window.location.pathname.match(/[^\/]+$/)[0]){
                       $(this).addClass("active");
                }
           });
    });



});

