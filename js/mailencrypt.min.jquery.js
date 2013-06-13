$(function(){ $('a[href*="[at]"][href*="[dot]"]').each(function() {
  var email = $(this).attr('href').split('[at]').join('@').split('[dot]').join('.');
  $(this).attr('href', 'mailto:' + email.toLowerCase() + '?Subject=Digital%20Chocolate%20Job%20Application');
  if ($(this).text().length == 0) $(this).text(email);
 });
});