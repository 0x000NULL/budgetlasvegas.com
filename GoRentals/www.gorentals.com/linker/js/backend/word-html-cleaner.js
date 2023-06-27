

function cleanHTML (s)
{
	
	var tag_search = [ 
	    String.fromCharCode(0x2013), 
	    String.fromCharCode(0x2014), 
	    String.fromCharCode(0x2018),
	    String.fromCharCode(0x2019),
	    String.fromCharCode(0x00AE),
	    String.fromCharCode(0x201C),
	    String.fromCharCode(0x201D),
	    
	];
	var tag_replace = [
	    '&ndash;',                
	    '&mdash;',  
	    '&lsquo;', 
	    '&rsquo;',
	    '&reg;',
	    '&ldquo;',
	    '&rdquo;'
	];
	
	for(i  = 0; i < tag_search.length; i++ ) {
		key = tag_search[i];
	    value = tag_replace[i];
		
		s = s.replace(new RegExp(key, 'g'), value);
	}
	
	return s;
}