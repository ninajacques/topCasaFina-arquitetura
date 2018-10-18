$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translateY(50%)')
});
$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translateY(0)')
});