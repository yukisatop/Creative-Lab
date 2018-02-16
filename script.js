$(document).ready(function() {
    $("#get-another-quote-button").click(function(e) {
	e.preventDefault();
	var myurl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
	$.ajax( {
	    url: myurl,
	    dataType : "json",
	    success: function(json) {

		var post = json.shift();
		$('#quote-title').text(post.title);
		$('#quote-content').html(post.content);

		// If the Source is available, use it. Otherwise hide it.
		if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
		    $('#quote-source').html('Source:' + post.custom_meta.Source);
		} else {
		    $('#quote-source').text('');
		}
	    },
	    cache: false
	});
    });
});
